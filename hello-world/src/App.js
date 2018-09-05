import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PlacarContainer from './PlacarContainer';

const DADOS ={
  partida:{
    estadio:"Maracanã/RJ",
    data:"26/08/2018",
    horario:"16h",

  },

  casa:{
     nome: "Flamengo",
  },

  visitante:{
      nome:"Vasco",
  }
};



class App extends Component {
  render() {

    return <PlacarContainer {...DADOS}          
    />
      
  }
}

export default App;
