import { createContext, useContext } from "react";
import { IItem, IItemForm } from "../types/indexPageTypes";

export interface IContext {
  items: IItem[];
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  task: IItem;
  setTask: React.Dispatch<React.SetStateAction<IItem>>;
  handleSubmit: (item: IItemForm) => void; // Không xử lý sự kiện nữa, mà xử lý item từ form
}

export const ContextIndexPage = createContext<IContext | undefined>(
  undefined
);

export const useContextIndexPage = () => {
  const context = useContext(ContextIndexPage);
  if (!context) {
    throw new Error("useContextIndexPage must be used within ProviderIndexPage");
  }
  return context;
};

// text: string;
// setValuefForText: (newText: string) => void;

// text: "Hello world!",
// setValuefForText: mockFunc,
