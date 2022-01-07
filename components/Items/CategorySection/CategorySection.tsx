import React, { HTMLAttributes } from "react";
import ItemCard from "../ItemCard";
import s from "./CategorySection.module.css";

export interface CategorySectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  items: string[];
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  items,
  className,
}) => {
  return (
    <section className={`${s.root} ${className ?? ""}`}>
      <header>
        <h3>{title}</h3>
      </header>
      <section className={s.items}>
        {items.map((item) => (
          <ItemCard key={item}>{item}</ItemCard>
        ))}
      </section>
    </section>
  );
};

export default CategorySection;
