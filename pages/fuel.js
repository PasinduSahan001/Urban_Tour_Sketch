import React from 'react'
import styles from '../styles/Fuel.module.css'
import Map from './Components/Map'
import Link from 'next/link'
import FuelStationSelector from './Components/FuelStationSelector'
import VehicleSelector from './Components/VehicleSelector'

const Fuel = () => {
  return (
    <div className={styles.body}>
      <div className='row pt-4'>
        <div className='col-10'>
          <div className={styles.back_button}>
            <Link href="/">
              <a className="btn btn-primary" href="#" role="button">Back</a>
            </Link>
          </div>
        </div>
        {/* <div className='col-2'>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Fuel type
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Petrol</a></li>
              <li><a class="dropdown-item" href="#">Diesel</a></li>
            </ul>
          </div>
        </div> */}
      </div>

      <div className={styles.container}>
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
  )
}

export default Fuel