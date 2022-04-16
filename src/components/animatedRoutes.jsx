import React from 'react'
import Landing from "./pages/landing";
import About from "./pages/about";
import PageNotFound from "./pages/pageNotFound";
import ProfilePage from "./pages/profilePage";
import AddLostItem from "./pages/addLostItem";
import Auth from "./pages/auth";
import SingleItem from "./pages/singleItem";
import AddFoundItem from "./pages/addFoundItem";
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
export default function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" index element={<Landing />}></Route>
                <Route path="/about" element={<About />} />
                <Route path="/single-item/:name" element={<SingleItem />} />
                <Route path="/addLostItem" element={<AddLostItem />} />
                <Route path="/addFoundItem" element={<AddFoundItem />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </AnimatePresence>
    )
}
