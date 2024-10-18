import { ContextIndexPage } from "./ContextIndexPage"; // Đảm bảo đường dẫn đúng
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTask, fetchItems } from "../api/getData.request";
import { IItem, IItemForm } from "../types/indexPageTypes";
import { useState } from "react";

export const ProviderIndexPage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState<IItem>({
    id: null,
    title: "",
    description: "",
    category: "",
    image: "",
    createdAt: "",
    link: "",
  });

  // Sử dụng useQuery để gọi API và xử lý dữ liệu
  const {
    data: items = [], // Dữ liệu mặc định là một mảng rỗng
    error: fetchingItemsError,
    isLoading: isFetchingItems,
  } = useQuery<IItem[]>({
    queryKey: ["items"],
    queryFn: fetchItems, // Gọi hàm fetchItems để lấy và sắp xếp dữ liệu
    refetchOnWindowFocus: false, // Không gọi lại API khi người dùng chuyển cửa sổ
  });

  // tạo
  const { mutate: createTask } = useMutation({
    mutationFn: addTask, // Hàm addTask được dùng để POST công việc mới
    onSuccess: () => {
      // Khi thêm thành công, invalidate query để refetch danh sách các công việc
      queryClient.invalidateQueries({ queryKey: ["items"] });
      setIsModalOpen(false); // Đóng modal sau khi thành công
    },
    onError: () => {
      alert("thất bại");
    },
  });

  const handleSubmit = (item: IItemForm) => {
    // Xử lý việc tạo task, không cần e.preventDefault()
    createTask({
      ...item,
      createdAt: new Date().toISOString(), // Thêm thời gian hiện tại
    });
  };

  if (isFetchingItems) return <p>Đang tải dữ liệu...</p>;
  if (fetchingItemsError)
    return <p>Có lỗi xảy ra: {fetchingItemsError.message}</p>;

  return (
    <ContextIndexPage.Provider
      value={{
        items,
        handleSubmit,
        isModalOpen,
        setIsModalOpen,
        task,
        setTask,
      }}
    >
      {children}
    </ContextIndexPage.Provider>
  );
};

// const [text, setText] = useState<IContext['text']>("click để đẹp trai");

// const setValuefForText = () =>{
//   setText(()=>{
//     if (text === 'chưa đổi' ){
//       return 'đã đổi'
//     }else{
//       return 'chưa đổi'
//     }
//   })
// }
