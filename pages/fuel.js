import React from 'react'
import styles from '../styles/Fuel.module.css'
import Map from './Components/Map'
import Link from 'next/link'
import FuelStationSelector from './Components/FuelStationSelector'
import VehicleSelector from './Components/VehicleSelector'
import Image from 'next/image'


const Fuel = () => {
  return (  
    
      
    <div className={styles.body}>
     <div className={styles.container}>
        <div className={styles.sidenav}>
      <ul>
          <li><a href="">&#9776;</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile-Overveiw</a></li>
          <li><a href="">Your-Earning</a></li>
          <li><a href="/available">Fuel-Quantity</a></li>
          <li><a href="">Notification</a></li>
          <li><a href="">Settings</a></li>
          <li><a href="/signin">Login</a></li></ul>
          <br></br><br></br><br></br><br></br>
          <li><a href="/"><Image src='/logo.png' width={50} height={50}/></a></li>
        </div>
        
        <div className={styles.main}>
        <h4><b><br></br>Fuel Location</b></h4>
        { /* <div className='col-2'>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Fuel type
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Petrol</a></li>
              <li><a class="dropdown-item" href="#">Diesel</a></li>
            </ul>
          </div>
        </div> */ }

      

      
        <Map />
        <div className={styles.sub}>
          <div className='button'>
            <div className='row'>
              <div className='col-6 text-center mx-auto d-grid gap-2 mt-4'>
                <FuelStationSelector />
              </div>
              <div className='col-6 text-center mx-auto d-grid gap-2 mt-4'>
                <Link href="/fuel">
                  <VehicleSelector />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    
  )
}

export default Fuel