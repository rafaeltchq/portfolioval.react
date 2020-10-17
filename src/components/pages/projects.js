import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import useScreeWidth from "../hooks/screenwidth";
import "./projects-styles.scss";
import data from "../projects/projects-data";

const ProjectPage = () => {
    let { projectName } = useParams();
    const width = useScreeWidth();
    const itemFinder = data.find(({ name }) => name === projectName );
    
    useEffect(() => {
        document.title = `${itemFinder.title}`
    })
    const imageHeight = (width / itemFinder.ratio);
    return (
    <main className="project"
    style={ {'height': `${imageHeight}px` }} >
        <img className={`project-${itemFinder.id}`} alt="Project Page" />
    </main>
    );
};

export default ProjectPage;