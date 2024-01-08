import React from 'react'
import HomePageHOC from './HomePageHOC'


const LikePostHOC = ({ count, handleLike }) => {
  return (
    <div>
      <button onClick={handleLike}>Like Post {count}</button>
    </div>
  )
}

export default HomePageHOC(LikePostHOC);