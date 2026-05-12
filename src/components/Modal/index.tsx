"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { cn } from "@/src/lib/utils";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  role?: "dialog" | "alertdialog";
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
};

export type ModalRef = {
  close: () => void;
};

const Modal = forwardRef<ModalRef, ModalProps>(function Modal(
  {
    open,
    onClose,
    children,
    className,
    role = "dialog",
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
  },
  ref,
) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const close = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) {
      dialog.close();
      onClose();
    }
  }, [onClose]);

  useImperativeHandle(ref, () => ({ close }), [close]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  const handleContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      role={role}
      aria-modal="true"
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      className="fixed inset-0 z-50 m-0 flex h-full w-full max-h-none max-w-none items-center justify-center border-0 bg-transparent p-0"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden onClick={close} />
      <div
        role="presentation"
        onClick={handleContentClick}
        className={cn(
          "relative z-10 w-full max-w-[calc(100vw-2rem)] max-h-[calc(100dvh-2rem)] overflow-auto rounded-xl border border-grey bg-background p-0 shadow-lg transition-opacity duration-200",
          className,
        )}
      >
        {children}
      </div>
    </dialog>
  );
});

export default Modal;
