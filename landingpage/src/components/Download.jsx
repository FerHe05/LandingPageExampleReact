import React from "react";
import '../styles/Download.css';
import Lottie from 'lottie-react';
import animation from '../assets/Animation - 1722272489873.json';

const Download = () => {
    return(
        <section className="section download" id="download">
            <div className="container">
                <div className="text-download">
                    <h1>Faça o download da solução ParticIn</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, error eveniet aut ratione illum, officiis perferendis dolor delectus molestiae vitae ducimus odit blanditiis harum quis cum ullam fuga eos! Nostrum.</p>
                    <div className="button-group-download">
                        <button className="btn-download android">Download Android</button>
                        <button className="btn-download ios">Download IOS</button>
                    </div>
                </div>
                <div className="animation-download">
                    <Lottie className="animations-download" animationData={animation}/>
                </div>
            </div>
        </section>
    )
}

export default Download;
