import React from "react";
import { NavLink } from "react-router-dom";
import "./ItemCard.css";

export default function ItemCard(props) {
  
  let article = "";
  for (let i = 0; i < props.Article.length; i++) {
    article += props.Article[i];
    if (article.length > 250) {
      break;
    }
  }

  article = article.substring(0, 250);
  const location = {
    pathname: "/blog",
      state: {
          ...props,
            },
  };

  return (
    <NavLink to={location}>
      <div className="item-card">
        <img className="item-card-image" src={props.Image} alt="item" />
        <div className="item-card-content">
          <p>
            <span>Title : </span>
            {props.Title}{" "}
          </p>
          <p>
            <span>Date : </span>
            {props.Date}{" "}
          </p>
          <p>
            <span>Creator : </span>
            {props.Creator}{" "}
          </p>
          <p>
            <span>Article : </span>
            <p>{article + "..."}</p>{" "}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
