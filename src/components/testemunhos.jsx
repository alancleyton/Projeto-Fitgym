import React from 'react';
import Woman1 from '../assets/img/woman1.jpg';
import Man1 from '../assets/img/man1.jpg';

export default () => (
    <section className="testemunhos" id="testemunhos">
        <div className="bg-testemunhos">
            <div className="u-center-txt u-mb-big">
                <h2 className="second-text-title">O que estão fanlando sobre nós</h2>
            </div>

            <div className="row">
                <div className="comments-box">
                    <figure className="comments-box__perfil">
                        <img src={Woman1} alt="Usuario" className="comments-box__img"/>
                        <figcaption className="comments-box__perfil-name">Sophia Milles</figcaption>
                    </figure>

                    <div className="comments-box__text">
                        <h3 className="third-text-title u-mb-small">
                            Melhor lugar para treinar
                        </h3>

                        <p className="text-paragraph-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore asperiores repellendus sapiente neque, amet, sed commodi optio voluptas assumenda quasi ex et, harum aut? Animi rem maiores ducimus nam beatae!</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="comments-box">
                    <figure className="comments-box__perfil">
                        <img src={Man1} alt="Usuario" className="comments-box__img"/>
                        <figcaption className="comments-box__perfil-name">John Menford</figcaption>
                    </figure>

                    <div className="comments-box__text">
                        <h3 className="third-text-title u-mb-small">
                            Eles mudaram o meu estilo de vida
                        </h3>

                        <p className="text-paragraph-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore asperiores repellendus sapiente neque, amet, sed commodi optio voluptas assumenda quasi ex et, harum aut? Animi rem maiores ducimus nam beatae!</p>
                    </div>
                </div>
            </div>

            <div className="u-center-txt u-mb-big">
                <a href="#" className="btn-text">Ler todos os momentarios</a>
            </div>
        </div>
    </section>
);