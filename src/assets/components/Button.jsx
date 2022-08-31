import React from 'react';

import '../css/Button.css';

import shuffle from '../img/shuffle.png';

const Button = ({generateCod}) => {

    let width = window.innerWidth
    let height = window.innerHeight

    return (
        <>
            <section className="button-all" onClick={generateCod}>
                <img src={shuffle} alt="" className="button-shuffle" />
                <p className="button-text">Find Movie</p>
            </section>
        </>
    )
};

export default Button; 