import React, { HTMLAttributes } from "react";
import s from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: string | JSX.Element;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${s.root} ${className ?? ""}`}>{children}</div>;
};

export default Card;
