import React from 'react'
import HomePageHOC from './HomePageHOC'

const LikeImgHOC = ({count, handleLike}) => {
  return (
    <div>
      <button onClick={handleLike}>Like Image {count}</button>
    </div>
  )
}

export default HomePageHOC(LikeImgHOC);
