export interface IItem {
  id?: number | null;
  title: string;
  description: string;
  category: string;
  image: string;
  createdAt: string;
  link: string;
}

export interface IItemForm extends Omit<IItem, "createdAt"> {
  createdAt?: string;
}
