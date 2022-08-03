import React from 'react'
import styles from '../styles/Fuel.module.css'
import Map from './Components/Map'

const Fuel = () => {
  return (
    <div className={styles.body}>
        <div className='row'>
            <div className='col-10'>

            </div>
            <div className='col-2'>
                Fuel type:- Dropdown
            </div>            
        </div>
        <div className={styles.container}>
                <Map/>
        </div>
        <div className='styles.sub'>
            hgfgh
        </div>
    </div>
  )
}

export default Fuel