import React from 'react';
import Routes from './Routes';
import CentralContextProvider from './context/CentralConextProvider';

const App = () =>
<CentralContextProvider>
  <Routes />
</CentralContextProvider>

export default App;
