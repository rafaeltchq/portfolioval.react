import React, { useEffect } from 'react';
import MainBanner from "../banner/mainbanner";
import Bio from "../bio/bio";
import WorksBanner from "../banner/myworksbanner";
const Home = ()  => {
    useEffect(() => {
        document.title = "Valentina Aquino"
    },[])
    // console.log(match);
    return (
        <main>
            <MainBanner />
            <Bio />
            <WorksBanner />
        </main>
    );
};

export default Home;