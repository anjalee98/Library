import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/customers/home'
import AddItems from './components/items/addItems';
import Header from './components/navigations/header';
import EditItems from './components/items/editItems';
import Category from './components/customers/category';
import StaffHome from './components/staff/staffHome';
import AddCustomer from './components/customers/addCustomers';
import EditCustomer from './components/customers/editCustomers';
import AddStaff from './components/staff/addStaff';
import StaffList from './components/staff/viewStaffList';
import UpdateStaff from './components/staff/updateStaff';

function App() {
  return (


    <Router>
        <Header/>

      <Routes>

       <Route exact path="/" element={<Home/>} />
       <Route exact path="/add" element={<AddItems/>} />
       <Route exact path="/edit" element={<EditItems/>} />
       <Route exact path="/category" element={<Category/>} />
       <Route exact path="/shome" element={<StaffHome/>} />
       <Route exact path="/addCustomer" element={<AddCustomer/>} />
       <Route exact path="/ediCustomer" element={<EditCustomer/>} />
       <Route exact path="/addStaff" element={<AddStaff/>} />
       <Route exact path="/staffList" element={<StaffList/>} />
       <Route exact path="/editStaff/:id" element={<UpdateStaff/>} />
     
       </Routes> 
     </Router>

    
  );
}

export default App;