import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import Nav from "../pages/shared/Nav";
import { updateProfile } from "firebase/auth";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UPdateProfile = () => {
  const { user, setUser } = useAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(user.displayName || "");
    setEmail(user.email || "")
    setPhotoURL(user.photoURL || "");

  }, [user]);

  const handleUpdateProfile = () => {
    if (!user) return;

    const profileUpdates = {};
    if (name) {
      profileUpdates.displayName = name;
    }
    if (email) {
      profileUpdates.email = email;
    }
    if (photoURL) {
      profileUpdates.photoURL = photoURL;
    }

    updateProfile(user,  profileUpdates)
      .then(() => {
        console.log("Profile updated successfully");
        toast.success("updated successfully");

        setUser({
             ...user,
            displayName: name || user.displayName,
            email: email || user.email,
            photoURL: photoURL || user.photoURL,
          });

   
      })

      .catch((error) => {
        console.error("Error updating profile:", error);
       

      });
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    e.preventDefault();
    setPhotoURL(e.target.value);
  };

  return (
    <div>
      <Nav></Nav>
      <div className="mx-auto bg-cyan-100 md:w-[400px] h-[300px] p-4 border-2 mt-4 mb-4  rounded-xl border-sky-500 ">
        <h2 className=" text-3xl text-center">Update Profile</h2>
        <div className="flex flex-col mt-4 gap-2">
          <input
            className="w-full h-10 p-2  rounded-md border-2"
            type="text"
            placeholder="Update your name"
            value={name}
            onChange={handleNameChange}
          />

          <input
            className="w-full h-10 p-2  rounded-md border-2"
            type="email"
            placeholder="Update your email"
            value={email}
            onChange={handleEmailChange}
          />

          <input
            className="w-full h-10 p-2  rounded-md border-2"
            type="text"
            placeholder="Update photoURL"
            value={photoURL}
            onChange={handlePhotoURLChange}
          />
           

          <button
            onClick={handleUpdateProfile}
            className="btn bg-cyan-500 text-white"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UPdateProfile;
