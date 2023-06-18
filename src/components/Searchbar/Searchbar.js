import React from 'react'
import './Searchbar.css'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();

  const onFilterListClick = useCallback(() => {
        navigate("/filterstep");
  }, [navigate]);

  return (
    <form className={'searchbarRegion'}>
        <div className={'searchbar'}>
          <div className={'searchbar1'} />
          <textarea className={'search'} placeholder="Search...">
            <p className={'search1'}>Search...</p>
          </textarea>
        </div>
        <div className={'searchButton'}>
          <div className={'searchbar2'} />
          <img className={'search1Icon'} alt="" src="/search-1@2x.png" />
        </div>
        <button className={'filterList'} onClick={onFilterListClick}>
          <div className={'searchbar3'} />
          <img className={'filter1Icon'} alt="" src="/filter-1@2x.png" />
        </button>
      </form>
  )
}

export default Searchbar