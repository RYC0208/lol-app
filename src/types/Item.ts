export type ItemList = {
  [key: string]: Item;
};
export interface Item {
  id: string;
  colloq: string;
  name: string;
  description: string;
  inStore: boolean;
  image: {
    full: string;
  };
  maps: {
    [key: string]: boolean;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  into: string[];
  from: string[];
}
