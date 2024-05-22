import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from '../src/components/Navbar/Navbar';
import Login from '../src/components/Login/Login';

function App() {
  return (
        <BrowserRouter>
              <Routes>
              <Route path={'/'} element={<Navigate to={'/fync'} />} />
            <Route path={'/fync'} element={<Navbar />} />
            <Route path={'/login'} element={<Login />} />
                  {/* Add other routes here */}
          </Routes>
          </BrowserRouter>
  );
}

export default App;




