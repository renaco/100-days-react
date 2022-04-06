import styled from "styled-components";

export const ArticleItem = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  div {
    width: 100%;
    display: flex;
    margin-right: 10px;
  }
`;

export const ArticleImage = styled.img`
  width: 175px;
  height: 130px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ArticleTitle = styled.h5`
  font-size: 14px;
  margin: 0;
`;

export const ArticleParagraph = styled.p`
  font-size: 12px;
`;

export const ArticleDate = styled.p`
  font-size: 11px;
`;

export const ArticleButton = styled.button`
  display: block;
  font-size: 13px;
  padding: 5px 10px;
  background: white;
  border: 1px solid black;
  color: black;
`;

export const ArticleContent = styled.div`
  display: block;
  flex-direction: column;
  margin-left: 10px;
  text-align: left;
  margin-bottom: 10px;
`;
