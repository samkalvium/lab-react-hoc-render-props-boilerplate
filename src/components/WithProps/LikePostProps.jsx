import React from 'react';
import HomePageProps from './HomePageProps';


function LikePostProps() {
    return (
        <HomePageProps>
            {({ count, handleLike }) => (
                <button onClick={handleLike}>Like Post {count}</button>
            )}
        </HomePageProps>
    );
}

export default LikePostProps;