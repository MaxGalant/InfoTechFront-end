import s from "./App.scss";
import MiddlePage from "./Components/Addition/MiddlePage";
import Bank from "./Components/BankPage/Bank";
import Mortgage from "./Components/MortgagePage/Mortgage";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className={s.App}>
      <Route exact  path="/" render={() => <MiddlePage />} />
      <Route exact  path="/bank" render={() => <Bank />} />
      <Route exact  path="/mortgage" render={() => <Mortgage />} />
    </div>
  );
};

export default App;
