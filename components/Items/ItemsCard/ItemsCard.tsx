import React, { HTMLAttributes } from "react";
import s from "./ItemsCard.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: string; // | JSX.Element;
}

const ItemsCard: React.FC<CardProps> = ({ children, className }) => {
  return (
    <button className={`${s.root} ${className ?? ""}`}>
      <p>{children}</p>
      <div>+</div>
    </button>
  );
};

export default ItemsCard;
