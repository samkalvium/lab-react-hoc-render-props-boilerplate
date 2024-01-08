import { useState } from 'react';

const HomePageProps = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    (children({ count, handleLike }))
  );
};

export default HomePageProps;