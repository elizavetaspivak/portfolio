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

const main = {
    backgroundImage: `url(${mainImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

function App() {

    const [open, setOpen] = React.useState(false);

    return (
        <div className="App">
            <div id={'home'} className="mainPhoto" style={main}>
                <Header/>
                <Main/>
            </div>
            <Skills/>
            <Projects/>
            <RemoteWork/>
            <Contacts setOpen={setOpen}/>
            <Footer/>
            <SuccesSnackbar isOpen={open} setOpen={setOpen}/>
            <ScrollArrow/>
        </div>
    );
}

export default App;
