import React from 'react';
import { Route } from 'react-router-dom';
import Central from './pages/Central';


const Rotas = () => (
    <Route exact path="/" component={Central} />
);

export default Rotas;

