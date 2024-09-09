import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './carrossel.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa os estilos básicos do carrossel

import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.jpeg';

function Carrossel() 
{
    return (
        <div className="carousel-container">
            <Carousel 
                showThumbs={false} 
                autoPlay={true} 
                infiniteLoop={true} 
                showStatus={false} // Desativa o "x of tantos"
            >
                <div className="divCarrossel">
                    <img className="imgCarrossel" src={img1} alt="Força Máxima" />
                    {/* <p className="legendCarrossel">Efeito lifting</p> */}
                </div>
                <div className="divCarrossel">
                    <img className="imgCarrossel" src={img2} alt="Outro Ícone" />
                    {/* <p className="legendCarrossel">Anti idade</p> */}
                </div>
                <div className="divCarrossel">
                    <img className="imgCarrossel" src={img3} alt="Outro Ícone" />
                    {/* <p className="legendCarrossel">Fórmula Leve</p> */}
                </div>
                <div className="divCarrossel">
                    <img className="imgCarrossel" src={img4} alt="Outro Ícone" />
                    {/* <p className="legendCarrossel">Não oleoso</p> */}
                </div>
                <div className="divCarrossel">
                    <img className="imgCarrossel" src={img5} alt="Outro Ícone" />
                    {/* <p className="legendCarrossel">Reparador </p> */}
                </div>
            </Carousel>
        </div>
    );
}

export default Carrossel;
