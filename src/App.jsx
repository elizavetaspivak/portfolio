import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Skills} from './Skills/Skills';
import {Projects} from './Projects/Projects';
import {RemoteWork} from './RemoteWork/RemoteWork';
import {Contacts} from './Contacts/Contacts';
import {Footer} from './Footer/Footer';
import mainImage from './assets/image/main.jpg';
import ScrollArrow from './ScrollToTop';
import SuccesSnackbar from "./Snackbar/SuccesSnackbar";
import ErrorSnackbar from "./Snackbar/ErrorSnackbar";
import {LinearProgress} from "@material-ui/core";

const main = {
    backgroundImage: `url(${mainImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

function App() {

    const [openSuccesMessage, setOpenSuccesMessage] = React.useState(false);
    const [openErrorMessage, setOpenErrorMessage] = React.useState(false);

    const setOpenSucces = (isOpenValue) => {
        setOpenSuccesMessage(isOpenValue)
    }

    const setOpenError = (isOpenValue) => {
        setOpenErrorMessage(isOpenValue)
    }


    return (
        <div className="App">
            <div id={'home'} className="mainPhoto" style={main}>
                <Header/>
                <Main/>
            </div>
            <Skills/>
            <Projects/>
            <RemoteWork/>
            <Contacts setOpenSucces={setOpenSucces} setOpenError={setOpenError}/>
            <SuccesSnackbar isOpen={openSuccesMessage} setOpenSucces={setOpenSucces}/>
            <ErrorSnackbar isOpen={openErrorMessage} setOpenError={setOpenError}/>
            <Footer/>
            <ScrollArrow/>
        </div>
    );
}

export default App;
