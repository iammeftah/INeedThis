import React from 'react';

const ChatUser = () => {
    return (
        <div className="flex flex-row items-center justify-between rounded-full hover:bg-gray-800 p-2 pr-4  w-full duration-300">
            <div className="flex flex-row ">
                <img
                    src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352064-stock-illustration-default-placeholder-profile-icon.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                />
                <li className="px-2 py-1 cursor-pointer ">User 1</li>
            </div>
            <span className="block w-2 h-2 bg-green-600 rounded-full"></span>



        </div>
    );
};

export default ChatUser;
