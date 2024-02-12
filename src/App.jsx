import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Signin from './Pages/Signin';
import Transfer from './Pages/Transfer';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
