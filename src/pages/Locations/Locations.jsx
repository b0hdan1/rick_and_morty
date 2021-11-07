import React, {useEffect, useState} from "react";
import { getLocations } from "../../api/getApi";
import { Pagination } from "../../components/UI/Pagination/Pagination";
import { RenderList } from "../../components/UI/RenderList/RenderList";


export const Locations = () => {
  const [locations, setLocation] = useState([]);
  const [inputName, setInputName] = useState('');
  const [maxPages, setMaxPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const filterBy = 'location';

  const nextPage = () => setCurrentPage(prev => prev + 1 === maxPages + 1 ? prev : prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1 ? prev - 1 : prev);

  useEffect (() => {
    getLocations(currentPage)
      .then(gotLocation => {
        setMaxPages(gotLocation.info.pages);
        setLocation(gotLocation.results);
      })
  }, [currentPage]);

  return (
    <>
      <input type="text" placeholder='Filter by name' onChange={e => setInputName(e.target.value.toLowerCase())} />
      <input type="text" placeholder='Filter by type' onChange={e => setInputName(e.target.value.toLowerCase())} />
      <input type="text" placeholder='Filter by dimension' onChange={e => setInputName(e.target.value.toLowerCase())} />
      <RenderList
        list={locations
          .filter(location => (location.name + location.type + location.dimension)
            .toLowerCase().includes(inputName))
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