import React from 'react';
import Fit1 from '../assets/img/fit1.jpg';
import Fit2 from '../assets/img/fit2.jpg';
import Fit3 from '../assets/img/fit3.jpg';


export default () => (
    <section className="sobre">
        <div className="u-center-txt u-mb-big">
            <h2 className="second-text-title">O que nos fazemos aqui</h2>
        </div>

        <div className="row">
            <div className="col-1-of-2">
                <h3 className="third-text-title u-mb-small">Treine com os melhore instrutores</h3>
                <p className="text-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet dolore perferendis sit culpa quaerat fuga cum aut, perspiciatis officia nulla numquam sequi molestias reiciendis optio nisi asperiores consequatur? Amet.
                </p>

                <h3 className="third-text-title u-mb-small">Melhore o seu estilo de vida</h3>
                <p className="text-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime nostrum odit incidunt quibusdam quam repellat.
                </p>

                <a href="#" className="btn-text">Ler mais</a>

            </div>

            <div className="col-1-of-2">
                <div className="images">
                    <img src={Fit1} alt="imagem 1" className="images__photo images__photo--p1"/>
                    <img src={Fit2} alt="imagem 1" className="images__photo images__photo--p2"/>
                    <img src={Fit3} alt="imagem 1" className="images__photo images__photo--p3"/>
                </div>
            </div>
        </div>
    </section>
);