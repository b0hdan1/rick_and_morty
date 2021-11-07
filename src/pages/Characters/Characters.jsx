import React, {useEffect, useState} from 'react';
import { Pagination } from '../../components/UI/Pagination/Pagination';
import { getCharacters } from '../../api/getApi';
import { Button } from 'react-bootstrap';
import { CharacterModal } from './CharacterModal';
import './Characters.scss';
import { CharactersFilter } from './CharactersFilter';

export const Characters = () => {
  const [charactersResult, setCharacters] = useState([]);
  const [maxPages, setMaxPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => setCurrentPage(prev => prev + 1 === maxPages + 1 ? prev : prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1 ? prev - 1 : prev);

  useEffect (() => {
    getCharacters(`${currentPage}`)
      .then(characters => {
        setMaxPages(characters.info.pages);
        setCharacters(characters.results);
      })
  }, [currentPage]);

  const [show, setShow] = useState(false);
  const [element, setElement] = useState([]);

  const getModalElement = (elem) => {
    setElement(elem);
    setShow(true);
  };

  return (
    <div className="characters-field">
      <CharactersFilter
        charactersResult={charactersResult}
        setCharacters={setCharacters}
      />
        <ul className="card-list">
          {charactersResult.map((el) => (
            <div className="card" key={el.id}>
              <li className="character-item">
                <img className="card-image" src={el.image} alt="" />
                <p className="character-name">{el.name}</p>
                <p className="character-gender">{el.gender}</p>
              </li>
              <div>
                <Button
                  variant="primary"
                  size="sm"
                  className="additional-button"
                  onClick={() => getModalElement(el)}
                >
                  Additional info
                </Button>
              </div>
            </div>
          ))}
          <CharacterModal
            setShow={setShow}
            show={show}
            element={element}
          />
        </ul>
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          maxPages={maxPages}
        />
    </div>
  );
}
