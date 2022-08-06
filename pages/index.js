import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Man.module.css'
import Map from './Components/Map'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Urban Tour</title>
        <meta name="description" content="app" />
        <link rel="icon" href="/tabb.ico" />
      </Head>
      
    <main>
    <div className={styles.sidenav}>
      <ul>
          <li><a href="">&#9776;</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile-Overveiw</a></li>
          <li><a href="">Your-Earning</a></li>
          <li><a href="/available">Fuel-Quantity</a></li>
          <li><a href="">Notification</a></li>
          <li><a href="">Settings</a></li>
          <li><a href="/signin">Login</a></li></ul>
          <br></br><br></br><br></br><br></br>
          <li><a href="/"><Image src='/logo.png' width={50} height={50}/></a></li>
        </div>
        
        <div className={styles.main}>
        <h2 className={styles.title}>
         <u><b> Welcome to Urban-Tour</b></u>
        </h2>
        <div className={styles.container}>
          <Map/>
          <div className={styles.sub}>
            <div className='button'>
              <div className='row'>
                <div className='col-8 text-center mx-auto d-grid gap-1 mt-5'>
                  <Link href="/search">
                    <button type="button" className="btn btn-outline-primary"><b>&#x1F5FA; GET-RIDE-DIRECTION</b></button>
                  </Link>
                </div>
                <div className='col-6 text-center mx-auto d-grid gap-1 mt-4'>
                  <Link href="/fuel">
                    <button type="button" className="btn btn-outline-danger"><b>&#x26FD; FUEL-AVAILABILTY</b></button>
                  </Link><br></br><br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
   
  </div>
  )
}
