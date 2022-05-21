import { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  const {
    userName,
    errorMessage,
    userTier,
    userAmount,
    error,
    handleUserName,
    handleUserTier,
    handleUserAmount,
    handleSubmit,
  } = useContext(AppContext);


    
  return (
    <div className="App">
      <div>
        <div>
          <input
            onChange={handleUserName}
            type="text"
            name="username"
            id=""
            placeholder="Please enter your name"
          />

          <br />
          <br />
          <br />
          <select onChange={handleUserTier} name="tier" id="">
            <option value="tierOne">Tier 1 - 10,000 Naira</option>
            <option value="tierTwo">Tier 2 - 20,000 Naira</option>
            <option value="tierThree">Tier 3 - 30,000 Naira</option>
          </select>
          <br />
          <br />
          <br />

          <input
            onChange={handleUserAmount}
            type="number"
            name="useramount"
            id=""
          />
          <br />
          <br />
          <br />
          {error && (
            <div>
              <p>{errorMessage}</p>
            </div>
          )}
          <button onClick={handleSubmit}>Submit Data</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
