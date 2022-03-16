import { FC } from "react";

export const Paragraph: FC = ({ children }) => {
  return (
    <p className="truncated-paragraph">
      {children}
    </p>
  );
};