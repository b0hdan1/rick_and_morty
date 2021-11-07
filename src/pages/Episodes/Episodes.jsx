import React, {useEffect, useState} from "react";
import { getEpisodes } from "../../api/getApi";
import { Pagination } from "../../components/UI/Pagination/Pagination";
import { RenderList } from "../../components/UI/RenderList/RenderList";
import './Episodes.scss';


export const Episodes = () => {
  const [episodes, setEpisode] = useState([]);
  const [inputName, setInputName] = useState('');
  const [maxPages, setMaxPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const filterBy = 'episodes';

  const nextPage = () => setCurrentPage(prev => prev + 1 === maxPages + 1 ? prev : prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1 ? prev - 1 : prev);


  useEffect (() => {
    getEpisodes(currentPage)
      .then(gotEpisode => {
        setMaxPages(gotEpisode.info.pages);
        setEpisode(gotEpisode.results);
      })
  }, [currentPage]);

  return (
    <>
      <input
        type="text"
        placeholder='Filter by episode name'
        onChange={e => setInputName(e.target.value.toLowerCase())}
      />
      <RenderList list={episodes
        .filter(episode => episode.name.toLowerCase().includes(inputName))
        }

        filterBy={filterBy}
      />
      <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          maxPages={maxPages}
        />
    </>
  )
}
