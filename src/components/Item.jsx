import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { moneyFormat } from "../helpers";
import DeleteItem from "./DeleteItem";

const Item = ({ price, type, id, eliminarItem, editItem }) => {

  const HandleEdit = (e) => {
    e.preventDefault();
    editItem(id);
    window.scrollTo(0, 0); // Añade esta línea
  };

  const urlImage = `/${type}.png`;

  return (
    <>
      <Card className="max-w-md rounded overflow-hidden shadow-lg m-4">
        <CardMedia
          component="img"
          height="140"
          image={urlImage}
          alt="Services"
          className="w-full"
        />
        <CardContent className="px-6 py-4">
          <Typography
            variant="h6"
            gutterBottom
            className="font-bold text-xl mb-2"
          >
            Precio: {moneyFormat(Number(price))}
          </Typography>
          <div className="flex items-center justify-between mt-4">
            <Button
              variant="contained"
              color="primary"
              onClick={HandleEdit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Editar
            </Button>
            <DeleteItem type={type} id={id} eliminarItem={eliminarItem} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Item;
