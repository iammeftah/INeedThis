import React, { useState } from "react";
import avatar from "../../recources/avatar.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../../Store/Auth/Action";

const Profil = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [animation, setAnimation] = useState('');
    const auth = useSelector(store => store.auth);
    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        if (isMenuOpen) {
            setAnimation('dropdown-close');
            setTimeout(() => {
                setIsMenuOpen(false);
            }, 300); // Match the duration of the closing animation
        } else {
            setIsMenuOpen(true);
            setAnimation('dropdown-open');
        }
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        setAnimation('dropdown-close');
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 300); // Match the duration of the closing animation
    };

    const navigate = useNavigate();

    return (
        <div className="max-h-screen sticky top-0">
            <style>
                {`
                    @keyframes dropdown-open {
                        0% { transform: translateX(-100px); opacity: 0; }
                        100% { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes dropdown-close {
                        0% { transform: translateX(0); opacity: 1; }
                        100% { transform: translateX(-100px); opacity: 0; }
                    }
                    .dropdown-open {
                        animation: dropdown-open 0.3s ease-out forwards;
                    }
                    .dropdown-close {
                        animation: dropdown-close 0.3s ease-out forwards;
                    }
                `}
            </style>
            <div className="flex items-center justify-between mx-4 sm:my-0">
                <div className="flex items-center space-x-3">
                    <img
                        className="rounded-full w-10 h-10"
                        alt="username"
                        src={auth.user?.image || avatar}
                    />
                    <div className="flex flex-col items-center">
                        <div>{auth.user?.fullName}</div>
                        <div>{auth.user?.seller ? "Seller" : "Buyer"}</div>
                    </div>
                    <div className="relative">
                        <button
                            id="basic-button"
                            aria-haspopup="true"
                            aria-expanded={isMenuOpen}
                            onClick={handleToggleMenu}
                            className={`text-[#7c3aed] hover:scale-110 focus:outline-none transition-transform duration-200 ${isMenuOpen ? 'transform rotate-45' : ''}`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 6v-6m0 0h6m-6 0H6"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div
                                id="basic-menu"
                                className={`absolute right-0 mt-4 w-32 bg-transparent border-2 border-gray-200 hover:border-indigo-500  rounded-lg duration-300 shadow-lg ${animation}`}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="basic-button"
                            >
                                <div
                                    onClick={handleLogout}
                                    className="flex flex-row items-center justify-center gap-2 py-2 text-gray-200 cursor-pointer hover:bg-[#ffffff30] rounded-md hover:text-indigo-500 duration-300"
                                >
                                    <i className='bx bx-log-out text-xl'></i> Logout
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profil;
