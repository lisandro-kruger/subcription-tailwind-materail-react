import React, { useState } from "react";
import { Typography, TextField, Button, Alert } from "@mui/material";

const FormMoney = ({ setCount, setIsValid }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (input === "" || Number(input) < 0) {
      setError(true);
      return;
    }
    setError(false);
    setCount(Number(input));
    setIsValid(true);
  };

  return (
    <>
      <div className="flex items-start justify-center h-96 bg-gradient-to-r from-blue-100 to-teal-100 pt-8">
        <form
          onSubmit={handleForm}
          className="w-full max-w-lg bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 space-y-4">
            <Typography variant="h6" gutterBottom className="font-bold text-xl">
              Agregar Presupuesto
            </Typography>
            <TextField
              type="number"
              variant="outlined"
              placeholder="300$"
              fullWidth
              onChange={(e) => setInput(e.target.value)}
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
          </div>
        </form>
        {error && (
          <div className="bg-red-500 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 m-6">
            Presupuesto inválido
          </div>
        )}
      </div>
    </>
  );
};

export default FormMoney;
