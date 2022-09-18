import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/layout/header/header';
import { Catalog } from './components/pages/catalog/catalog';
import { Main } from './components/pages/main/main';
import { NotFoundPage } from './components/pages/notfoundpage/notfoundpage';

function App() {

  return (
      <div className = 'container'>
          <Routes>
            <Route path="/" element = { <Navigation /> }>
              <Route index element = { <Main /> } />
              <Route path="catalog" element = { <Catalog /> } />
              <Route path="*" element = { <NotFoundPage /> } />
            </Route>
          </Routes>
      </div>
  );
}

export default App;