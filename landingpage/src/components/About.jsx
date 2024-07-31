import React from "react";
import '../styles/About.css';
import Lottie from 'lottie-react'
import graph from '../assets/Animation - 1722252895361.json'
import interrogation from '../assets/Animation - 1722252962517.json'
import click from '../assets/Animation - 1722253107251.json'

const About = () => {
    return (
        <section className="section about" id="about">
        <div className="container">
            <div className="row-about">
                <div className="column-about">
                    <div className="animation-about">
                        <Lottie className="animations-about" animationData={graph}/>
                    </div>
                    <h1>Um "empurrãozinho"</h1>
                    <p>
                        A ParticIn acredita que você precisa de um "empurrãozinho" para se desenvolver!
                        Feita para clientes e profissionais que merecem destaque no mercado de trabalho.
                    </p>
                </div>
                <div className="column-about">
                    <div className="animation-about">
                        <Lottie className="animations-about" animationData={interrogation}/>
                    </div>
                    <h1>Não tenha dúvidas!</h1>
                    <p>Desenvolvida para facilitar para você cliente, que precisa de um profissional confiável e qualificado.
                       Receba e participe de feedbacks dos seus clientes ou prestadores de serviços.
                    </p>
                </div>
                <div className="column-about">
                    <div className="animation-about">
                        <Lottie className="animations-about" animationData={click}/>
                    </div>
                    <h1>Poucos cliques!</h1>
                    <p>A ParticIn nasceu para facilitar, nosso intuito é fazer prosperar seu negócio.
                        chega de dificuldade em anunciar seu serviço ou habilidade, com a ParticIn você pode mais!

                    </p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;
