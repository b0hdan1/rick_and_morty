import React, { useState, useEffect } from "react";
import { MyWatchListTable } from "./MyWatchListTable";
import { MyWatchListForm } from "./MyWatchListForm";

import "./MyWatchList.scss";

export const MyWatchList = () => {
  const dataItem = [
    {
      episode: "Anatomy Park",
      id: 0,
      clicked: false,
    },
    {
      episode: "Rixty Minutes",
      id: 1,
      clicked: true,
    },
  ];
  const [showErrorMessage, setErrorMessage] = useState(true);
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || dataItem
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="card-watch-list">
        <MyWatchListForm
          items={items}
          setErrorMessage={setErrorMessage}
          showErrorMessage={showErrorMessage}
          setItems={setItems}
        />
      </div>
      <MyWatchListTable
        items={items}
        setItems={setItems}
        setErrorMessage={setErrorMessage}
      />
    </>
  );
};
