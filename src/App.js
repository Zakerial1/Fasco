import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
// import Shop from './features/componenc/Shop/Shop'
// import Homepage from './features/componenc/Homepage/homepage';
// import StorePlashka from './features/componenc/Store_plashka/StorePlashka';
// import ShoppingCard from './features/componenc/Your_Shopping_cart/Your_Shopping_Cart'
// import Demo_chek from './features/componenc/Demo_chekpoint/demo_checkpoint';
// import Sing_in from './features/componenc/PageRegistrIn/Sing_in';
// import Sing_up from './features/componenc/PageRegi/Sing_Up';
// import PageU from './features/componenc/PageUser/PageU';
import { Route, Routes, Router, BrowserRouter, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectMinMax, selectBrands, selectArr, selectPage } from './features/componenc/Slices/SlicePlashka';
import { addUser, newLogin } from '../src/features/componenc/Slices/SliceRegistr';
// import Layot from './features/componenc/Route/Layot';
function App() {
  const dispatch = useDispatch();
  let arr = useSelector(selectArr);
  // console.log(localStorage.getItem("user"));

  const Layot = React.lazy(() => import('./features/componenc/Route/Layot'));
  const Navigation = React.lazy(() => import("../src/features/componenc/Navigation/Navigation"))
  const Homepage = React.lazy(() => import("../src/features/componenc/Homepage/homepage"));
  const Shop = React.lazy(() => import("../src/features/componenc/Shop/Shop"));
  const StorePlashka = React.lazy(() => import('../src/features/componenc/Store_plashka/StorePlashka'));
  const ShoppingCard = React.lazy(() => import('../src/features/componenc/Your_Shopping_cart/Your_Shopping_Cart'))
  const Demo_chek = React.lazy(() => import('../src/features/componenc/Demo_chekpoint/demo_checkpoint'));
  const Sing_in = React.lazy(() => import('../src/features/componenc/PageRegistrIn/Sing_in'));
  const Sing_up = React.lazy(() => import('../src/features/componenc/PageRegi/Sing_Up'));
  const PageU = React.lazy(() => import('../src/features/componenc/PageUser/PageU'));
  const SuspenseLayout = () => (
    <React.Suspense fallback={<>...</>}>
      <Outlet />
      


    </React.Suspense>
  );
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Загрузка!!!!!</p>}>

        <Routes>
          <Route element={<SuspenseLayout />}>

            <Route path='/' element={<Layot />} >

              <Route path='/' element={<Homepage/>} />
              <Route path='/sing_in' element={<Sing_in/>} />
              <Route path='/sing_up' element={<Sing_up/>} />
              <Route path='/PageU' element={<PageU/>} />
              <Route path='/Shop' element={<Shop/>} />
              <Route path='/Shop/:namePlashka' element={<StorePlashka/>} />
              <Route path='/Shop/:namePlashka/ShoppingCard' element={<ShoppingCard/>} />
              <Route path='/Shop/ShoppingCard/DemoChek' element={<Demo_chek/>} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
