import React from 'react'
import { useState } from 'react';

const HomePageHOC = (HOCcontent) => {
    return (props) => {
        const [count, setCount] = useState(0)

        const handleLike = () => {
            setCount((prevState) => prevState + 1);
        }

        return (
            <HOCcontent {...props} count={count} handleLike={handleLike} />
        )
    };
}

export default HomePageHOC;
