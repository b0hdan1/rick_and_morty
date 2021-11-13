import React from "react";
import { Table } from "react-bootstrap";
import "./RenderList.scss";

export const RenderList = ({ list, filterBy }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>{filterBy === "location" ? "Type" : "Date"}</th>
          <th>{filterBy === "location" ? "Dimention" : "Episode"}</th>
        </tr>
      </thead>
      <tbody>
        {list.map((el) => (
          <tr key={el.id}>
            <td>#{el.id}</td>
            <td>{el.name}</td>
            <td>{el.air_date ? el.air_date : el.type}</td>
            <td>{el.episode ? el.episode : el.dimension}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
