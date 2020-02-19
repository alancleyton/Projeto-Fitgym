import React, { Component } from 'react';

import Header from './template/header';
import Sobre from './components/sobre';


class App extends Component {
    render(){
        return(
            <div className="app">
                <Header/>
                <main>
                    <Sobre/>
                </main>
            </div>
        );
    }
}

export default App

