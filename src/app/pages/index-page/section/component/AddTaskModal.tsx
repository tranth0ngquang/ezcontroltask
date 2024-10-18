import { useForm } from "react-hook-form";
import { useContextIndexPage } from "../../provider/ContextIndexPage";
import { yupResolver } from "@hookform/resolvers/yup";
import { taskSchema } from "../../schema/taskSchema";
import { IItemForm } from "../../types/indexPageTypes";

const AddTaskModal = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    handleSubmit: submitTask,
  } = useContextIndexPage();

  const {
    register,
    handleSubmit: handleSubmitTask,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    resolver: yupResolver(taskSchema), // Sử dụng Yup resolver với schema
  });

  // Hàm onSubmit lấy dữ liệu từ form
  const onSubmit = (data: IItemForm) => {
    // Gọi submitTask từ context để lưu task
    submitTask({
      ...data,
    });
    reset();
  };

  return (
    <>
      {/* Nút để mở modal */}
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        onClick={() => setIsModalOpen(true)}
      >
        Thêm công việc
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl mb-4 text-blue-800">Thêm công việc mới</h2>
            <form onSubmit={handleSubmitTask(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-green-500">
                  Tiêu đề
                </label>
                {/* <input
                  type="text"
                  id="title"
                  className="w-full p-2 border rounded text-black"
                  autoComplete="on"
                  {...register("title")} // Sử dụng register để quản lý input
                /> */}
                <select
                  className="w-full p-2 border rounded text-black"
                  {...register("title")} // Sử dụng register để quản lý input
                >
                  <option value="" disabled>
                    -- Chọn tiêu đề --
                  </option>
                  <option value="Mua áo">Mua áo</option>
                  <option value="Mua quần">Mua quần</option>
                </select>
                {errors.title && (
                  <p className="text-red-500">{errors.title.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-green-500">
                  Mô tả
                </label>
                <textarea
                  className="w-full p-2 border rounded text-black"
                  {...register("description")}
                />
                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-green-500">
                  Danh mục
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded text-black"
                  {...register("category")}
                />
                {errors.category && (
                  <p className="text-red-500">{errors.category.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-green-500 ">
                  Hình ảnh (URL)
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded text-black"
                  {...register("image")}
                />
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-green-500">
                  Link
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded text-black"
                  {...register("link")}
                />
                {errors.link && (
                  <p className="text-red-500">{errors.link.message}</p>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-black hover:bg-gray-400 py-2 px-4 rounded mr-2 "
                  onClick={() => {
                    setIsModalOpen(false);
                    reset();
                  }}
                >
                  Hủy
                </button>

                <button
                  type="submit"
                  className={`py-2 px-4 rounded ${
                    !isDirty
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed" // Class khi disabled
                      : "bg-blue-500 text-white hover:bg-blue-700" // Class khi enabled
                  }`}
                  disabled={!isDirty}
                >
                  Thêm công việc
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTaskModal;
