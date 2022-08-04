import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 'pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw';

const Map = (props) => {
  //console.log(props)
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [79.890000, 6.911970],
      zoom: 12,
    });

    if (props.pickup_cordinates) {
      add_to_map(map, props.pickup_cordinates)
    }

    if (props.dropoff_cordinates) {
      add_to_map(map, props.dropoff_cordinates)
    }

    if (props.pickup_cordinates && props.dropoff_cordinates) {
      map.fitBounds([
        props.pickup_cordinates,
        props.dropoff_cordinates
      ], {
        padding: 60
      })
    }

    add_control()

  }, [props.pickup_cordinates, props.dropoff_cordinates])

  const add_to_map = (map, cordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(cordinates)
      .addTo(map)
  }

  const add_control = () => {
    const maps = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })
  }


  return <div className='map' id='map'>Map</div>

}


export default Map