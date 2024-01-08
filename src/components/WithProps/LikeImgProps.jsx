import React from 'react';
import HomePageProps from './HomePageProps';


function LikeImgProps() {
    return (
        <HomePageProps>
            {({ count, handleLike }) => (
                <button onClick={handleLike}>Like Image {count}</button>
            )}
        </HomePageProps>
    );
}

export default LikeImgProps;