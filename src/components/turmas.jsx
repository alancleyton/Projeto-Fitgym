import React from 'react';
import Yoga from '../assets/img/yoga.jpg';
import Crossfit from '../assets/img/crossfit.png';
import Hiit from '../assets/img/hiit.jpg';

export default props => (
    <section className="turmas">
        <div className="u-center-txt u-mb-big">
            <h2 className="second-text-title">Faça parte de uma de nossas Turmas</h2>
        </div>

        <div className="row">
            <div className="col-1-of-3">
                <div className="turmas-box">
                    <div className="lg-border">
                        <div className="turmas-box--cover">
                            <img src={Yoga} alt="Turma de Yoga"/>
                        </div>
                        
                        <div className="turmas-box--content">
                            <h3 className="third-text-title u-margin-bottom-small">Turma de Yoga</h3>
                            <p className="text-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab reprehenderit aliquam magnam fugit.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-1-of-3">
                <div className="turmas-box">
                    <div className="lg-border">
                        <div className="turmas-box--cover">
                            <img src={Crossfit} alt="Turma de Crossfit"/>
                        </div>

                        <div className="turmas-box--content">
                            <h3 className="third-text-title u-margin-bottom-small">Turma de Crossfit</h3>
                            <p className="text-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab reprehenderit aliquam magnam fugit.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-1-of-3">
                <div className="turmas-box">
                    <div className="lg-border">
                        <div className="turmas-box--cover">
                            <img src={Hiit} alt="Turma de Hiit"/>
                        </div>

                        <div className="turmas-box--content">
                            <h3 className="third-text-title u-margin-bottom-small">Turma de Hiit</h3>
                            <p className="text-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab reprehenderit aliquam magnam fugit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);