import { BrowserRouter, Routes, Route } from "react-router-dom";
import My_home from '../pages/My_home/My_home';
import Layout from '../component/layout/layout';

const route=

<BrowserRouter key="Routersportsee">
        <Routes >
          <Route path="/" element={<Layout />}>
          <Route index  element={<My_home />} />

          </Route>
        </Routes>
</BrowserRouter>  

export default [route];

