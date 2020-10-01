import React, { useState } from 'react';
import "./bio.scss";
const Bio = () => {
    const [ spanish, setLanguage ] = useState(true)
    return (
        <div className="intro-text" id="bio">
            <img id="valenPic" alt="Valentina" />
            <div className="bio-text">
                <div>
                    <p id="bio-es" className={spanish ? "showed" : "hidden"}>¡Hola! Me llamo Valentina, tengo 26 años. Soy venezolana y viví 3 años en Buenos
                        Aires,
                        Argentina y ahora me aventuro en Barcelona, España. Me gradué en el 2015 de Diseñadora Gráfica y
                        mis
                        trabajos siempre han sido en el área de diseño y creación de estrategias para marcas. De igual
                        manera me encanta ilustrar, busco lo trending del mundo del diseño y estar en constante
                        desarrollo.
                        Ah, y siempre con buen rock de los 80 de fondo.</p>
                    <p id="bio-en" className={!spanish ? "showed" : "hidden"}>Hi! My name is Valentina, I'm 26  years old. I'm Venezuelan but I lived for 3
                        years
                        in Buenos Aires, Argentina and now I'm adventuring to live here in Barcelona, Spain. I'm a
                        Graphic
                        designer that graduated in 2015, my work has been mainly in the area of ​​design and creating
                        strategies for brands. Even though I love my career, I also do illustrations as a hobby and I'm
                        always searching what's trending in my area. Oh! and good 80's Rock music in the background.</p>
                </div>
                <p role="note" id="translate" onClick={() => setLanguage(!spanish)}>Eng/Esp</p>
            </div>
        </div>
    );
};

export default Bio;