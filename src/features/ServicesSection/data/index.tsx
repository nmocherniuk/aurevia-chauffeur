export interface Service {
  id: string;
  image: string;
  title: string;
  description: string;
  alt: string;
}

export type SecurityService = Service & {
  highlights: string[];
};
