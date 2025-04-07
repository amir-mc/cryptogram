import Ad from "./ad";
import NewCoin from "./newcoin";
import FriendsRequest from "./friendsreq";
import UserInfo from "./userinfo";
import Usermedia from "./usermedia";

const Rightbar = ({userId}:{userId?:string}) => {
    return ( 
        <div className="flex flex-col gap-6">
           
                <UserInfo userId={userId}/>
                <Usermedia userId={userId} />
          
                <FriendsRequest/>
                <NewCoin/>
                <Ad size="md" />
        </div>
     );
}
 
export default Rightbar;