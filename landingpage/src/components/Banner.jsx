import React from "react";
import '../App.css';
import '../styles/Banner.css';
import Lottie from 'lottie-react';
import Animation from '../assets/Animation - 1722435522232.json';

const Banner = () => {
    return (
        <section className="section banner" id="banner">
            <div className="container">
                <div className="text-left-banner">
                    <h1>Encontre sua solução!</h1>
                    <p>
                        Aqui você se conecta com profissionais qualificados e empresas especializadas para atender todas as suas necessidades.
                        Seja você um indivíduo em busca de um especialista ou uma empresa procurando talentos, na ParticIn você encontra: Serviços de Alta Qualidade,
                        Facilidade de Pesquisa e Perfis Detalhados.
                    </p>
                </div>
                <div className="banner-animation">
                    <Lottie className="animations-banner" animationData={Animation}/>
                </div>
            </div>
        </section>
    );
}

export default Banner;
