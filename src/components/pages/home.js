import React, { useEffect } from 'react';
import MainBanner from "../banner/mainbanner";
import Bio from "../bio/bio";
import WorksBanner from "../banner/myworksbanner";
import ProjectGrid from "../grid/project-grid";
const Home = ()  => {
    useEffect(() => {
        document.title = "Valentina Aquino"
    },[])
    return (
        <main>
            <MainBanner />
            <Bio />
            <WorksBanner />
            <ProjectGrid />
        </main>
    );
};

export default Home;