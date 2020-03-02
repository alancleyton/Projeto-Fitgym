import React from 'react';

export default props => (
    <footer className="footer">
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navegation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Empresa</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Contato</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">política de privacidade</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Termos de uso</a></li>
                    </ul>
                </div>
            </div>

            <div className="col-1-of-2">
                <p className="footer__copyright">
                    Criado por <a href="#" className="footer__link">Alan Cleyton</a> &copy; Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis numquam quia voluptatibus provident voluptate consequuntur cupiditate voluptates natus.
                </p>
            </div>
        </div>
    </footer>
);