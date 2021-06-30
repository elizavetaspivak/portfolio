import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Skills} from './Skills/Skills';
import {MyWorks} from './MyWorks/MyWorks';
import {RemoteWork} from './RemoteWork/RemoteWork';
import {Contacts} from './Contacts/Contacts';
import {Footer} from './Footer/Footer';
import mainImage from './assets/image/main.jpg';
import ScrollArrow from './ScrollToTop';

const main = {
    backgroundImage: `url(${mainImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

function App() {

    return (
        <div className="App">
            <div id={'home'} className="mainPhoto" style={main}>
                <Header/>
                <Main/>
            </div>
            <Skills/>
            <MyWorks/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
            <ScrollArrow/>
        </div>
    );
}

export default App;
