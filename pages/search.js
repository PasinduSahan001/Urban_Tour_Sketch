import React from 'react'
import styles from '../styles/Search.module.css'
import Link from 'next/link'
import { useState } from 'react'

const Search = () => {
    const [pickup, set_pickup] = useState("")
    const [dropoff, set_dropoff] = useState("")

    console.log(pickup)
    console.log(dropoff)

  return (
    <div className={styles.body}>
        <div className='row'>
            <div className={styles.back_button}>
            <Link href="/">
                <a className="btn btn-primary" href="#" role="button">Back</a>
            </Link>
        </div>
        <div className='row mt-4'>
            <div className={styles.container}>
                <h2 className={styles.title}>Request a ride</h2>
                <input className={styles.input} placeholder="Pickup location" value={pickup} onChange={(e) => set_pickup(e.target.value)}/>
                <input className={styles.input} placeholder="Destination location" value={dropoff} onChange={(e) => set_dropoff(e.target.value)}/>
                <Link href={{
                    pathname: "/confirm",
                    query: {
                        pickup: pickup,
                        dropoff: dropoff
                    }
                }}>
                    <button type="button" className="btn btn-outline-primary">Request Ride</button>
                </Link>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Search