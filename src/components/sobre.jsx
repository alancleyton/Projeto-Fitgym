import React from 'react';
import Fit1 from '../assets/img/fit1.jpg';
import Fit2 from '../assets/img/fit2.jpg';
import Fit3 from '../assets/img/fit3.jpg';


export default () => (
    <section className="sobre">
        <div className="u-center-txt u-mb-big">
            <h2 className="sobre--title">O que nos fazemos aqui</h2>
        </div>

        <div className="sobre__content">
            <div className="sobre__content--text">
                <h3 className="third-text-title u-mb-small">Treine com os melhore instrutores</h3>
                <p className="text-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet dolore perferendis sit culpa quaerat fuga cum aut, perspiciatis officia nulla numquam sequi molestias reiciendis optio nisi asperiores consequatur? Amet.
                </p>

                <h3 className="third-text-title u-mb-small">Melhore o seu estilo de vida</h3>
                <p className="text-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime nostrum odit incidunt quibusdam quam repellat.
                </p>
            </div>

            <div className="sobre__content--images">
                <div className="images">
                    <img src={Fit1} alt="imagem 1" className="images__photo images__photo--p1"/>
                    <img src={Fit2} alt="imagem 1" className="images__photo images__photo--p2"/>
                    <img src={Fit3} alt="imagem 1" className="images__photo images__photo--p3"/>
                </div>
            </div>
        </div>
    </section>
);