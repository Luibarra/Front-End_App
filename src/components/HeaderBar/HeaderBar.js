import React from 'react'
import './HeaderBar.css'

const HeaderBar = () => {
  return (
    <>
      <div className={'blockingBar1'}>
        <div className={'menubar'} />
      </div>

      <div className={'settings'}>
        <button className={'settings1'} />
      </div>

      <div className={'dropdownArrow'}>
        <img className={'expand1Icon'} alt="" src="/expand-1@2x.png" />
      </div>

      <div className={'profile'}>
        <button className={'profile1'} />
      </div>

      <div className={'seperatingLine'}>
        <div className={'seperatingLineChild'} />
      </div>

      <div className={'title'}>
        <div className={'magicTheGathering'}>Magic: The Gathering</div>
      </div>
    </>
  )
}

export default HeaderBar