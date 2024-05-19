import React from 'react';

import UserChat from "./UserChat";

const MessagePage = () => {
    return (
        <div className="flex flex-col h-full rounded-tl-2xl">




            <div className="flex flex-1 overflow-hidden rounded-0 sm:rounded-tl-2xl md:rounded-tl-2xl">
                <div className="flex-1 flex flex-col h-full bg-gray-900 ">
                    <header className="flex justify-between items-center p-4 bg-gray-900">
                        <div className="flex items-center justify-between px-2 w-full">
                            <div className="flex flex-row gap-2 items-center">
                                <a href="/home"><i className='block sm:hidden bx bx-arrow-back text-2xl'></i></a>
                                <img
                                    src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352064-stock-illustration-default-placeholder-profile-icon.jpg"
                                    alt="User Avatar"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <a href="#"><h4 className="font-semibold">John Doe</h4></a>
                            </div>

                            <div className="flex flex-row gap-2 cursor-pointer">
                                <i className='bx bxs-phone relative cursor-pointer bx bx-link-alt text-xl text-gray-600 hover:text-gray-300 duration-300'></i>
                                <i className='bx bx-chevron-down relative cursor-pointer text-xl text-gray-600 hover:text-gray-300 duration-300'></i>
                                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md py-1 z-10 hidden">
                                    <a
                                        href="/profile"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>

                    </header>
                    <div className="flex-1 p-4 overflow-y-auto bg-black rounded-t-2xl">
                        <div className="flex flex-col gap-2 items-start justify-center">

                            <div className="flex items-center flex-row gap-2">
                                <div className="bg-transparent border border-gray-600 py-2 px-4 rounded-3xl">
                                    <p className="text-sm">Hello</p>
                                </div>
                                <i className='bx bx-dots-horizontal-rounded text-xl cursor-pointer text-gray-500 hover:text-gray-300 duration-300'></i>
                            </div>

                            <div className="flex items-center flex-row gap-2">
                                <div className="bg-transparent border border-gray-600 py-2 px-4 rounded-3xl">
                                    <p className="text-sm">How are you?</p>
                                </div>
                                <i className='bx bx-dots-horizontal-rounded text-xl cursor-pointer text-gray-500 hover:text-gray-300 duration-300'></i>
                            </div>


                        </div>

                        <div className="flex justify-end mb-4">
                            <div className="flex flex-col items-end">
                                <div className="flex flex-row gap-2 items-center">

                                    <i className='bx bx-dots-horizontal-rounded text-xl cursor-pointer text-gray-500 hover:text-gray-300 duration-300'></i>
                                    <div className="bg-blue-500 text-white py-2 px-4 rounded-3xl">
                                        <p className="text-sm">I'm doing great, thanks for asking! </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-[.7rem] font-semibold mx-4">Read 8min ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center px-4 py-2 bg-black border-t border-gray-700">
                        <div className="flex flex-row items-center justify-between px-2 gap-4 w-full rounded-full bg-white bg-opacity-5 hover:bg-opacity-10 duration-200 border-gray-500 focus:outline-none">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2 bg-transparent outline-none placeholder:text-gray-600 "
                            />
                            <i className='relative cursor-pointer bx bx-smile text-xl text-gray-600  hover:text-gray-300 duration-300'></i>
                            <i className='relative cursor-pointer bx bx-link-alt text-xl text-gray-600 hover:text-gray-300 duration-300'></i>
                        </div>
                        <button className="bg-blue-500 text-white rounded-full w-8 aspect-square ml-2 hover:scale-110 duration-300">
                            <i className='bx bxs-paper-plane text-xl'></i>
                        </button>
                    </div>
                </div>
                <div className="w-1/4 bg-gray-900 p-4 hidden sm:block">
                    <ul>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <UserChat/>
                            <UserChat/>
                            <UserChat/>
                            <UserChat/>
                            <UserChat/>
                            <UserChat/>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MessagePage;
