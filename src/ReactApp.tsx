import { BrowserRouter, Route, Routes } from 'react-router';
import { List } from './pages/List';
import { LayoutMain } from './layouts';

export const ReactApp = () => {
  return (
    <BrowserRouter basename='/system/app-show'>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path='/show-home' element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
