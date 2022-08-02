import React from 'react'
import Map from './Components/Map'
import styles from '../styles/Confirm.module.css'
import { useEffect, useState } from 'react'

const Confirm = () => {

  const [pickup_cordinates, set_pickup_cordinates] = useState()
  const [dropoff_cordinates, set_dropoff_cordinates] = useState()


  const get_pickup_cordinates = () => {
    const pickup_location = "Kottawa";
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup_location}.json?` + 
      new URLSearchParams({
        access_token: "pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw",
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
      // console.log(data.features[0].center)
    set_pickup_cordinates(data.features[0].center)
    })
  }

  const get_dropoff_cordinates = () => {
    const dropoff_location = "Padukka";
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff_location}.json?` + 
      new URLSearchParams({
        access_token: "pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw",
        limit: 1
      })
    )
    .then(response => response.json())
    .then(data => {
    //console.log(data.features[0].center)
    set_dropoff_cordinates(data.features[0].center)
    })
  }

  useEffect(()=> {
    get_pickup_cordinates();
    get_dropoff_cordinates();
  },[])

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Map pickup_cordinates={pickup_cordinates} dropoff_cordinates = {dropoff_cordinates}/>
        <div className={styles.ride_container}>
          Ride selector
          {pickup_cordinates}
          {dropoff_cordinates}
        </div>
      </div>
    </div>
  )
}

export default Confirm
