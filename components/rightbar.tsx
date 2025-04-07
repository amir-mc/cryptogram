import Ad from "./ad";
import NewCoin from "./newcoin";
import FriendsRequest from "./friendsreq";

const Rightbar = ({userId}:{userId?:string}) => {
    return ( 
        <div className="flex flex-col gap-6">
                <FriendsRequest/>
                <NewCoin/>
                <Ad size="md" />
        </div>
     );
}
 
export default Rightbar;