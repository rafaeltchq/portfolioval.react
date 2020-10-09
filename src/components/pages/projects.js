import React, { useEffect } from 'react';
// import { useLocation } from "wouter";
import { useParams } from "react-router-dom";
import "./projects-styles.scss";
import Datos from "../../img/projects.json";

const ProjectPage = () => {
    let { name } = useParams();
    const project = Datos.projectsId;
    const findItem = item => {
        let target = ""
        // let currentLocation = location.replace("/","")

        for (const object of project) {
            if (name === object.name) {
                target = object[item]
            }            
        } return target;
    }
    useEffect(() => {
        document.title = `${findItem("Title")}`
    })
    return (
    <main className="project">
        <img className={`project-${findItem("id")}`} alt="Project Page" />
    </main>
    );
};

export default ProjectPage;