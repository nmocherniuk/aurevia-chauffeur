import {
  DRIVER_HEADER_NAV_SCROLL_OFFSET,
  scrollToSection,
} from "@/src/lib/utils";

const BOOKING_FORM_SECTION_ID = "reserver";

export function scrollToBookingFormSmooth(): void {
  scrollToSection(BOOKING_FORM_SECTION_ID, DRIVER_HEADER_NAV_SCROLL_OFFSET);
}

/** Після `router.push` дочекатися наступного кадру(ів), щоб секція вже була в DOM. */
export function scrollToBookingFormSmoothAfterNav(): void {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scrollToBookingFormSmooth();
    });
  });
}
