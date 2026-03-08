export interface Fleet {
  id: string;
  /** Головне зображення (використовується в картці та fallback для каруселі). */
  image: string;
  /** Додаткові фото для каруселі в модалці. Якщо не задано, використовується лише image. */
  images?: string[];
  alt: string;
  carClass: string;
  carTitle: string;
  description: string;
  passengers: number;
  baggage: number;
  /** Тип авто (наприклад "Luxury Sedan"). */
  vehicleType?: string;
  /** Рік випуску. */
  modelYear?: string | number;
  /** Тип коробки (наприклад "Automatic"). */
  transmission?: string;
  /** Оздоблення салону (наприклад "Leather"). */
  interior?: string;
  /** Список опцій/зручностей для тегів у модалці. */
  amenities?: string[];
}

export const fleets: Record<string, Fleet[]> = {
  comfort: [
    {
      id: "fleet-comfort-1",
      image: "/images/dummy-car.png",
      images: ["/images/dummy-car.png", "/images/dummy-car.png", "/images/dummy-car.png"],
      alt: "Alt 1",
      carClass: "Comfort",
      carTitle: "Mercedes Class S580",
      description:
        "Élégance et confort pour vos trajets privés ou professionnels en toute sérénité.",
      passengers: 3,
      baggage: 3,
      vehicleType: "Luxury Sedan",
      modelYear: "2023",
      transmission: "Automatic",
      interior: "Leather",
      amenities: ["Climate control", "Wi-Fi onboard", "Phone chargers", "bottled water"],
    },
    {
      id: "fleet-comfort-2",
      image: "/images/dummy-car.png",
      alt: "Alt 2",
      carClass: "Business",
      carTitle: "Mercedes-Benz S-Class",
      description:
        "Élégance et confort pour vos trajets privés ou professionnels en toute sérénité.",
      passengers: 4,
      baggage: 2,
    },
    {
      id: "fleet-comfort-3",
      image: "/images/dummy-car.png",
      alt: "Alt 3",
      carClass: "Van",
      carTitle: "Mercedes-Benz Sprinter",
      description:
        "Élégance et confort pour vos trajets privés ou professionnels en toute sérénité.",
      passengers: 4,
      baggage: 2,
    },
  ],
  business: [
    {
      id: "fleet-business-1",
      image: "/images/dummy-car.png",
      alt: "Alt 1",
      carClass: "Comfort",
      carTitle: "Mercedes-Benz E-Class",
      description:
        "Élégance et confort pour vos trajets privés ou professionnels en toute sérénité.",
      passengers: 4,
      baggage: 2,
    },
    {
      id: "fleet-business-2",
      image: "/images/dummy-car.png",
      alt: "Alt 2",
      carClass: "Business",
      carTitle: "Mercedes-Benz S-Class",
      description:
        "Élégance et confort pour vos trajets privés ou professionnels en toute sérénité.",
      passengers: 4,
      baggage: 2,
    },
    {
      id: "fleet-business-3",
      image: "/images/dummy-car.png",
      alt: "Alt 3",
      carClass: "Van",
      carTitle: "Mercedes-Benz Sprinter",
      description:
        "Élégance et confort pour vos trajets privés ou professionnels en toute sérénité.",
      passengers: 4,
      baggage: 2,
    },
  ],
  van: [
    {
      id: "fleet-van-1",
      image: "/images/dummy-car.png",
      alt: "Alt 1",
      carClass: "Comfort",
      carTitle: "Mercedes-Benz E-Class",
      description:
        "Élégance et confort pour vos trajets privés ou professionnels en toute sérénité.",
      passengers: 4,
      baggage: 2,
    },
    {
      id: "fleet-van-2",
      image: "/images/dummy-car.png",
      alt: "Alt 2",
      carClass: "Business",
      carTitle: "Mercedes-Benz S-Class",
      description:
        "Élégance et confort pour vos trajets privés ou professionnels en toute sérénité.",
      passengers: 4,
      baggage: 2,
    },
    {
      id: "fleet-van-3",
      image: "/images/dummy-car.png",
      alt: "Alt 3",
      carClass: "Van",
      carTitle: "Mercedes-Benz Sprinter",
      description:
        "Élégance et confort pour vos trajets privés ou professionnels en toute sérénité.",
      passengers: 4,
      baggage: 2,
    },
  ],
};
