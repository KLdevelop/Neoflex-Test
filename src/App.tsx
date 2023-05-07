import React from 'react';
import { Route, Routes } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import { Cart, ItemsPage, Page } from './pages';
import 'app.module.scss';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<ItemsPage />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  </Router>
);
