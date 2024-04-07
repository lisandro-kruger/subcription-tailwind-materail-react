import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { moneyFormat } from "../helpers";

const Balance = ({ count, subs, spent, setSpent }) => {
  const updateBalance = () => {
    const totalSpent = subs.reduce(
      (total, item) => Number(item.price) + total,
      0
    );
    setSpent(totalSpent);
  };

  useEffect(() => {
    updateBalance();
  }, [subs]);

  return (
    <>
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <Typography
          variant="h6"
          gutterBottom
          className="font-bold text-xl mb-2"
        >
          Presupuesto: {moneyFormat(count)}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          className="font-bold text-xl mb-2"
        >
          Disponible: {moneyFormat(count - spent)}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          className="font-bold text-xl mb-2"
        >
          Gastado: {moneyFormat(spent)}
        </Typography>
      </div>
    </>
  );
};

export default Balance;
