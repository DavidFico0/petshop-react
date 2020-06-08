import React from 'react';
//import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.css';
import Header from './components/Header';
import Card from './components/Card';
import Table from './components/Table';
import './App.css';

function App() {
  const listaPets = [
    {pet:'Cachorro',  image:'https://veganbusiness.com.br/wp-content/uploads/2019/10/mercado-vegano-para-pets-760x507.jpg'}, 
    {pet:'Gato', image:'https://jornaldebrasilia.com.br/wp-content/uploads/2020/04/pets.png'},
    {pet:'Papagaio', image:'https://www.folhape.com.br/obj/83/275980,475,80,0,0,475,365,0,0,0,0.jpg'},
    {pet:'Gato', image:'https://static.poder360.com.br/2020/04/GATO-CORONAVIRUS-868x644.jpg'},
    {pet:'Porquinho da India', image:'https://s2.glbimg.com/sIMEHJy7akLUHw6wkGFPp7YIrfM=/780x440/e.glbimg.com/og/ed/f/original/2018/04/23/guinea-pig-242520_1280.jpg'},
    {pet:'Posquinho da India', image:'https://jornalbomdia.com.br/tb_noticias/16929/porquinho1.png'}
  ]
  return (
    <div className="App">
        <Header />
        <div className="container-fluid">
            <h2>Bixinhos</h2>
            <div className="row">
              {listaPets.map((array) => 
                <div className="col-sm-4 col-md-2">
                  <Card pet={array.pet} image={array.image} />
                </div>
              )}
            </div>
        </div>
        <hr/>
        <div className="container-fluid">
          <h2>Pessoas</h2>
          <Table />
        </div>
    </div>
   
  );
}

export default App;
