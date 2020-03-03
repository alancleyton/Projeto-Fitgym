import React from 'react';
import Fit1 from '../../assets/img/fit1.jpg';
import Fit2 from '../../assets/img/fit2.jpg';


export default props => (
    <div className="popup" id="popup">
        <div className="popup__content">
            <div className="popup__left">
                <img src={Fit1} alt="Fit photo" className="popup__img"/>
                <img src={Fit2} alt="Fit photo" className="popup__img"/>
            </div>

            <div className="popup__right">
                <a href="#precos" className="popup__close">&times;</a>

                <h2 className="second-text-title u-mb-medium">Assinar Agora</h2>
                <h3 className="third-text-title u-mb-small">Importante &ndash; Por favor leia os termos antes de assinar.</h3>

                <p className="popup__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In iure rem distinctio explicabo commodi fugiat possimus tempora corporis reiciendis culpa pariatur dignissimos, ipsa ratione animi, sunt voluptates porro! Maxime, magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, autem atque nobis sint veritatis cupiditate, repellendus, totam velit odio laboriosam quas quasi. Est cumque voluptatibus perspiciatis porro dolorem nisi. Delectus?
                </p>

                <a href="#" className="btn btn--purple">Finaliar Assinatura</a>
            </div>
        </div>
    </div>
);