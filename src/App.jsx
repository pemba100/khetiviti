import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter , Route, Routes,  } from 'react-router-dom';
import Dashboard from './Layout/Dashboard';
import SignIn from './Login/Signin';
import SignUp from './Login/Signup';
import AuctionPage from './Components/Auction';
import MarketBiddingPage from './Components/Bid';
import VegetableInsights from './Pages/Vegetable';
import Viewpage from './Pages/Viewpage';
import FruitInsighs from './Pages/FruitInsighs';
import Crops from './Pages/Crops';
import AvailableCrops from './Pages/AVC';
import Layout from './Layout/Layout';
import AVC from './Pages/AVC';
import Availablebid from './Pages/Availablebid';


function App() {
  return (
    <>

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/Layout" element={<Layout />}>
          <Route path="available-crops" element={<AvailableCrops />} />
          <Route path="Crops" element={<Crops />} />
          <Route path="Vegetable" element={<VegetableInsights />} />
          <Route path="FruitsInsighs" element={<FruitInsighs />} />
          <Route path="Viewpage" element={<Viewpage />} />
          <Route path="avc" element={<AVC />} />
        <Route path="Availablebid" element={<Availablebid/>} />
        </Route>

          <Route path="/auction" element={<AuctionPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bid" element={<MarketBiddingPage />} />



         
        </Routes>
    </BrowserRouter>
 
    </>
  );
}

export default App;