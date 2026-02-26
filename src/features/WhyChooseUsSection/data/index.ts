import { List } from "@/src/components/SVGManager/List";
import { ShieldCheck } from "@/src/components/SVGManager/ShieldCheck";
import { Clock } from "@/src/components/SVGManager/Clock";
import { Diamond } from "@/src/components/SVGManager/Diamond";

export const whyChooseUsText: Record<
  string,
  { icon: React.ElementType; title: string; description: string }
> = {
  list: {
    icon: List,
    title: "Tarification claire et fixe",
    description:
      "Le prix de votre transfert est confirmé à l’avance. Aucun frais caché, aucune surprise — une transparence à chaque étape.",
  },
  shieldCheck: {
    icon: ShieldCheck,
    title: "Un service digne de confiance",
    description:
      "Des chauffeurs expérimentés, des véhicules impeccables et une discrétion absolue garantissent une expérience sûre et raffinée.",
  },
  clock: {
    icon: Clock,
    title: "Une précision sans compromis",
    description:
      "Chaque détail de votre trajet est soigneusement coordonné afin d’assurer une ponctualité parfaite et un service irréprochable.",
  },
  diamond: {
    icon: Diamond,
    title: "Voyagez dans des conditions d’exception",
    description:
      "Intérieurs spacieux, présentation soignée et prestations haut de gamme subliment chacun de vos déplacements.",
  },
};
