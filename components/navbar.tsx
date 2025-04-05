import Link from "next/link";
import Mobilemenu from "./mobliemenu";

const Navbar = () => {
    return ( 
        <div className="h-24 flex items-center justify-between" >
            <div className="">
                <Link href='/'>
                    <span className="text-amber-400">C</span>ryptoGram
                </Link>
            </div>
            <div className="hidden">

            </div>
            <div> <Mobilemenu/> </div>
        </div>
     );
}
 
export default Navbar;