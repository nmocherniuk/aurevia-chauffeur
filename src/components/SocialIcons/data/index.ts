// import { Instagram } from "@/src/components/SVGManager/Instagram";
import { Whatsapp } from "@/src/components/SVGManager/Whatsapp";
import { Email } from "@/src/components/SVGManager/Email";
import { Phone } from "@/src/components/SVGManager/Phone";

export const socialIcons: Record<
  string,
  { Icon: React.ElementType; url: string; width: number; height: number }
> = {
  whatsapp: {
    Icon: Whatsapp,
    url: "https://wa.me/33611112430",
    width: 28,
    height: 28,
  },
  email: {
    Icon: Email,
    url: "mailto:contact@riviera-prime.com",
    width: 28,
    height: 25,
  },
  mobile: {
    Icon: Phone,
    url: "tel:+33611112430",
    width: 25,
    height: 25,
  },
  // instagram: {
  //   Icon: Instagram,
  //   url: "",
  //   width: 27,
  //   height: 27,
  // },
};
