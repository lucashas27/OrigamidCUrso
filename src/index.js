import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Produto from './useContext/Produto'
import { StorageGlobal } from './useContext/StorageGlobal'
import Header from './components/Header'
import Produtos from './DesafioComponentes/Produtos'
import HomeProdutos from './DesafiosUseState/HomeProdutos'
import HomeEffect from './DesafioUseEffect/HomeEffect'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StorageGlobal>
        <Header />
          <Routes>
            <Route path="effect" element={<HomeEffect />} />
            <Route path="state" element={<HomeProdutos />} />
            <Route path="componentes" element={<Produtos />} />
            <Route path="sobre" element={<Produto /> }/>
          </Routes>
      </StorageGlobal>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
