import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {" "}
        {title
          ? ` ${title} | Sell My Fone`
          : "Sell My Fone"}
      </title>
      <meta
        name="description"
        content={
          description
            ? ` ${description} `
            : "Dashtar : React Grocery & Organic Food Store e-commerce Admin Dashboard"
        }
      />
    </Helmet>
  );
};

export default PageTitle;
