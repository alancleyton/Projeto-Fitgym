import './app.css';
import React, { Component } from 'react';

import Header from './template/header';


class App extends Component {
    render(){
        return(
            <div className="app">
                <Header/>
            </div>
        );
    }
}

export default App

