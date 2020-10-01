import React from 'react';
import MainBanner from "../banner/mainbanner";
import Bio from "../bio/bio";
import WorksBanner from "../banner/myworksbanner";
import Footer from "../footer/footer";
const Home = () => {
    return (
        <main>
            <MainBanner />
            <Bio />
            <WorksBanner />
            <Footer />
        </main>
    );
};

export default Home;