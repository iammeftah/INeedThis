import React, { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Grid, IconButton, Drawer, Avatar } from "@mui/material";

import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import TransactionPage from "../TransactionPage/TransactionPage";
import MessagePage from "../MessagePage/MessagePage";
import Profile from "../Profil/Profile";
import RequestDetails from "../RequestDetails/RequestDetails";
import logo from "./logo.css";
import { navigationMenu } from "../Navigation/NavigationMenu";

const HomePage = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const getPageTitle = () => {
        const currentPath = location.pathname;
        const menuItem = navigationMenu.find(item => item.path === currentPath);
        return menuItem ? menuItem.title : "Home";
    };

    return (
        <div className="min-h-screen max-h-screen flex justify-between bg-gray-950 text-white">
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                variant="temporary"
                className="sm:hidden w-full"
            >
                <div className="p-4 bg-gray-950 h-screen text-white">
                    <Navigation />
                </div>
            </Drawer>

            <div className="bg-gray-800 px-8 w-1/4 relative hidden sm:block">
                <Navigation />
            </div>

            <div className="flex flex-col w-full h-screen">
                <div className="w-full bg-gray-800 p-4 hidden sm:block md:block">
                    <h2 className="text-2xl font-semibold">{getPageTitle()}</h2>
                </div>

                <div className="w-full relative flex-1 overflow-y-auto">
                    <div className="sm:hidden flex justify-between items-center bg-gray-800 p-4">
                        <img src="https://www.svgrepo.com/show/424912/valorant-logo-play-2.svg" className="w-[4rem] aspect-square logo"></img>
                        <button className="text-2xl ml-4" onClick={toggleDrawer}>
                            {/* Menu Icon */}
                            <i className='bx bx-menu text-3xl mx-2'></i>
                        </button>
                    </div>

                    <Routes>
                        <Route path="/" element={<HomeSection />}></Route>
                        <Route path="/home" element={<HomeSection />}></Route>
                        <Route path="/Profile/:id" element={<Profile />}></Route>
                        <Route path="/Request/:id" element={<RequestDetails />}></Route>
                        <Route path="/transactions" element={<TransactionPage />} />
                        <Route path="/chat" element={<MessagePage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
