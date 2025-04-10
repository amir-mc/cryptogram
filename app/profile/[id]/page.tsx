import Feed from "@/components/feed";
import Leftbar from "@/components/leftbar";
import Rightbar from "@/components/rightbar";
import Image from "next/image";

const Profile = () => {
    return ( 
        <div className="flex gap-6 pt-6" >
        {/* left bar */}
       
        <div className="hidden xl:block w-[20%]">
        <Leftbar type="user"/>
  
        </div>
        {/* center */}
        <div className="w-full lg:w-[70%]">
          <div className="flex flex-col gap-6 dark:bg-slate-800 rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 relative ">
                {/* <div  className="object-cover  rounded-xl bg-blue-300 "></div> */}
                <Image alt="" fill className="object-cover px-2 rounded-xl" src='https://wallpapers.com/images/high/stock-market-three-panel-monitor-kue4r30fnjcyjb4h.webp' />
                {/* <div className="object-cover  bg-blue-300 w-32 h-32 rounded-full left-0 right-0 m-auto -bottom-16 ring-4 ring-black "></div> */}
              </div>
              <Image alt="" height={200} width={200} className="object-cover w-32 h-32 rounded-full left-0 right-0 m-auto -bottom-16 ring-4 ring-white " src='https://wallpapers.com/images/high/cyber-background-szefzeenouzjg9bv.webp' />

              <h1 className="mt-20 mb-2 text-2xl font-medium ">testi</h1>
              <div className="flex justify-center items-center gap-12 mb-4"> 
                <div className="flex flex-col items-center">
                  <span className="font-medium">123</span>
                  <span className="text-sm">Post</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">123</span>
                  <span className="text-sm">Post</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">123</span>
                  <span className="text-sm">Post</span>
                </div>
              </div>
            </div>
            <Feed/>
          </div>
        
        </div>
        {/* rightBAR */}
        <div className="hidden lg:block w-[30%]">
        <Rightbar userId="123"/>
  
        </div>
      </div>
     );
}
 
export default Profile;