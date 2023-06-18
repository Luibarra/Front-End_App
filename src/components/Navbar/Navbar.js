import React from 'react'
import './Navbar.css'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const onScan1Click = useCallback(() => {
    navigate("/picturestep");
  }, [navigate]);

  const onDecks1Click = useCallback(() => {
    navigate("/deckpage");
  }, [navigate]);

  const onCollectionClick1Click = useCallback(() => {
    
  }, []);

  return (
    <div className={'homebarRegionv2'}>
        <div className={'homebarRegion'}>
          <div className={'blockingBar'}>
            <div className={'menubar'} />
          </div>
          <div className={'scanButton'}>
            <button className={'scan1'} onClick={onScan1Click} />
            <img
              className={'scanclick1Icon'}
              alt=""
              src="/scanclick-1@2x.png"
            />
          </div>
          <div className={'collectionButton'}>
            <img
              className={'collection1Icon'}
              alt=""
              src="/collection-1@2x.png"
            />
            <button
              className={'collectionclick1'}
              onClick={onCollectionClick1Click}
            />
          </div>
          <div className={'decksButtonv2'}>
            <button className={'decks1'} onClick={onDecks1Click} />
            <img
              className={'decksclicked1Icon'}
              alt=""
              src="/decksclicked-1@2x.png"
            />
          </div>
        </div>
      </div>
  )
}

export default Navbar