import React, { useState } from "react";
import {
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
  Alert,
} from "@mui/material";

const FormSubs = ({
  setType,
  setPrice,
  type,
  price,
  setSubs,
  subs,
  editId,
  setEditId,
  spent,
  count,
}) => {
  const [error, setError] = useState(false);
  const [errorMoney, setErrorMoney] = useState(false);

  const handleSubs = (e) => {
    e.preventDefault();
    if (price === "" || Number(price) < 0 || type === "") {
      setError(true);
      return;
    }
    if (count - spent < Number(price)) {
      setErrorMoney(true);
      return;
    }
    setError(false);
    setErrorMoney(false);
    if (editId !== "") {
      setEditId("");
      const newSubs = subs.map((item) => {
        if (item.id === editId) {
          item.type = type;
          item.price = price;
        }
        return item;
      });
      setSubs(newSubs);
    } else {
      const data = {
        type: type,
        price: price,
        id: Date.now(),
      };
      setSubs([...subs, data]);
    }

    setType("");
    setPrice("");
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubs}
          className="w-full max-w-lg bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <Typography
            variant="h6"
            gutterBottom
            className="font-bold text-xl mb-2"
          >
            Agregar Suscripciones
          </Typography>
          <Typography variant="body1" gutterBottom className="mb-2">
            Servicio
          </Typography>
          <Select
            fullWidth
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="shadow-md appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          >
            <MenuItem value="">-- Elegir --</MenuItem>
            <MenuItem value="Netflix">Netflix</MenuItem>
            <MenuItem value="DisneyPlus">Disney Plus</MenuItem>
            <MenuItem value="HBOmax">HBO Max</MenuItem>
            <MenuItem value="StarPlus">Star Plus</MenuItem>
            <MenuItem value="PrimeVideo">Prime Videos</MenuItem>
            <MenuItem value="Spotify">Spotify</MenuItem>
            <MenuItem value="ApleTV">ApleTV</MenuItem>
          </Select>
          <div className="mb-4 space-y-4">
            <TextField
              type="number"
              variant="outlined"
              placeholder="Precio"
              fullWidth
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow-md appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Agregar
            </Button>
          </div>
          {error && (
            <div className="bg-red-500 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 m-6">
              Por favor, completa todos los campos.
            </div>
          )}
          {errorMoney && (
            <div className="bg-red-500 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 m-6">
              No tienes suficiente presupuesto para esta suscripción.
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default FormSubs;

/*

<TextField
        type="number"
        variant="outlined"
        placeholder="Precio"
        fullWidth
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      >
        Agregar
      </Button>

*/
