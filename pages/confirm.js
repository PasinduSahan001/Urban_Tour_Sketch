import React from 'react'
import Map from './Components/Map'
import styles from '../styles/Confirm.module.css'
import { useEffect } from 'react'



const Confirm = () => {

    const get_pickup_cordinates = () => {
        const pickup_location = "Colombo";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup_location}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            console.log(data.features[0].center)
        })
    }

    const get_dropoff_cordinates = () => {
        const dropoff_location = "Maharagama";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff_location}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            console.log(data.features[0].center)
        })
    }


    useEffect(()=> {
        get_pickup_cordinates();
        get_dropoff_cordinates();
    },[])

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <Map/>
                {/* <div className={styles.ride_container}>
                    Ride selector
                </div> */}
            </div>
        </div>
  )
}

export default Confirm
