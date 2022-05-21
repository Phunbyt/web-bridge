import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const Savings = () => {
  const { appUsers, handleCurrentScreen } = useContext(AppContext);
  return (
    <div>
      <button onClick={handleCurrentScreen}>Toggle Screen</button>
      {appUsers.map((user, index) => (
        <div key={index}>
          <p>{user.userName}</p>
          <p>{user.userTier}</p>
          <p>{user.userAmount}</p>
          <p>{user.percentage}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Savings;
