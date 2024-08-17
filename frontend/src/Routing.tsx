
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import EditProperty from './Pages/EditProperty';
import AddProperty from './Pages/AddProperty';
const Routing = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/"  element={<Layout><Home/></Layout>} />
          <Route path="/add" element={<Layout><AddProperty/></Layout>} />
          <Route path="/edit/:id" element={<Layout><EditProperty/></Layout>} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default Routing