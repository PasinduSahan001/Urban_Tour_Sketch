import React from 'react'
import styles from '../styles/Search.module.css'
import Link from 'next/link'

const Search = () => {
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
                <input className={styles.input} placeholder="Pickup location"/>
                <input className={styles.input} placeholder="Destination location"/>
                <button type="button" className="btn btn-outline-primary">Request Ride</button>

            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Search