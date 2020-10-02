import React, { useEffect } from 'react';
import "./projects-styles.scss";
import Datos from "../../img/projects.json";

const ProjectPage = ({ params: { name } }) => {
    const project = Datos.projectsId;
    const findItem = item => {
        let target = ""
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