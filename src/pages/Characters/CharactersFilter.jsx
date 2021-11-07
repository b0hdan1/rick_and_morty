import React from "react";

export const CharactersFilter = ({ charactersResult, setCharacters}) => {
  const getGender = charactersResult.map(el => el.gender);
  const getFilterGenderName = [...new Set(getGender)];

  const getSpecies = charactersResult.map(el => el.species);
  const getFilterSpeciesName = [...new Set(getSpecies)];

  const getStatus = charactersResult.map(el => el.status);
  const getFilterStatusName = [...new Set(getStatus)];

  const filterSpecies = e => {
    if (e.target.value === 'species') {
      return;
    }

    setCharacters(charactersResult.filter(el => el.species === e.target.value));
  }

  const filterGender = e => {
    if (e.target.value === 'gender') {
      return;
    }
    setCharacters(charactersResult.filter(el => el.gender === e.target.value));

  }

  const filterStatus = e => {
    if (e.target.value === 'status') {
      return;
    }

    setCharacters(charactersResult.filter(el => el.status === e.target.value));
  }
  return (
    <div className="filter-fields">
      <div className="filter-field">
        <label htmlFor="" className="label">Filter By species</label>
        <select onChange={filterSpecies}>
          <option value="species">Species</option>
          {getFilterSpeciesName.map(el => (
            <option value={el} key={el}>{el}</option>
          ))}
        </select>
        </div>
        <div className="filter-field">
          <label htmlFor="" className="label">Filter By gender</label>
          <select onChange={filterGender}>
          <option value="gender">Gender</option>
          {getFilterGenderName.map(el => (
            <option value={el} key={el}>{el}</option>
          ))}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="" className="label">Filter By status</label>
          <select onChange={filterStatus}>
          <option value="status">Status</option>
          {getFilterStatusName.map(el => (
            <option value={el} key={el}>{el}</option>
          ))}
          </select>
        </div>
      </div>
  )
}