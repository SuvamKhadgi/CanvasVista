// import React, { useEffect, useState } from "react";
// import "../assets/css/Home.css";
// import Header from "../components/Header";
// import Navbar from "../components/navbar";
// import axios from "axios";
// import { Trash2 } from 'react-feather';

// interface UserDetails {
//     id: number;
//     email: string;
//     // password: string;
//     // roles: Role[];
//     name: string;
//     password: string;
// }

// const UpdateProfile: React.FC = () => {
//     const [userDetails, setUserDetails] = useState<UserDetails>();
//     const [editedDetails, setEditedDetails] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//     });

//     useEffect(() => {
//         fetchUserDetails();
//     }, []);

//     const fetchUserDetails = async () => {
//         try {
//             const userId = localStorage.getItem('id');

//             if (userId) {
//                 const response = await axios.get<UserDetails>(`http://localhost:8082/user/getById/${userId}`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ` + localStorage.getItem('accessToken') // Include the bearer token in the request headers
//                         }
//                     });
//                 setUserDetails(response.data);

//                 // Set the initial values for editing
//                 setEditedDetails({
//                     firstName: response.data.firstName,
//                     lastName: response.data.lastName,
//                     email: response.data.email,
//                 });
//             }
//         } catch (error) {
//             console.error('Error fetching user details:', error);
//         }
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setEditedDetails({
//             ...editedDetails,
//             [name]: value,
//         });
//     };

//     const saveChanges = async () => {
//         try {
//             // Assuming there's an API endpoint to update user details
//             const userId = localStorage.getItem('id');
//             if (userId) {
//                 await axios.put(`http://localhost:8082/user/update/${userId}`, editedDetails);
//                 // Optionally, you can refetch the updated details
//                 fetchUserDetails();
//                 console.log('Changes saved successfully!');
//             }
//         } catch (error) {
//             console.error('Error saving changes:', error);
//         }
//     };


//     if (!userDetails) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//             <Header />
//             <div className="containers123">
//                 <div className="navvbaar">
//                     <Navbar />
//                 </div>
//                 <div className="w-11/12 ml-32 mr-8 bg-white mt-20">
//                     <h6 className="font-semibold title text-center mb-8 mt-8">YOUR PERSONAL INFORMATION</h6>
//                     <div className=" flex" style={{ marginLeft: "290px" }}><div>
//                         <form className="form12">
//                             <label className="label789"><input className="input789" type="text" defaultValue={userDetails.id} readOnly /></label>
//                             <label className="label789"><input className="input789" type="text" placeholder="Password" readOnly defaultValue={userDetails.email} /></label>
//                             <label className="label789"><input className="input789" type="text" value={userDetails.name}  onChange={handleInputChange}/></label>
//                             <label className="label789"><input className="input789" type="text" value={userDetails.password} onChange={handleInputChange}/></label>
//                             <button className="button789 " type="button"> UPDATE PROFILE</button>

//                         </form></div>
//                         <div className="bgimg "></div>

//                     </div>
//                     <div className="">
//                         <h2 className='title text-4xl font-bold text-center  mx-5'>WANT TO DELETE {userDetails.name} 'S ACCOUNT?</h2>
//                         <button className="button78 flex " > DELETE ACCOUNT<Trash2 /></button>
//                     </div>

//                 </div>

//             </div>
//         </>
//     );
// };

// export default UpdateProfile;
import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";
import Header from "../components/Header";
import Navbar from "../components/navbar";
import axios from "axios";
import { Trash2 } from 'react-feather';
import { ToastContainer, toast } from "react-toastify";

interface UserDetails {
    id: number;
    email: string;
    name: string;
    password: string;
}

const UpdateProfile: React.FC = () => {
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [editedDetails, setEditedDetails] = useState<UserDetails | null>(null);
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        try {
            const userId = localStorage.getItem('id');

            if (userId) {
                const response = await axios.get<UserDetails>(`http://localhost:8082/user/getById/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });

                setUserDetails(response.data);
                setEditedDetails(response.data);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (editedDetails) {
            setEditedDetails({
                ...editedDetails,
                [name]: value,
            });
        }
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setConfirmPassword(value);
    };

    useEffect(() => {

        if (editedDetails && confirmPassword !== editedDetails.password) {
            setPasswordsMatch(false);
            toast.error('Password incorrect!');

        } else {
            setPasswordsMatch(true);
        }
    }, [editedDetails, confirmPassword]);

    const saveChanges = async () => {
        try {
            if (editedDetails) {
                await axios.put(`http://localhost:8082/user/update/${editedDetails.id}`, editedDetails, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                fetchUserDetails(); // Refetch user details after saving changes
                toast.success('Password Change successfully!');
                console.log('Changes saved successfully!');

            }
        } catch (error) {
            console.error('Error saving changes:', error);
            toast.error('Password Change unsuccessful!');

        }
    };

    if (!userDetails) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <div className="containers123">
                <div className="navvbaar">
                    <Navbar />
                </div>
                <div className="w-11/12 ml-32 mr-8 bg-white mt-20">
                    <h6 className="font-semibold title text-center mb-8 mt-8">YOUR PERSONAL INFORMATION</h6>
                    <div className="flex" style={{ marginLeft: "290px" }}>
                        <div>
                            <form className="form12">
                                <label className="label789">
                                    <input className="input789" type="text" defaultValue={editedDetails.id} readOnly />
                                </label>
                                <label className="label789">
                                    <input className="input789" type="text" placeholder="Password" defaultValue={editedDetails.email} readOnly />
                                </label>
                                <label className="label789">
                                    <input className="input789" type="text" value={editedDetails.name} name="name" onChange={handleInputChange} />
                                </label>
                                <label className="label789">
                                    <input className="input789" type="password" name="password" placeholder="New Password" onChange={handleInputChange} />
                                </label>
                                <label className="label789">
                                    <input className="input789" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password" />
                                </label>
                                {/* {!passwordsMatch && <p>Passwords do not match!</p>} */}
                                <button className="button789" type="button" onClick={saveChanges} disabled={!passwordsMatch}>UPDATE PROFILE</button>
                            </form>                <ToastContainer autoClose={3000} />

                        </div>
                        <div className="bgimg"></div>
                    </div>
                    <div className="">
                        <h2 className='title text-4xl font-bold text-center  mx-5'>WANT TO DELETE {editedDetails.name}'S ACCOUNT?</h2>
                        <button className="button78 flex">DELETE ACCOUNT<Trash2 /></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateProfile;
