import { FC } from "react";

export const Card: FC = ({ children }) => {
  return (
    <div
      className="p-8 border-2 flex-col space-y-4 items-center w-full max-w-[40rem]"
      style={{
        aspectRatio: "1.612"
      }}
    >
      {children}
    </div>
  );
};