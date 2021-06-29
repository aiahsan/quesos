import React from 'react';
import img26 from '../images/img26.png'
import CulturayQuesoCard from '../components/CulturayQuesoCard';
import {culturayQuesoList} from '../utilees/CulturayQuesoList' 
import NuestrosCard from '../components/NuestrosQuesosCard'
import { nuestrosList } from '../utilees/nuestrosList';
import Enalianzaconbox from '../components/Enalianzaconbox';
import BreadCrumb from '../components/breadcrum'
import Nav from '../components/navbar'
import Footer from '../components/footer'

function App() {
  return (
    <>
     <Nav/>
     <BreadCrumb active={2} data={[{link:"",title:"Inicio"},{link:"",title:"Eventos"},{link:"",title:"Degustaciones Quesos de Europa Monterrey"}]}/>
      <section className="asdn32u8zbzkqw"> 
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="w-100" src={img26} alt="" />
            </div>
            <div className="col-md-6">
              <div>
                <h1>Degustaciones Quesos de  Monterrey</h1>
                <p><span>¿Cuándo?:</span> Del 11 de Octubre al 29 de Diciembre</p>
                <p><span>¿Dónde?:</span> Soriana</p>
                <p><span>Horario:</span> 11:00 a.m. a 07:00 pm</p>
                <p><span>Razones para no perdérselo:</span> Tendrás la oportunidad de probar deliciosos quesos de Europa y enamorarte de ellos.</p>
                <p><span>Tipo de evento:</span> Degustaciones</p>
                <p><span>Costo:</span> Gratuito</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-blg">
        <div className="container">
          <p>¿Mueres por probar los quesos de Europa pero no has tenido la oportunidad de hacerlo? Traemos para ti una serie de degustaciones que se estarán llevando a cabo del 11 de octubre al 29 de diciembre en Monterrey.</p>
          <br></br>
          <p>La temática es la siguiente: cada viernes, sábado, domingo y lunes nos podrás encontrar en el área gourmet de Soriana.</p>
          <br></br>
          <p>Es importante resaltar que el equipo de Quesos de Europa no estará todos los fines de semana en todas las tiendas antes mencionadas, sino que estarán en constante movimiento cada fin, llegando a diferente sucursales. Es por esto que deberás emprender una búsqueda de quesos de Europa en las tiendas cercanas a ti, no te arrepentirás.</p>
        </div>
      </section>
      <section className="nsdaf93ijsfsj">
        <div className="container">
          <h1> Nuestros Quesos</h1>
          <p>El mundo de los quesos europeos es inmenso y delicioso, conócelos y enamórate. Te invitamos a incluirlos en las opciones del día a día y usarlos incluso para preparar platillos locales, logrando una nueva mezcla de sabores.</p>
          <div className="row">
            {
              nuestrosList.map(x => <div className="col-md-3 col-6">
                <NuestrosCard img={x.img} title={x.title} description={x.description} />
              </div>)
            }


          </div>
          <div className="">
            <button className="btn asjfioj23adsd m-auto">
              Ver todos los quesos
          </button>

          </div>
        </div>
      </section>
      <section className="Recetas bg-theme-1" >
        <div className="container">
          <h1 className="text-center mb-5">Artículos relacionados</h1>
          <div className="row">
          
            {
              culturayQuesoList.slice(0,4).map(x => <div className="col-md-6">
                <CulturayQuesoCard title={x.title} description={x.description} hash={x.hash} img={x.img} readtime={x.readtime} />
              </div>)
            }
          </div >
          
        </div>

      </section>
      <div  style={{marginTop:-200}}>
             <Enalianzaconbox/>
             </div>
             <Footer/>
    </>
  );
}

export default App;
