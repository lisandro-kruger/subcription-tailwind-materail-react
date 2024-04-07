import React from "react";
import { Typography } from "@mui/material";
import SingleItem from "./Item";

const DisplayItems = ({ subs, eliminarItem, editItem }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom className="font-bold text-xl mb-2">
        Suscripciones
      </Typography>
      {subs.map((item) => (
        <SingleItem
          key={item.id}
          id={item.id}
          price={item.price}
          type={item.type}
          eliminarItem={eliminarItem}
          editItem={editItem}
          className="mb-4"
        />
      ))}
    </>
  );
};

export default DisplayItems;
