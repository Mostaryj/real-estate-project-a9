import useAuth from "../Hook/useAuth";
import Nav from "../pages/shared/Nav";

const UserProfile = () => {

    const {user} = useAuth();
    return (
        <div>
            <Nav></Nav>
             <div className="w-[400px] h-[300px] p-4 border-2 mt-4 mb-4 bg-sky-200 rounded-xl border-sky-500 mx-auto">
         {user &&
                <div>
                    <h3>User: {user.displayName}</h3>
                    <p>User Email:{user.email}</p>
                    <div className="w-[200px] h-[150px]">
                        <p>PhotoURL: {user.photoURL}</p>
                    </div>
                </div>
            }
         </div>
        </div>
    );
};

export default UserProfile;
