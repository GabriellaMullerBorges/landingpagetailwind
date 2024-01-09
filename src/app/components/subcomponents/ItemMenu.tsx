import Image from "next/image"
import Arrow from '../../assets/arrow-down.svg'

export function ItemMenu(){

    return (
    <button className="flex items-center gap-3">
        <span className="text-white font-bold">Para você</span>
        <Image 
            src= {Arrow} alt="arrow dropdown">    
        </Image>
    </button>
    )

}