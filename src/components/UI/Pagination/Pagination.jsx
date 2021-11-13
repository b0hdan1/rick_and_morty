import React from "react";
import "./Pagination.scss";
import Button from "@mui/material/Button";

export const Pagination = ({ nextPage, prevPage }) => {
  return (
    <>
      <Button variant="contained" size="small" onClick={prevPage}>
        Prev
      </Button>
      <Button variant="contained" size="small" onClick={nextPage}>
        Next
      </Button>
    </>
  );
};
