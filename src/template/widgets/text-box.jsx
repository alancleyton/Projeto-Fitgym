import React from 'react';
import { Link } from 'react-scroll';

export default props => (
    <div className="header__text-box">
        <h1 className="header__text-box___content">
            <span className="header__text-box___content--main">There's no gain</span>
            <span className="hedaer__text-box___content--sub">without no pain</span>

            <Link activeClass="active"
            to="precos"
            spy="true"
            smooth="true"
            offset={0}
            duration={500}><a href="#" className="btn btn--white btn--animated u-mt-small">Descubra nossas ofertas</a></Link>
        </h1>
    </div>
);