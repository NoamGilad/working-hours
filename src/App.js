import { useState, Fragment, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import MainForm from "./components/MainForm";
import ShiftList from "./components/ShiftsList";
import Login from "./components/Login/Login";
import MainHeader from "./components/UI/MainHeader";
import AuthContext from "./store/auth-context";

const App = (props) => {
  const [list, setList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [amount, setAmount] = useState(``);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  });

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const addEntryHandler = (date, from, to, amount, shiftTime) => {
    setList((prevShiftsList) => {
      return [
        ...prevShiftsList,
        { date, from, to, amount, shiftTime, id: Math.random().toString() },
      ];
    });
  };

  const addAmountHandler = (amountPerHour) => {
    setAmount(amountPerHour);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}
    >
      {!isLoggedIn && (
        <Fragment>
          <MainHeader onLogout={logoutHandler} />
          <Login onLogin={loginHandler} />
        </Fragment>
      )}
      {isLoggedIn && (
        <Fragment>
          <MainHeader onLogout={logoutHandler} />
          <MainForm
            addEntryMainForm={addEntryHandler}
            addAmountMainForm={addAmountHandler}
          />
          <ShiftList shifts={list} />
        </Fragment>
      )}
    </AuthContext.Provider>
  );
};

export default App;
