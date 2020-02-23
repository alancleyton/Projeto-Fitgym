import React, { Component } from 'react';

import Header from './template/header';
import Sobre from './components/sobre';
import Turmas from './components/turmas';
import Precos from './components/precos';


class App extends Component {
    render(){
        return(
            <div className="app">
                <Header/>
                <main>
                    <Sobre/>
                    <Turmas/>
                    <Precos/>
                </main>
            </div>
        );
    }
}

export default App

