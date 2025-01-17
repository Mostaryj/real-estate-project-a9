import useAuth from "../Hook/useAuth";
import Nav from "../pages/shared/Nav";

const UserProfile = () => {

    const {user} = useAuth();
    return (
        <div>
            <Nav></Nav>
             <div className="md:w-[400px] h-[300px] p-4 border-2 mt-4 mb-4 bg-sky-200 rounded-xl border-sky-500 mx-auto">
                
         {user &&
                <div>
                    <h3 className="font-bold">User: {user?.displayName || "not found"}</h3>
                    <p className="font-bold">User Email:{user.email}</p>
                    <div className=" font-bold">
                        <p>User Photo: <img className="w-[200px] h-[200px]" src={user?.photoURL || "not found"} alt="" /></p>
                    </div>
                </div>
            }

           
         </div>
        </div>
    );
};

export default UserProfile;

