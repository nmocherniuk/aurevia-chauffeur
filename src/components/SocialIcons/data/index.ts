import { Instagram } from "@/src/components/SVGManager/Instagram";
import { Whatsapp } from "@/src/components/SVGManager/Whatsapp";
import { Email } from "@/src/components/SVGManager/Email";
import { Phone } from "@/src/components/SVGManager/Phone";

export const socialIcons: Record<
  string,
  { Icon: React.ElementType; url: string }
> = {
  whatsapp: {
    Icon: Whatsapp,
    url: "test@test.com",
  },
  email: { Icon: Email, url: "test@test.com" },
  mobile: { Icon: Phone, url: "test@test.com" },
  instagram: {
    Icon: Instagram,
    url: "test@test.com",
  },
};
