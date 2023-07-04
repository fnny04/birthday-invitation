import { FC, ReactElement } from "react";

export const Navbar: FC = (): ReactElement => {
  return (
    <div className="fixed bottom-6 left-8 bg-white w-[350px] py-2 rounded-md">
      <div className="grid grid-cols-4 gap-2 px-4">
        <a href="#home">
          <div className="flex justify-center items-center w-20 h-20 rounded-full bg-pink-100">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/bubbles/50/confetti.png"
              alt="confetti"
            />
          </div>
        </a>
        <a href="#alamat">
          {" "}
          <div className="flex justify-center items-center w-20 h-20 rounded-full bg-pink-100">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/dusk/64/home--v1.png"
              alt="home--v1"
            />
          </div>
        </a>
        <a href="#jadwal">
          <div className="flex justify-center items-center w-20 h-20 rounded-full bg-pink-100">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/plasticine/100/calendar--v1.png"
              alt="calendar--v1"
            />
          </div>
        </a>
        <a href="#comments">
          <div className="flex justify-center items-center w-20 h-20 rounded-full bg-pink-100">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/bubbles/50/topic.png"
              alt="topic"
            />
          </div>
        </a>
      </div>
    </div>
  );
};
