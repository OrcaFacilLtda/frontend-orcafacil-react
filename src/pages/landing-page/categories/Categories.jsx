import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  CategoriesStyled from "./Categories.Style.jsx";
import categories from "./data.js";

function Categories() {
  return (
    <CategoriesStyled.Section>
      <CategoriesStyled.Title>Principais Categorias</CategoriesStyled.Title>
      <CategoriesStyled.Description>
        Encontre o profissional ideal para cada necessidade
      </CategoriesStyled.Description>
      <CategoriesStyled.CardsContainer>
        {categories.map((item, index) => (
          <CategoriesStyled.Card key={index} color={item.color}>
            <FontAwesomeIcon icon={item.icon} />
            <CategoriesStyled.Label>{item.label}</CategoriesStyled.Label>
          </CategoriesStyled.Card>
        ))}
      </CategoriesStyled.CardsContainer>
    </CategoriesStyled.Section>
  );
}

export default Categories;
