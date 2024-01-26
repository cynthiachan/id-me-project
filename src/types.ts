export interface Props {
  results: Result[];
}

export type Result = {
  id: number;
  location: string;
  purchaseDate: string;
  category: string;
  description: string;
  price: number;
  name: string;
};
