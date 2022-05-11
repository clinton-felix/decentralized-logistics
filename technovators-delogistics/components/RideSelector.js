import Image from 'next/image'

import deloDropVan from '../assets/Rides/deloDropVan.png'
import deLoExpress from '../assets/Rides/deLoExpress.png'
import deLoSpecial from '../assets/Rides/deLoSpecial.png'
import deLoSwift from '../assets/Rides/deLoSwift.png'
import ethLogo from '../assets/ethereum-logo.png'


const style = {
    wrapper: 'h-full flex flex-col',
    title: 'text-gray-500 text-center text-s py-2 border-b',
    rideList: 'flex flex-col flex-1 ',
    ride: 'flex p-3 m-2 items-center border-2 border-white',
    selectedRide: 'border-2 border-black flex p-3 m-2 items-center',
    rideImage: 'h-14',
    rideDetails: 'ml-2 flex-1',
    service: 'font-medium',
    time: 'text-xs text-blue-500',
    priceContainer: 'flex items-center',
    price: 'mr-[-0.8rem] pr-3',
}

const basePrice = 2000

const rideList = [
    {
        service: "DeloSwift",
        iconUrl: deLoSwift,
        priceMultiplier: 1,
    },
    {
        service: "DeloDropVan",
        iconUrl: deloDropVan,
        priceMultiplier: 5,
    },
    {
        service: "DeloSpecial",
        iconUrl: deLoSpecial,
        priceMultiplier: 3,
    },
    {
        service: "DeloLorry",
        iconUrl: deloDropVan,
        priceMultiplier: 6,
    },
    {
        service: "DeloExpress",
        iconUrl: deLoExpress,
        priceMultiplier: 1.8,
    },
]

const RideSelector = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.title}>Select a Rider, or swipe up for more</div>
        <div className={style.rideList}>
            {rideList.map((ride, index) => (
                <div className={style.ride}>
                    <Image
                        src={ride.iconUrl}
                        className={style.rideImage}
                        height={50}
                        width={50}
                      />
                    <div className={style.rideDetails}>
                        <div className={style.service}> {ride.service} </div>
                        <div className={style.time}>5 mins away</div>
                    </div>
                    <div className={style.priceContainer}>
                        <div className={style.price}>
                            {((basePrice / 10 ** 5) * ride.priceMultiplier).toFixed(5)}
                        </div>
                        <Image src={ethLogo} height={25} width={25} />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RideSelector