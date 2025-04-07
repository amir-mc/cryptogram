import Feed from "@/components/feed";
import Leftbar from "@/components/leftbar";
import Rightbar from "@/components/rightbar";

const Profile = () => {
    return ( 
        <div className="flex gap-6 pt-6" >
        {/* left bar */}
       
        <div className="hidden xl:block w-[20%]">
        <Leftbar/>
  
        </div>
        {/* center */}
        <div className="w-full lg:w-[70%]">
          <div className="flex flex-col gap-6">
            <Feed/>
          </div>
        
        </div>
        {/* rightBAR */}
        <div className="hidden lg:block w-[30%]">
        <Rightbar/>
  
        </div>
      </div>
     );
}
 
export default Profile;