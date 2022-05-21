import React, { createContext } from 'react';

const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [userName, setUserName] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [userTier, setUserTier] = React.useState('tierOne');
  const [userAmount, setUserAmount] = React.useState(0);
  const [error, setError] = React.useState(false);
  const [currentScreen, setCurrentScreen] = React.useState(false);

  const [appUsers, setAppUsers] = React.useState([]);

  const tierAmount = {
    tierOne: 10000,
    tierTwo: 20000,
    tierThree: 30000,
  };
  const tierPercent = {
    tierOne: 7,
    tierTwo: 12,
    tierThree: 25,
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleUserTier = (event) => {
    setUserTier(event.target.value);
  };

  const handleUserAmount = (event) => {
    setUserAmount(event.target.value);
  };

    const handleCurrentScreen = () => {
        setCurrentScreen(!currentScreen);
    };
    
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === '') {
      setError(true);
      setErrorMessage('Please enter a name');
      return;
    }

    if (userAmount < tierAmount[userTier]) {
      setError(true);
      setErrorMessage(
        'You cannot put a figure of money that is more or less than the tier amount.'
      );
      return;
    }

    setAppUsers([
      ...appUsers,
      {
        userName,
        userTier,
        userAmount,
        percentage: (userAmount / tierPercent[userTier]) * 100,
      },
    ]);

    setCurrentScreen(true);
    console.log(appUsers);
  };

  return (
    <AppContext.Provider
      value={{
        userName,
        errorMessage,
        userTier,
        userAmount,
        error,
        handleUserName,
        handleUserTier,
        handleUserAmount,
        handleSubmit,
        appUsers,
        currentScreen,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
