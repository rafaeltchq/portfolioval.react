import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./projects-styles.scss";
import data from "../projects/projects-data";

const ProjectPage = () => {
    let { projectName } = useParams();
    const itemFinder = data.find(({ name }) => name === projectName );
    useEffect(() => {
        document.title = `${itemFinder.title}`
    })
    return (
    <main className="project">
        <img className={`project-${itemFinder.id}`} alt="Project Page" />
    </main>
    );
};

export default ProjectPage;