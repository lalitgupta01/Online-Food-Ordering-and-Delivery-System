import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className='bg-white sidebar p-2' > 
            <div className='m-2'>
        
                <span className='brand-name fs-4'>
                    Welcome

                </span>
            </div>
            <hr className='text-dark' />
            <div className='list-group list-group-flush'>
                <a className='list-group-item py-2' onClick={()=>{navigate('/Home')}} >
                    <i className='bi bi-table fs-5 me-3'>
                    </i>
                    <span >
                        Dashboard
                    </span>
                </a>
                <a className='list-group-item py-2' onClick={()=>{navigate('/users');}}>
                    <i className='bi bi-people fs-5 me-3'>

                    </i>
                    <span >Customers</span>
                </a>
                <a className='list-group-item py-2' onClick={()=>{navigate('/reaustarants')}} >
                    <i className='bi-r-square-fill fs-5 me-3'>
                    </i>
                    <span >Reaustarants</span>
                </a>
               
                <a className='list-group-item py-2' onClick={()=>{navigate('/deliveryboys')}}>
                    <i className='bi bi-people fs-5 me-3'>
                    </i>
                    <span >DeliveryBoys</span>
                </a>
               
                <a className='list-group-item py-2' onClick={()=>{navigate('/approvedeliveryboy')}}>
                    <i className='bi bi-person-add fs-5 me-3'>
                    </i>
                    <span >Approve DeliveryBoys</span>
                </a>
               
                <a className='list-group-item py-2' onClick={()=>{navigate('/approvereaustarant')}} > 
                    <i className='bi bi-check-square fs-5 me-3'>
                    </i>
                    <span >Approve Reaustarant</span>
                </a>

                <a className='list-group-item py-2' onClick={()=>{navigate('/logout')}} >
                    <i className='bi bi-power fs-5 me-3'>

                    </i>
                    <span >
                        Logout
                    </span>
                </a>
            </div>
        </div>
    )
}
export default Sidebar;