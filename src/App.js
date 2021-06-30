import React from 'react';
import Routes from './Routes';
import ContextProvider from './context/ContextProvider';

const App = () =>
<ContextProvider>
  <Routes />
</ContextProvider>

export default App;
