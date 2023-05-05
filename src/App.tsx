import React from 'react';
import 'app.module.scss';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Page, ItemsPage } from './pages';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<ItemsPage />} />
      </Route>
    </Routes>
  </Router>
);
