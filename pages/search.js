import React from 'react'
import styles from '../styles/Search.module.css'
import Link from 'next/link'
import { useState } from 'react'

const Search = () => {
    const [pickup, set_pickup] = useState("")
    const [dropoff, set_dropoff] = useState("")

    //console.log(pickup)
    //console.log(dropoff)

    return (
        <div className={styles.container}>
        
        <div className={styles.body}>
            <div className='row'>
                
            <h2><b><br></br>-Select Your Destination-</b></h2>
            </div>
            <br></br><br></br><br></br>
            <div className='row mt-4 text-center'>
                <div className='col-2'>
                   
                </div>
                <div className='col-8'>
                    <div className={styles.container}>
                    <h2 className={styles.title}>A Ride Request with Urban Tour</h2>
                    <input className={styles.input} placeholder="Choose your start location" value={pickup} onChange={(e) => set_pickup(e.target.value)}/>
                    <input className={styles.input} placeholder="Choose your Destination " value={dropoff} onChange={(e) => set_dropoff(e.target.value)}/>
                    <Link href={{
                        pathname: "/confirm",
                        query: {
                            pickup: pickup,
                            dropoff: dropoff
                        }
                    }}>
                        <button type="button" className="btn btn-outline-danger"><b>Confirm Your Ride</b></button>
                    </Link>
                    <div className='row'>
                        <br></br>
                        <Link href="/">
                        <button type="button" className="btn btn-outline-primary"><b>&#10237; BACK</b></button>
                    </Link></div>
                    
                   
                </div>
                </div>
                
                <div className='col-2'>
                   
                </div>
                
            </div>
            
        </div>
        <footer className={styles.footer}>
        <a>
          Copyright © 2022. All rights reserved.
                        Designed & developed by GROUP-16
        </a>
      </footer>
    </div>
    )
}

export default Search