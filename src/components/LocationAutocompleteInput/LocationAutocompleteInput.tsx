"use client";

import React, { useCallback, useId, useRef, useState, useMemo } from "react";
import { cn } from "@/src/lib/utils";
import { useDebouncedValue } from "@/src/hooks/useDebouncedValue";
import { useClickOutside } from "@/src/components/CustomSelect/hooks/useClickOutside";
import type { NominatimSearchHit } from "@/src/lib/places/nominatimTypes";
import { formatLocationSuggestion } from "@/src/lib/places/formatLocationSuggestion";
import { Location } from "@/src/components/SVGManager/Location";
import { usePlacesSearch } from "./usePlacesSearch";

export type SelectedPlace = {
  label: string;
  lat: number;
  lng: number;
};

export type LocationAutocompleteInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  error?: string | null;
  hint?: string;
  disabled?: boolean;
  onChangeText: (text: string) => void;
  onSelect: (place: SelectedPlace) => void;
  onBlur: () => void;
  onFocus: () => void;
};

const DEBOUNCE_MS = 400;

function hitToPlace(hit: NominatimSearchHit): SelectedPlace | null {
  const lat = Number.parseFloat(hit.lat);
  const lng = Number.parseFloat(hit.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  const { title, subtitle } = formatLocationSuggestion(hit);
  const label = subtitle ? `${title}, ${subtitle}` : title;
  return {
    label: label.trim() || hit.display_name.trim(),
    lat,
    lng,
  };
}

export function LocationAutocompleteInput({
  name,
  label,
  placeholder = "",
  value,
  error,
  hint,
  disabled,
  onChangeText,
  onSelect,
  onBlur,
  onFocus,
}: LocationAutocompleteInputProps) {
  const inputId = useId();
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const debounced = useDebouncedValue(value, DEBOUNCE_MS);
  const { hits, loading, showNoResults } = usePlacesSearch(debounced);

  const queryReady = debounced.trim().length >= 2;
  const panelVisible =
    open &&
    focused &&
    queryReady &&
    (loading || hits.length > 0 || showNoResults);

  useClickOutside(containerRef, panelVisible, () => {
    setOpen(false);
    setActiveIndex(-1);
  });

  const effectiveActiveIndex = useMemo(() => {
    if (hits.length === 0) return -1;
    return Math.min(Math.max(activeIndex, -1), hits.length - 1);
  }, [hits, activeIndex]);

  const pick = useCallback(
    (hit: NominatimSearchHit) => {
      const place = hitToPlace(hit);
      if (!place) return;
      onSelect(place);
      setOpen(false);
      setActiveIndex(-1);
    },
    [onSelect],
  );

  const handleMouseLeaveList = useCallback(() => setActiveIndex(-1), []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && panelVisible) {
      e.preventDefault();
      const idx = effectiveActiveIndex;
      if (idx >= 0 && idx < hits.length) {
        pick(hits[idx]);
      }
      return;
    }
    if (!panelVisible || hits.length === 0) {
      if (e.key === "Escape") {
        setOpen(false);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => {
        const cur =
          hits.length === 0
            ? -1
            : Math.min(Math.max(i, -1), hits.length - 1);
        if (cur < hits.length - 1) return cur + 1;
        return cur;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => {
        const cur =
          hits.length === 0
            ? -1
            : Math.min(Math.max(i, -1), hits.length - 1);
        if (cur > 0) return cur - 1;
        return -1;
      });
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      setActiveIndex(-1);
    }
  };

  const describedBy = [
    hint ? `${inputId}-hint` : null,
    error ? `${inputId}-err` : null,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  const activeDescendant =
    effectiveActiveIndex >= 0
      ? `${listboxId}-opt-${effectiveActiveIndex}`
      : undefined;

  return (
    <div className={cn("relative flex flex-col gap-1")} ref={containerRef}>
      <div
        className={cn(
          "group flex flex-col gap-1",
          disabled && "opacity-90",
        )}
      >
        <label
          className={cn(
            "pl-1 text-sm text-text-primary transition-colors",
            "group-focus-within:text-primary",
          )}
          htmlFor={inputId}
        >
          {label}
        </label>

        <div className="relative w-full">
          <div
            className={cn(
              "flex h-[46px] max-h-[46px] w-full items-center rounded-md border border-grey bg-transparent px-4 py-3 text-left font-light text-sm transition-colors",
              "focus-within:border-primary focus-visible:border-primary",
              "disabled:bg-background disabled:cursor-not-allowed",
              error && "border-text-error",
            )}
          >
            <input
              id={inputId}
              name={name}
              type="text"
              autoComplete="off"
              aria-autocomplete="list"
              aria-expanded={panelVisible}
              aria-controls={listboxId}
              aria-activedescendant={activeDescendant}
              role="combobox"
              disabled={disabled}
              placeholder={placeholder}
              className={cn(
                "w-full flex-1 border-none bg-transparent text-sm text-text-secondary outline-none placeholder:text-grey",
              )}
              value={value}
              aria-invalid={Boolean(error) || undefined}
              aria-describedby={describedBy}
              onChange={(e) => {
                onChangeText(e.target.value);
                setOpen(true);
              }}
              onFocus={() => {
                setFocused(true);
                setOpen(true);
                onFocus();
              }}
              onBlur={() => {
                setFocused(false);
                onBlur();
              }}
              onKeyDown={onKeyDown}
            />
          </div>

          {panelVisible ? (
            <ul
              id={listboxId}
              role="listbox"
              className={cn(
                "absolute left-0 right-0 top-[calc(100%+7px)] z-1000 max-h-60 list-none overflow-y-auto overflow-x-hidden rounded-md border border-grey-light bg-white p-1 shadow-lg",
                "animate-[slideDown_0.2s_ease-out]",
              )}
              onMouseLeave={handleMouseLeaveList}
            >
              {loading ? (
                <div
                  className="px-3 py-2.5 text-sm text-black/80"
                  role="status"
                  aria-live="polite"
                >
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary border-t-transparent"
                      aria-hidden
                    />
                    Searching…
                  </span>
                </div>
              ) : null}

              {!loading && showNoResults ? (
                <div className="px-3 py-2.5 text-sm text-grey">
                  No results found
                </div>
              ) : null}

              {!loading &&
                hits.map((hit, index) => {
                  const active = index === effectiveActiveIndex;
                  const { title, subtitle } = formatLocationSuggestion(hit);
                  const optionLabel = subtitle ? `${title}, ${subtitle}` : title;
                  return (
                    <li
                      key={`${hit.lat}-${hit.lon}-${hit.display_name.slice(0, 32)}`}
                      id={`${listboxId}-opt-${index}`}
                      role="option"
                      aria-selected={active}
                      aria-label={optionLabel}
                      className={cn(
                        "flex cursor-pointer items-center justify-between gap-2 py-2.5 px-3 text-sm text-black transition-colors",
                        "hover:bg-black/5",
                        active && "bg-black/5",
                      )}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => pick(hit)}
                    >
                      <div className="flex min-w-0 flex-1 items-start gap-2.5 overflow-hidden">
                        <Location
                          width={18}
                          height={18}
                          aria-hidden
                          className="mt-0.5 shrink-0 text-grey"
                          fill="currentColor"
                        />
                        <div className="min-w-0 flex-1 overflow-hidden">
                          <div className="truncate font-medium text-black">
                            {title}
                          </div>
                          {subtitle ? (
                            <div className="truncate text-xs text-grey">
                              {subtitle}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          ) : null}
        </div>

        {hint && !error ? (
          <p id={`${inputId}-hint`} className="pl-1 text-xs text-text-primary">
            {hint}
          </p>
        ) : null}
      </div>

      <div
        id={`${inputId}-err`}
        role="alert"
        className="h-[14px] pl-1 text-xs leading-normal text-text-error"
        aria-live="polite"
      >
        {error ?? null}
      </div>
    </div>
  );
}
