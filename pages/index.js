import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 'pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw';

export default function Home() {
  useEffect(()=> {
    const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [79.890000, 6.911970], 
    zoom: 12, 
    projection: 'globe' 
    });
  })
  return (
    <div className={styles.container}>
      <div className={styles.map} id='map'>Map</div>
      <div className={styles.action_button}>Buttons</div>
    </div>
  )
}
