import React from 'react';
import ReactDOM from 'react-dom';
import Produto from './useContext/Produto'
import { StorageGlobal } from './useContext/StorageGlobal'

ReactDOM.render(
  <React.StrictMode>
    <StorageGlobal>
      <Produto />
    </StorageGlobal>
  </React.StrictMode>,
  document.getElementById('root')
);
