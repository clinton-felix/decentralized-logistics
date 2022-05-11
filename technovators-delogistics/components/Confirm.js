import RideSelector from "./RideSelector"

const style = {
    wrapper: 'flex-1 h-full flex flex-col justify-between',
    rideSelectorContainer: 'h-full flex flex-col ',
    confirmButtonContainer: 'border-t-2 cursor-pointer z-10',
    confirmButton: 'bg-black text-white m-4 py-4 text-center text-xl',
}


const Confirm = () => {
    const storeDeliveryDetails = async () => {

    }

  return (
    <div className={style.wrapper}>
        <div className={style.rideSelectorContainer}> 
        <RideSelector/> 
        </div>
        <div className={style.confirmButtonContainer}>
            <div className={style.confirmButtonContainer}> 
                <div
                    className={style.confirmButton}
                    onClick={() => storeDeliveryDetails()}
                    >
                    Confirm DeLo-Rider
                </div>
            </div>
        </div>
    </div>
  )
}

export default Confirm