import React from "react";
import "../style.css";

const Home = () => {

    return <>
        <body>
            <div className="first">
                <div className="container">
                    <h1>Starters</h1>
                    <p>Functional examples of using Bootstrap in common JS frameworks like Webpack, Parcel, Vite, and more you can edit in StackBlitz.</p>
                </div>
            </div>
            <div className="second">
                <div className="container1">
                    <h2><img src="https://img.icons8.com/?size=100&id=112472&format=png&color=000000" alt="" /><a href="">CDN starter</a></h2>
                    <p>Instantly include Bootstrap's compiled CSS and <br /> JavaScript via the jsDelivr CDN.</p>
                    <p><img src="https://img.icons8.com/?size=100&id=60998&format=png&color=000000" className="villam" /><u>Edit in StackBlitz</u></p>
                </div>
                <div className="container2">
                    <h2><img src="https://img.icons8.com/?size=100&id=112472&format=png&color=000000" alt="" /><a href="">Sass & JS</a></h2>
                    <p>Use npm to import and compile Bootstraps's <br /> Sass with Autoprefixer and Stylelint, plus our boundled JavaScript.</p>
                    <p><img src="https://img.icons8.com/?size=100&id=60998&format=png&color=000000" className="villam" /><u>Edit in StackBlitz</u></p>
                </div>
                <div className="container3">
                    <h2><img src="https://img.icons8.com/?size=100&id=112472&format=png&color=000000" alt="" /><a href="">Sass & ESM JS</a></h2>
                    <p>Import and complile Bootstrap's Sass with <br /> Autoprefixer and Stylelint, and compile our source <br /> JavaScript with an ESM shim.</p>
                    <p><img src="https://img.icons8.com/?size=100&id=60998&format=png&color=000000" className="villam" /><u>Edit in StackBlitz</u></p>
                </div>
            </div>
            <div className="third">
                <div className="container4">
                    <h2><img src="https://img.icons8.com/?size=100&id=112472&format=png&color=000000" alt="" /><a href="">Webpack</a></h2>
                    <p>Import and bundle Bootstrap's source Sass and <br /> JavaScript with Webpack.</p>
                    <p><img src="https://img.icons8.com/?size=100&id=60998&format=png&color=000000" className="villam" /><u>Edit in StackBlitz</u></p>
                </div>
                <div className="container5">
                    <h2><img src="https://img.icons8.com/?size=100&id=112472&format=png&color=000000" alt="" /><a href="">Parcel</a></h2>
                    <p>Import and bundle Bootstrap's source Sass and <br /> JavaScript via Parcel</p>
                    <p><img src="https://img.icons8.com/?size=100&id=60998&format=png&color=000000" className="villam" /><u>Edit in StackBlitz</u></p>
                </div>
                <div className="container6">
                    <h2><img src="https://img.icons8.com/?size=100&id=112472&format=png&color=000000" alt="" /><a href="">Vite</a></h2>
                    <p>Import and bundle Bootstrap's source Sass and <br /> JavaScript with Vite.</p>
                    <p><img src="https://img.icons8.com/?size=100&id=60998&format=png&color=000000" className="villam" /><u>Edit in StackBlitz</u></p>
                </div>
            </div>
        </body >
    </>
}

export default Home;