import React from "react";

export const CharactersFilter = ({
  charactersResult,
  setRenderCharacters,
  speciesValueSelect,
  genderValueSelect,
  statusValueSelect,
  setSpeciesValueSelect,
  setGenderValueSelect,
  setStatusValueSelect,
}) => {
  const getGender = [...charactersResult].map((el) => el.gender);
  const getFilterGenderName = [...new Set(getGender)];

  const getSpecies = [...charactersResult].map((el) => el.species);
  const getFilterSpeciesName = [...new Set(getSpecies)];

  const getStatus = [...charactersResult].map((el) => el.status);
  const getFilterStatusName = [...new Set(getStatus)];

  const filterSpecies = (e) => {
    setSpeciesValueSelect(e.target.value);
    if (e.target.value === "species") {
      setRenderCharacters([...charactersResult]);
      return;
    }

    setRenderCharacters(
      [...charactersResult].filter((el) => el.species === e.target.value)
    );
  };

  const filterGender = (e) => {
    setGenderValueSelect(e.target.value);
    if (e.target.value === "gender") {
      setRenderCharacters([...charactersResult]);
      return;
    }
    setRenderCharacters(
      [...charactersResult].filter((el) => el.gender === e.target.value)
    );
  };

  const filterStatus = (e) => {
    setStatusValueSelect(e.target.value);
    if (e.target.value === "status") {
      setRenderCharacters([...charactersResult]);
      return;
    }

    setRenderCharacters(
      [...charactersResult].filter((el) => el.status === e.target.value)
    );
  };
  return (
    <div className="filter-fields">
      <div className="filter-field">
        <label htmlFor="" className="label">
          Filter By species
        </label>
        <select onChange={filterSpecies} value={speciesValueSelect}>
          <option value="species">All</option>
          {getFilterSpeciesName.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="" className="label">
          Filter By gender
        </label>
        <select onChange={filterGender} value={genderValueSelect}>
          <option value="gender">All</option>
          {getFilterGenderName.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-field">
        <label htmlFor="" className="label">
          Filter By status
        </label>
        <select onChange={filterStatus} value={statusValueSelect}>
          <option value="status">All</option>
          {getFilterStatusName.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
