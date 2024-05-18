import React from 'react';

const MessagePage = () => {
    return (
        <div className="flex flex-col h-full">


            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 flex flex-col h-full">
                    <header className="flex justify-between items-center px-4 py-2 bg-gray-700">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex flex-row gap-2">
                                <img
                                    src="user-avatar.png"
                                    alt="User Avatar"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <h4 className="font-semibold">John Doe</h4>
                            </div>

                            <div className="flex flex-row gap-2 cursor-pointer">
                                <i className='bx bxs-phone-call text-3xl'></i>
                                <i className='bx bx-dots-horizontal-rounded text-3xl'></i>
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
                    <div className="flex-1 p-4 overflow-y-auto">
                        <div className="flex mb-4">
                            <img
                                src="user-avatar.png"
                                alt="User Avatar"
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <div className="bg-transparent border border-gray-600 py-2 px-4 rounded-2xl">
                                <p>Hello, how are you?</p>
                            </div>
                        </div>
                        <div className="flex justify-end mb-4">
                            <div className="bg-blue-500 text-white py-2 px-4 rounded-2xl">
                                <p>I'm doing great, thanks for asking! nigga nigga nigga</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center px-4 py-2 bg-gray-200">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-2 rounded-full bg-white focus:outline-none"
                        />
                        <button className="bg-blue-500 text-white rounded-full w-8 aspect-square ml-2">
                            <i className='bx bxs-paper-plane text-xl'></i>
                        </button>
                    </div>
                </div>
                <div className="w-64 bg-gray-700 p-4">
                    <h3 className="text-lg font-semibold mb-4">Users</h3>
                    <ul>
                        <li className="px-2 py-1 cursor-pointer hover:bg-gray-300">User 1</li>
                        <li className="px-2 py-1 cursor-pointer hover:bg-gray-300">User 2</li>
                        <li className="px-2 py-1 cursor-pointer hover:bg-gray-300">User 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MessagePage;
