import React from "react";
import { Form, CloseButton } from "react-bootstrap";
import classNames from 'classnames';

export const MyWatchListTable = ({ items, setItems, setErrorMessage }) => {
  const dataItem = [
    {
      episode: 'Anatomy Park',
      id: 0,
    },
    {
      episode: 'Rixty Minutes',
      id: 1,
    }
  ]

  const checkClick = (elID) => {
    setItems(items.map(el => {
      if (el.id === elID) {
        el.clicked = !el.clicked;
      }
      return el;
    }));
  }

  const removeItem = (idItem) => {
    setItems(items.filter((item) => item.id !== idItem));
    setErrorMessage(true);
  }
  return (
    <table className="table_watch-list">
    <thead className="">
      <tr className="table-row">
        <th className="head-todo">Episode</th>
        <th className="head-todo">Checked</th>
        <th className="head-todo">Remove</th>
      </tr>
    </thead>
    <tbody className="current-tbody">
    <tr className="table-row">
      <td className="table-data complete">{dataItem[0].episode}</td>
      <td className="table-data" >
        <Form.Check aria-label="option 1" checked disabled/>
      </td>
      <td className="table-data">
        <CloseButton disabled/>
      </td>
    </tr>
    <tr className="table-row">
      <td className="table-data">{dataItem[1].episode}</td>
      <td className="table-data" >
      <input type="checkbox" disabled/>
      </td>
      <td className="table-data">
        <CloseButton disabled/>
      </td>
    </tr>
    {items.map((list) => (
      <tr key={list.id} className="table-row">
        <td className={classNames(
            list.clicked
            ? 'table-data complete'
            : 'table-data'
          )}
        >
        {list.episode}</td>
        <td className="table-data">
          <input
            type="checkbox"
            onClick={() => checkClick(list.id)}
            defaultChecked={list.clicked}
          />
        </td>
        <td className="table-data">
          <CloseButton onClick={() => removeItem(list.id)}/>
        </td>
      </tr>
    ))}
    </tbody>
  </table>
  )
}
