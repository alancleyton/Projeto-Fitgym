import React from 'react';

export default props => (
    <section className="section-assinar">
        <div className="row">
            <div className="assinar">
                <div className="assinar__form">
                    <form action="#" className="form">

                    <div className="u-mb-small">
                        <h2 className="second-text-title">Assinar agora!</h2>
                    </div>

                        <div className="form__group">
                            <input type="text" className="form__input" placeholder="nome completo" id="name" required/>
                            <label htmlFor="name" className="form__label">Nome completo</label>
                        </div>

                        <div className="form__group">
                            <input type="email" className="form__input" placeholder="endereço de email" id="name" required/>
                            <label htmlFor="name" className="form__label">Endereço de email</label>
                        </div>

                        <div className="form__group">
                            <button className="btn btn--purple">Assinar agora!</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
);