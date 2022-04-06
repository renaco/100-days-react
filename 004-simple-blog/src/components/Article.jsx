import React from "react";
import {
  ArticleButton,
  ArticleItem,
  ArticleImage,
  ArticleTitle,
  ArticleParagraph,
  ArticleDate,
  ArticleContent,
} from "./styled";
import dayjs from "dayjs";

export const Article = ({ ...props }) => {
  const handlerButton = (event) => {
    console.log(event);
  }
  return (
    <ArticleItem>
      {props.items.map((item, index) => {
        return (
          <div key={index}>
            <ArticleImage src={item.image} />
            <ArticleContent>
              <ArticleTitle>{item.title}</ArticleTitle>
              <ArticleParagraph>{item.subheading}</ArticleParagraph>
              <ArticleDate>
                {dayjs(item.date).format("ddd MMM DD YYYY")}
              </ArticleDate>
              <ArticleButton onClick={() => {handlerButton(index)}}>Button</ArticleButton>
            </ArticleContent>
          </div>
        );
      })}
    </ArticleItem>
  );
};
