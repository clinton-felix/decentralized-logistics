import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
    wrapper: 'flex-1 h-full w-full',
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/clinton-felix/cl30fv7en002014pfup4zte6s',
            center: [6.4698, 3.5852],
            zoom: 5,
        })  
    }, [])

  return <div className={style.wrapper} id='map' />
}

export default Map
