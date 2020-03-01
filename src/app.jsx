import React, { Component } from 'react';

import Header from './template/header';
import Sobre from './components/sobre';
import Turmas from './components/turmas';
import Precos from './components/precos';
import Testemunhos from './components/testemunhos';
import Assinar from './components/assinar';


class App extends Component {
    render(){
        return(
            <div className="app">
                <Header/>
                <main>
                    <Sobre/>
                    <Turmas/>
                    <Precos/>
                    <Testemunhos/>
                    <Assinar/>
                </main>
            </div>
        );
    }
}

export default App

