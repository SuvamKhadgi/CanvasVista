import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";
import Header from "../components/Header";
import Navbar from "../components/navbar";
import axios from "axios";
import { Trash2 } from 'react-feather';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

interface UserDetails {
    id: number;
    email: string;
    // password: string;
    // roles: Role[];
    name: string;
}

const Account: React.FC = () => {
    const [userDetails, setUserDetails] = useState<UserDetails>();
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (!localStorage.getItem("accessToken")) {
    //         navigate('/login', { replace: true })
    //         toast.error('Please LOGIN ');

    //     }
    // }, [])
    // useEffect(() => {
    //     fetchUserDetails();
    // }, []);

    useEffect(() => {
        const checkAuthentication = async () => {
            if (!localStorage.getItem('accessToken')) {
                navigate('/login', { replace: true });
                toast.error('Please log in.');
            } else {
                await fetchUserDetails();
            }
        };

        checkAuthentication();
    }, [navigate]);

    const fetchUserDetails = async () => {
        try {
            const userId = localStorage.getItem('id');


            if (userId) {
                const response = await axios.get<UserDetails>(`http://localhost:8082/user/getById/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ` + localStorage.getItem('accessToken') // Include the bearer token in the request headers
                        }
                    });
                setUserDetails(response.data);

            }
        } catch (error) {
            console.error('Error fetching user details:', error);
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
                    <div className=" flex" style={{ marginLeft: "290px" }}><div>
                        <form className="form12">
                            <label className="label789"><input className="input789" type="text" defaultValue={userDetails.id} readOnly /></label>
                            <label className="label789"><input className="input789" type="text" defaultValue={userDetails.name} readOnly /></label>
                            <label className="label789"><input className="input789" type="text" placeholder="Password" readOnly defaultValue={userDetails.email} /></label>
                            <a href="/updateprofile"><button className="button789 " type="button"> UPDATE?</button>
                            </a>
                        </form>                <ToastContainer autoClose={1000} />
                    </div>
                        <div className="bgimg "></div>

                    </div>
                    <div className="">
                        <h2 className='title text-4xl font-bold text-center  mx-5'>WANT TO DELETE {userDetails.name} 'S ACCOUNT?</h2>
                        <button className="button78 flex " > DELETE ACCOUNT<Trash2 /></button>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Account;



// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setEditedDetails({
//         ...editedDetails,
//         [name]: value,
//     });
// };

// const saveChanges = async () => {
//     try {
//         // Assuming there's an API endpoint to update user details
//         const userId = localStorage.getItem('userId');
//         if (userId) {
//             await axios.put(`http://localhost:8087/user/update/${userId}`, editedDetails);
//             // Optionally, you can refetch the updated details
//             fetchUserDetails();
//             console.log('Changes saved successfully!');
//         }
//     } catch (error) {
//         console.error('Error saving changes:', error);
//     }
// };