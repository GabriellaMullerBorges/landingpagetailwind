import Image from "next/image"
import Logo from '../assets/logo.svg'
import { ItemMenu } from "./subcomponents/ItemMenu"


export function Header() {
    return(
        <header className="flex items-center w-full -20 bg-primary-orange">
            <div className="w-full max-w-[1246px] px-[15px] mx-auto">
                <div>
                    <div className="flex items-center gap-14">
                        <Image
                        src={Logo}
                        alt="Logo"
                        />
                        <ul>
                            <li>
                                <ItemMenu />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}