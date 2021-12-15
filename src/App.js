import React from 'react';
import style from './App.module.scss'
import Header from "./components/Header/Header";
import TableContainer from "./components/TableBlock/TableContainer";
import {useSelector} from "react-redux";
import {getIsLoading} from "./redux/selectors/selectors";
import Preloader from "./components/Preloader/Preloader";

function App() {
    const isLoading = useSelector(getIsLoading)
  return (
    <div className={style.app}>
        {/*{isLoading && <Preloader/>}*/}
        <Header/>
        <TableContainer/>
    </div>
  );
}

export default App;
