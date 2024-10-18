import React from "react";
import { useContextIndexPage } from "../../provider/ContextIndexPage";
import { IItem } from "../../types/indexPageTypes";
import Image from "next/image";
import AddTaskModal from "./AddTaskModal";

const Header = () => {
  const { items } = useContextIndexPage();
  console.log(items);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tất cả danh sách mục</h1>
      <AddTaskModal/>
      <ul className="grid grid-cols-3">
        {items.map((item: IItem) => (
          <li key={item.id} className="mb-4 border p-4 rounded shadow flex">
            <div className="">
              <Image
                src={item.image}
                width={200}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>Mô tả: {item.description}</p>
              <p>
                <strong>Danh mục:</strong> {item.category}
              </p>
              <p>
                <strong>Thời gian tạo:</strong>{" "}
                {new Date(item.createdAt).toLocaleTimeString("vi-VN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: true,
                })}
                {" | "}
                {new Date(item.createdAt).toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
              <a href={item.link} target="_" className="text-green-500">Link nè</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
