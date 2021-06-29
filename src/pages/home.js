import React from 'react'
import img1 from '../images/img1.png'
import img41 from '../images/img1.png'
import img42 from '../images/img1.png'
import {useState,useEffect} from 'react'
import img11 from '../images/img11.png'
import NuestrosCard from '../components/NuestrosQuesosCard'
import { nuestrosList } from '../utilees/nuestrosList';
import CulturayQuesoCard from '../components/CulturayQuesoCard';
import { culturayQuesoList } from '../utilees/CulturayQuesoList'
import img17 from '../images/img17.png'
import img18 from '../images/img18.png'
import img19 from '../images/img19.png'
import img20 from '../images/img20.png'
import img21 from '../images/img21.png'
import img22 from '../images/img22.png'
import NavHome from '../components/navHome'
import img27 from '../images/img27.png'
import Enalianzaconbox from '../components/Enalianzaconbox';
import Footer from '../components/footer'
import {FaFacebookF,FaYoutube,FaInstagram} from 'react-icons/fa'
function App() {
  const [isfixed,setrisfixed]=useState(false);
 
  const handleScroll = () => {
    const position = window.pageYOffset;
        if(position>40)
        {
            setrisfixed(true)
        }
        else
        {
            setrisfixed(false);
        }
   
};
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <>
      <div className="asdj9ejdascsnb3a">
    <div className="container">
    <NavHome/>
          
          <h1  className={`${isfixed?"afdsf23as9sdf23esd":""}`}>Las gastronomías de Francia y Perú hablan el mismo idioma, el del amor.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis massa id ligula vehicula</p>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="asdfjsdf112c">
          <div ><p className="sdfaiso39nncbs">Quesos favoritos</p></div>
        </div>
        <div className="d-flex sdfjioe-3wda">
          <div className="d-flex no-border asdhfie392jsd">
            <div><img src={img1} /></div>
            <div className="mr-20px">
              <h1>Bleu d’Auvergne</h1>
              <a>Ver Queso</a>
            </div>
          </div>
          <div className="d-flex asdhfie392jsd">
            <div><img src={img42} /></div>
            <div className="mr-20px">
              <h1>Brie</h1>
              <a>Ver Queso</a>
            </div>
          </div>
          <div className="d-flex asdhfie392jsd">
            <div><img src={img41} /></div>
            <div className="mr-20px">
              <h1>Camembert</h1>
              <a>Ver Queso</a>
            </div>
          </div>
        </div>

      </div>
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
      <section className="Próximoseventos">
        <div className="container">
          <h1> Próximos eventos</h1>
          <div className="row">

            <div className="col-md-4">
              <div className="asfjidfjasdkoasp3">
                <p>Del 1 al 30 de Noviembre del 2019</p>
                <h1>3º Festival Quesos de Europa</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="asfjidfjasdkoasp3">
                <p>Del 1 al 30 de Noviembre del 2019
</p>
                <h1>3º Festival Quesos de Europa</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="asfjidfjasdkoasp3">
                <p>Del 1 al 30 de Noviembre del 2019
</p>
                <h1>3º Festival Quesos de Europa</h1>
              </div>
            </div>


          </div>

        </div>
      </section>
      <section className="Recetas">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={img11} className="w-100 adsf38sad" />
            </div>
            <div className="col-md-6">
              <h1>Recetas</h1>
              <p>El queso es un excelente ingrediene para tus platillos. Prepara las mejores recetas con queso y conoce cómo aprovecharlos al máximo.</p>
              <button className="btn">
                Conócelos todos
            </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-center">Cultura y Queso</h1>
              <p className="text-center ml-auto">Descubre la historia, datos curiosos y mucha información valiosa para los amantes de los quesos y la gastronomía.</p>
            </div>
            {
              culturayQuesoList.map(x => <div className="col-md-6 mb-5 pb-5">
                <CulturayQuesoCard title={x.title} description={x.description} hash={x.hash} img={x.img} readtime={x.readtime} />
              </div>)
            }
          </div >
          <div className="d-flex">
            <button className="btn asjfioj23adsd m-auto">
              Ver más artículos
                      </button>

          </div>
        </div>

      </section>
      <section className="Nuestrasredes">
        <h1>Nuestras redes</h1>
        <p className="mb-5">Síguenos como <span>@Quesos</span></p>
        <div className="container">
          <div className="d-flex justify-content-between asdfsdhu3-asd">
            <div className="asdfj329ajsf">
              <div className="asdfj93uwre"><img src={img17} className="w-100 " /></div>
              <div className="asdfj93uwre"><img src={img18} className="w-100 mt-2p" /></div>
            </div>
            <div>
              <img src={img19} className="w-100  " />
            </div>
            <div className="asdfj329ajsf">
              <div className="asdfj93uwre"><img src={img20} className="w-100" /></div>
              <div className="asdfj93uwre"><img src={img21} className="w-100 mt-2p " /></div>
            </div>
            <div>
              <img src={img22} className="w-100" />
            </div>
          </div>

        </div>
      </section>
      <Enalianzaconbox />
    <Footer/>
    <div className="fixedScrollbtn">
    <p className="sadihn22wsae2ewa">Síguenos:</p>
       <p><FaFacebookF/></p> 
       <p><FaYoutube/></p> 
       <p><FaInstagram/></p> 
        
            
        </div>
    </>
  );
}

export default App;
