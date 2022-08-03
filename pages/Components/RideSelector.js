import React, { useEffect, useState } from 'react'

const RideSelector = ({pickup_0, pickup_1, dropoff_0, dropoff_1}) => {
    const [ride_distance, set_ride_distance] = useState(0)
    
    console.log("RIDE:- pickup_code: ", pickup_0)
    // console.log("Ride:- dropoff_code: ", dropoff_cordinates)
    
    const get_distance = () => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/cycling/${pickup_0},${pickup_1};${dropoff_0},${dropoff_1}?geometries=geojson&access_token=pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw`)
            // https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw
            // https://api.mapbox.com/directions/v5/mapbox/cycling/79.923272,06.851146;79.965234473,06.841388419?geometries=geojson&access_token=pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //console.log("waypoints:- ", data.waypoints[1].distance)
            set_ride_distance(data.waypoints[1].distance)
        })
    }
    
    useEffect(()=> {
        console.log("userEffect_pickup_cordinates:- ", pickup_0)
        //get_distance(pickup_0, pickup_1, dropoff_0, dropoff_1);
    },[])
    get_distance(pickup_0, pickup_1, dropoff_0, dropoff_1);
    let text_distance = ride_distance.toString(10)
    let distance = parseFloat(text_distance).toFixed(2)
    
  return (
    <div>
        <h5 className='text-center'>Distance:- {distance} KM</h5>
        <hr/>
        <h6 className='text-center'>Choose a ride</h6>
        <hr/>
        <div className=''>
            <div className="">
                <div className='row'>
                    <div className='col-3 text-center'>
                        Image
                    </div>
                    <div className='col-6 text-center'>
                        small description
                    </div>
                    <div className='col-3 text-center'>
                        price
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RideSelector
