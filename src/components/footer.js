import React from 'react';
import logo from '../images/logo1.png'
import { BsFillHeartFill } from 'react-icons/bs'
import { GrFacebookOption, GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr'
export default () => {
    return <div className="askdin3e0asddk23">
        <div className="container">
            <div className="d-flex justify-content-center"><img className="asfn3iisf3sadk2" src={logo} /></div>
            <div className="b-1asd22"></div>
            <div className="asdfnu328scnsmw">
                <div className="asdni83en23sd">
                    <h1><BsFillHeartFill color="#EB5919" style={{ marginTop: -10, marginRight: 10 }} /> Mantente informado</h1>
                    <p>Recibe las últimas noticias de Quesos de Europa, acerca de eventos, recetas o artículos de interés</p>
                    <input placeholder="Correo electrónico" className="asfjsi3ie9asmbe form-control" />
                    <select className="asfjsi3ie9asmbe form-control" placeholder="Selector">
                        <option>Selector</option>
                    </select>
                    <button className="btn asfiejq3mdasadf3-asfd">Enviar</button>

                </div>
                <div className="asdni83en23sd">
                    <h1>Productos</h1>
                    <a>Quesos</a>
                </div>
                <div className="asdni83en23sd">
                    <h1>Editorial</h1>
                    <a>eventos</a>
                    <a>Cultura gastronómica</a>
                    <a>Cultura gastronómica</a>
                    <a>Recetas</a>
                </div>
                <div className="asdni83en23sd">
                    <h1>Links de interés</h1>
                    <a>eventos</a>
                    <a>¿dónde comprar?</a>
                    <a>preguntas frecuentes</a>
                    <div className="d-flex justify-content-between mt-2">
                        <div className="asdfj9w3ie0awj3n"><GrFacebookOption color="white" fontSize={18} /></div>
                        <div className="asdfj9w3ie0awj3n"><GrInstagram color="white" fontSize={18} /></div>
                        <div className="asdfj9w3ie0awj3n"><GrYoutube color="white" fontSize={18} /></div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="dansi2as0e">

                </div>
                <div>
                   <p className="asdfop23leas-d">
                   El contenido de esta publicidad representa el punto de vista del autor únicamente y es de su entera responsabilidad.
                    La Unión Europea no es responsable del uso que pueda dársele a la información aquí contenida.

                   </p>
                 </div>
                <div className="dansi2as0e-1">

                </div>
            </div>
            <div className="d-flex justify-content-center">
                <p className="asmdi21mamd12">2021 Quesos.  Todos los derechos reservados. <span>Términos y Condiciones</span></p>
            </div>
        </div>
    </div>
}