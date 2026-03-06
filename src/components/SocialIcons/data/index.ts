import { Instagram } from "@/src/components/SVGManager/Instagram";
import { Whatsapp } from "@/src/components/SVGManager/Whatsapp";
import { Email } from "@/src/components/SVGManager/Email";
import { Phone } from "@/src/components/SVGManager/Phone";

export const socialIcons: Record<
  string,
  { Icon: React.ElementType; url: string; width: number; height: number }
> = {
  whatsapp: {
    Icon: Whatsapp,
    url: "test@test.com",
    width: 28,
    height: 28,
  },
  email: {
    Icon: Email,
    url: "test@test.com",
    width: 28,
    height: 25,
  },
  mobile: {
    Icon: Phone,
    url: "test@test.com",
    width: 25,
    height: 25,
  },
  instagram: {
    Icon: Instagram,
    url: "test@test.com",
    width: 27,
    height: 27,
  },
};
