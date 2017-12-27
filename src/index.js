import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Widget from './Widget';
import Footer from './Footer';


const App = () => (
  <div className="container-fluid" style={{backgroundColor:"grey"}}>
  <div className="row">
    <div className="col-sm-12">
      <Header headerText="Twitch TV API" subHeader="~Priyankar Kumar"/>
    </div>
  </div>

    <Widget/>
    <Footer message="By Priyankar Kumar as a part of FreeCodeCamp curriculum"/>
  </div>
);

render(<App />, document.getElementById('root'));
