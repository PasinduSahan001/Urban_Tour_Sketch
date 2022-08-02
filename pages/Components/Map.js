import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 'pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw';

const Map = () => {
    useEffect(()=> {
    const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [79.890000, 6.911970], 
    zoom: 12, 
    // projection: 'globe' 
    });
    add_to_map(map)
    
  })

  const add_to_map = (map) => {
    const marker1 = new mapboxgl.Marker()
    .setLngLat([79.89, 7.0])
    .addTo(map)
  }


  return <div className='map' id='map'>Map</div>
   
}


export default Map