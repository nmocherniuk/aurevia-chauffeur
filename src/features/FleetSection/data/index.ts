export interface Fleet {
  id: string;
  image: string;
  alt: string;
  carClass: string;
  carTitle: string;
  description: string;
  passengers: number;
  baggage: number;
}

export const fleets: Record<string, Fleet[]> = {
  comfort: [
    {
      id: "fleet-comfort-1",
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
