import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Sidebar from './Sidebar'
import Home from './Home'
import { useState } from 'react'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import Users from './Users'
import Restaurants from './Restaurants'
import ApproveRestaurant from './ApproveReaustarant'
import ApproveDeliveryBoy from './ApproveDeliveryBoy'
import DeliveryBoys from './DeliveryBoy'

function App() {
  const [toggle, setToggle] = useState(true)
  const Toggle = () => { setToggle(!toggle) }
  return (
    <div className='container-fluid .bg-transparent min-vh-100 ' style={{backgroundColor: 'brown'}}>
      <div className='row'>
        {toggle &&
          <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
            <Sidebar />
          </div>
        }
        {toggle &&
          <div className='col-4 col-md-2'>
          </div>
        }
        <div className='col'>
        <div className='px-3' style={{backgroundColor:"brown"}}>
          <Nav Toggle={Toggle}/>
         
              <Routes>
            <Route path="/users" exact Component={Users}></Route>
            <Route path="/reaustarants" exact Component={Restaurants}></Route>
            <Route path="/approvereaustarant" exact Component={ApproveRestaurant}></Route>
            <Route path="/approvedeliveryboy" exact Component={ApproveDeliveryBoy}></Route>
            <Route path="/deliveryboys" exact Component={DeliveryBoys}></Route>
            <Route path="/home" exact Component={Home}></Route>
          
            <Route path="/*" Component={Home}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>)
}
export default App;

