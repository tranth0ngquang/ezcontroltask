import { IItem } from "../types/indexPageTypes";
import apiClient from "./apiClient";

export const fetchItems = async (): Promise<IItem[]> => {
  const { data } = await apiClient.get<IItem[]>("/ToDoList"); // Gọi API từ MockAPI để lấy tất cả mục
  console.log(data);
  return data.sort(
    (a: IItem, b: IItem) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

// Hàm POST để thêm công việc mới vào MockAPI
export const addTask = async (newTask: IItem) => {
  const response = await apiClient.post("/ToDoList", newTask); // '/items' là endpoint MockAPI của bạn
  return response.data;
};
