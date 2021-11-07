import React, { useState } from "react";

export const MyWatchListForm = ({ items, setErrorMessage, showErrorMessage, setItems}) => {
  const [item, setItem] = useState('');
  const [id, setId] = useState(items[items.length -1] ? items[items.length -1].id + 1 : 2);

  const newEpisode = () => {
    if (items.length === 17) {
      setErrorMessage(!showErrorMessage);
      setItem('');
    }

    if (item.trim() !== '' && items.length < 17) {
      const newItem = {
        episode: item,
        id: id,
        clicked: false,
      };

      setItems((items) => [...items, newItem]);
      setId((prevState) => prevState + 1);
      setItem('');
    }
  }

  const keyPress = (e) => {
    if (e.key === 'Enter') {
      newEpisode();
    }
  }

  return (
    <form method="get" className="form">
    <h2 className="new-todo__header-title">My watch list</h2>
    <div className="new-todo__notes">
      <input
        className="input input-title"
        name="title"
        type="text"
        placeholder="Enter episode name"
        value={item}
        onChange={e => setItem(e.target.value)}
        onKeyPress={(e) => keyPress(e)}
      />
      {!showErrorMessage && (
          <p className="is-danger">
            Max 18 films can be added
          </p>
        )
      }
    </div>

    <div className="container_current-button">
      <button
        type="submit"
        className="new-todo__button"
        onClick={e => {
          e.preventDefault();
          newEpisode();
        }}
      >
        Add
      </button>
    </div>
  </form>
  )
}