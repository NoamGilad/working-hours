import { useState, Fragment, useContext } from "react";

import logo from "./logo.svg";
import "./App.css";
import MainForm from "./components/MainForm";
import ShiftList from "./components/ShiftsList";
import MainHeader from "./components/UI/MainHeader";
import AuthContext from "./store/auth-context";
import Login from "./components/Login/Login";

const App = (props) => {
  const AuthCtx = useContext(AuthContext);

  const [list, setList] = useState([]);

  const [amount, setAmount] = useState(``);

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
    <Fragment>
      {!AuthCtx.isLoggedIn && (
        <Fragment>
          <MainHeader onLogout={AuthCtx.logoutHandler} />
          <Login onLogin={AuthCtx.loginHandler} />
        </Fragment>
      )}
      {AuthCtx.isLoggedIn && (
        <Fragment>
          <MainHeader onLogout={AuthCtx.logoutHandler} />
          <MainForm
            addEntryMainForm={addEntryHandler}
            addAmountMainForm={addAmountHandler}
          />
          <ShiftList shifts={list} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
