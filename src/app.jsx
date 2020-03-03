import React, { Component } from 'react';

import Navegation from './template/navegation';
import Header from './template/header';
import Sobre from './components/sobre';
import Turmas from './components/turmas';
import Precos from './components/precos';
import Testemunhos from './components/testemunhos';
import Assinar from './components/assinar';
import Footer from './template/footer';
import PopUp from './template/widgets/popup';


class App extends Component {
    render(){
        return(
            <div className="app">
                <Navegation/>
                <Header/>
                <main>
                    <Sobre/>
                    <Turmas/>
                    <Precos/>
                    <Testemunhos/>
                    <Assinar/>
                </main>
                <Footer/>
                <PopUp/>
            </div>
        );
    }
}

export default App

