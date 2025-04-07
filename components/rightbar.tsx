import Ad from "./ad";
import NewCoin from "./newcoin";
import FriendsRequest from "./friendsreq";
import UserInfo from "./userinfo";
import Usermedia from "./usermedia";

const Rightbar = ({userId}:{userId?:string}) => {
    return ( 
        <div className="flex flex-col gap-6">
           {userId ? (<>
           <UserInfo userId={userId}/>
            <Usermedia userId={userId} />
           </>) : null }
                
          
                <FriendsRequest/>
                <NewCoin/>
                <Ad size="md" />
        </div>
     );
}
 
export default Rightbar;