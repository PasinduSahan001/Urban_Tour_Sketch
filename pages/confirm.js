import React from 'react'
import Map from './Components/Map'
import styles from '../styles/Confirm.module.css'



function Confirm() {
  return (
    <div className={styles.body}>
        <div className={styles.container}>
        <Map/>
        <div className={styles.ride_container}>
          Ride selector
        </div>
      </div>
    </div>
    
  )
}

export default Confirm