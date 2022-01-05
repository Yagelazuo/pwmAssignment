export enum SortTypeEnums {
  cheapest = "cheapest",
  mostExpensive = "mostExpensive",
  topRated = "topRated",
}

export interface Item {
  id: string;
  name: string;
  picture: any;
  rate: number;
  price: number;
  description: string;
  related: string[];
}
