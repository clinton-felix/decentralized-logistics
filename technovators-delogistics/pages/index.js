import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const style = {
  wrapper: 'h-screen w-screen flex flex-col',
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar/>
      <div className={style.main}>
          {/* map */}
      </div>

      <div className={style.orderRequestContainer}>
          <div className={style.orderrequest}>
            {/* Location Selector */}
            {/* confirm order */}
          </div>
      </div>
    </div>
  )
}
