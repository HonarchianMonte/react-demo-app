import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/app-router";
import Footer from "./components/footer";
import Header from "./components/header";
import style from "./style.module.scss"
import {Provider as ReduxProvider} from 'react-redux'

function App( {store}) {
  return (
    <ReduxProvider store = {store}>
      <BrowserRouter>
        <Header/>
        <div className={style.page}>
        <AppRouter/>
        </div>
        <Footer/>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
