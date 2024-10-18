import * as Yup from "yup";

export const taskSchema = Yup.object().shape({
  title: Yup.string().required("Tiêu đề là bắt buộc"),
  description: Yup.string().required("Mô tả là bắt buộc"),
  category: Yup.string().required("Danh mục là bắt buộc"),
  image: Yup.string()
    .url("Đường dẫn hình ảnh không hợp lệ")
    .required("ảnh là bắt buộc không bị lỗi đó cha nội"),
  link: Yup.string().url("Đường dẫn không hợp lệ").required('bắt buộc djt me met qua'),
});
