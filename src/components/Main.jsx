import React, { useState } from "react";
import Balance from "./Balance";
import DisplayItems from "./DisplayItems";
import FormSubs from "./FormSubs";

const Main = ({ count }) => {
  const [subs, setSubs] = useState([]);
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState("");
  const [spent, setSpent] = useState(0);

  const eliminarItem = (id) => {
    const newList = subs.filter((item) => item.id !== id);
    setSubs(newList);
  };

  const editItem = (id) => {
    setEditId(id);
    subs.forEach((item) => {
      if (item.id === id) {
        setType(item.type);
        setPrice(item.price);
      }
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-teal-100">
        <div className="w-full max-w-lg rounded-lg px-8 pt-6">
          <Balance
            count={count}
            subs={subs}
            spent={spent}
            setSpent={setSpent}
            className=""
          />
          <FormSubs
            setType={setType}
            setPrice={setPrice}
            type={type}
            price={price}
            setSubs={setSubs}
            subs={subs}
            editId={editId}
            setEditId={setEditId}
            spent={spent}
            count={count}
            className=""
          />
        </div>
        <DisplayItems
          subs={subs}
          eliminarItem={eliminarItem}
          editItem={editItem}
          className=""
        />
      </div>
    </>
  );
};

export default Main;
