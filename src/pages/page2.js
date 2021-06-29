import React from 'react';
import img24 from '../images/img24.png'
import img23 from '../images/img23.png'
import img29 from '../images/img29.png'
import img28 from '../images/img28.png'
import img30 from '../images/img30.png'
import img31 from '../images/img31.png'
import img32 from '../images/img32.png'
import img33 from '../images/img33.png'
import img16 from '../images/img16.png'
import img13 from '../images/img13.png'
import Footer from '../components/footer'

import img34 from '../images/img34.png'
import NuestrosCard from '../components/NuestrosQuesosCard'
import { nuestrosList } from '../utilees/nuestrosList';
import CulturayQuesoCard from '../components/CulturayQuesoCard';
import {culturayQuesoList} from '../utilees/CulturayQuesoList' 
import RecetasconestequesoCard from '../components/RecetasconestequesoCard'
import Enalianzaconbox from '../components/Enalianzaconbox';
import Nav from '../components/navbar'
import BreadCrumb from '../components/breadcrum'
import { useMediaQuery } from 'react-responsive'

function App() {
  const isTablet = useMediaQuery({ query: '(max-width: 647px)' })

  return (
    <>
                <Nav/>

      <section className="page-2">

      <div className="pt-1">
<BreadCrumb active={2} data={[{link:"",title:"Inicio"},{link:"",title:"Quesos"},{link:"",title:"Brie"}]}/>

</div>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="">
            <img src={img24} className="asfdkfj3wwas" />
            </div>
            <div className="saasc3rw3vfbfh">
              <div>
                <h1>Brie</h1>
                <p>Este queso de cubierta enmohecida es el más famoso de los quesos franceses. El brie ha sido históricamente muy apreciado por la sociedad francesa y antiguamente se tributaba a los monarcas con él.</p>
               

              </div>
              <div className="d-flex ">
                <div className=""><img src={img23}/> </div>
                <div className="sadasd33vb"><p className="m-0"><span>
                País de origen:
                  </span> Francia</p>
                <p><span>Región:</span> Seine-et-Marne (antes conocida como Brie)</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="asdfji329nmc">
            <div>
              <h1>Especificaciones</h1>
              <div className="d-flex flex-wrap justify-content-between dasfji93">
                <div>
                  <h2>Tipo</h2>
                  <p> Suave, artesanal</p>
                </div>
                <div>
                  <h2>Hecho de:</h2>
                  <p> Leche de vaca sin pasteurizar</p>
                </div>
                <div>
                  <h2>Grasa</h2>
                  <p> 45- 60%</p>
                </div>
              </div>
            </div>
            <div className="asdsaih8i2mzn2">
              <h1>Características</h1>
              <p className="text-center" style={{maxWidth:'100%'}}>Se elabora en grandes discos que varían de 900 gr a 3.2 kg</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <div><img src={img28} className="w-100"/></div>
                    <div><h2 className="">Vista</h2></div>
                  </div>
                  <p>Posee una corteza blanca con manchas beige a amarillo profundo y tiene una pequeña capa gris debajo de la corteza. La pasta es color paja brillante e irá oscureciéndose conforme el queso madure.</p>
                </div>
                <div className="col-md-6">
                <div className="d-flex align-items-center">
                    <div><img src={img29} className="w-100"/></div>
                    <div><h2 className="">Gusto</h2></div>
                  </div>
                  <p>Tiene un característico sabor a mantequilla, con acabado salado. Es suave, medianamente afrutado y con notas a nueces y almendras tostadas.</p>
                </div>

                <div className="col-md-6">
                <div className="d-flex align-items-center">
                    <div><img src={img30} className="w-100"/></div>
                    <div><h2 className="">Olfato</h2></div>
                  </div>
                  <p>Predominan los olores a granja y a almendras tostadas. Adquiere un ligero aroma a amoniaco conforme el queso madura y evoluciona.</p>
                </div>
                <div className="col-md-6">
                <div className="d-flex align-items-center">
                    <div><img src={img31} className="w-100"/></div>
                    <div><h2 className="">Tacto</h2></div>
                  </div>
                  <p>La corteza debe permanecer firme, mientras que el interior es más suave y flexible. Conforme madura se irá secando y obtendrá una textura más quebradiza.</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="sadans8d923nsd">
        <div className="container">
         <div className="sadiasndw29zc">
         <div className="row ">
            <div className="col-md-6">
              <h1>Cómo cortarlo</h1>
              <p>Por su gran tamaño, es común encontrar el brie en cortes triangulares en forma de cuña. A la hora de cortarlo, para asegurar que todas las porciones tengan un poco de corteza, el corte debería ser como sigue:</p>
              <p><span>1.</span> Primero la punta</p>
              <p><span>2.</span> Después un corte en diagonal</p>
              <p><span>3.</span> Y luego uno en perpendicular hasta el final de la corteza</p>
            </div>
            <div className="col-md-6">
              <img src={img32}  />
            </div>
          </div>
         </div>
        </div>
      </section>
      <section>
        <div className="">
          <div className="row">
            <div className="col-md-6 bg-black" >
             <div className="asdjfkj39cnakwe">
             <h1>Cómo guardarlo</h1>
              <p>El lugar donde lo guardemos debe ser oscuro, fresco y aireado. El compartimento de vegetales de tu refrigerador puede actuar como una bodega de queso, debido a que es el lugar más húmedo y menos frío (entre 3.9°C y 7.7°C). Guárdalo en su caja de madera si es posible. Otra opción son las bolsas resellables para refrigeración.</p>
         
             </div>
                </div>
            <div className="col-md-6 bg-theme">
              <div className="asdjfkj39cnakwe">
              <h1>Maridaje</h1>
              <p>Pruébalo con vinos tintos ligeros y afrutados, o con vinos blancos frescos. Los Brie se llevan bien con cervezas robustas o destilados como el mezcal mexicano, el Bolegancho colombiano o los whiskies.</p>
       
              </div>
                 </div>
          </div>
        </div>
      </section>
      <section className="asd82hasd0asz">
        <div className="container">
          <h1>{!isTablet?"Recetas con este queso":"Recetas"}</h1>
          <p>{!isTablet?"Su textura blanda y cremosa, su sabor suave y su rico aroma, hacen de este queso un deleite. El Brie va particularmente bien con peras, ya que exaltan el sabor del queso, pero se puede disfrutar con tan solo pan y galletas. Es perfecto para derretir en un omelette. También va bien con ensaladas o sabores dulces (como en postres variados).":" Quisque nisi mauris, porttitor in nisl in, rhoncus placerat orci. "}</p>
          <div className="row">
            <div className="col-md-4">
              <RecetasconestequesoCard img={img33} buttonTitle="Continuar leyendo" title="Filete en salsa de queso Brie con champiñones" description="Sal de la rutina con esta receta de filete en salsa de queso Brie con champiñones. Te hará sentir como…" />

            </div>
            <div className="col-md-4">
              <RecetasconestequesoCard img={img34} buttonTitle="Continuar leyendo" title="Filete en salsa de queso Brie con champiñones" description="Sal de la rutina con esta receta de filete en salsa de queso Brie con champiñones. Te hará sentir como…" />

            </div>
            <div className="col-md-4">
              <RecetasconestequesoCard img={img34} buttonTitle="Continuar leyendo" title="Filete en salsa de queso Brie con champiñones" description="Sal de la rutina con esta receta de filete en salsa de queso Brie con champiñones. Te hará sentir como…" />

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="asdfasdif38ahsnbw">
          <h1>¿Quieres comprar?</h1>
          <p>Encuentra las tiendas en donde puedes encontrar nuestros productos.</p>
          <button className="btn">
          Encontrar tienda
          </button>
        </div>
      </section>
      <section className="nsdaf93ijsfsj" style={{paddingBottom:0}}>
      <div className="asdn38hasn3zlc">
      <div className="container">
          <h1 > Otros Quesos</h1>
          <div className="row">
            {
              nuestrosList.slice(0,4).map(x => <div className="col-md-3 col-6">
                <NuestrosCard img={x.img} title={x.title} description={x.description} />
              </div>)
            }


          </div>
        </div>
   
      </div>
      <section className="Recetas mt-5 mb-5">
        <div className="container">
        <div className="row">
          <h1 className="text-center mb-5">Artículos relacionados</h1>
        <div className="col-md-6 mb-5 pb-5">
            <CulturayQuesoCard title="Navidad a la francesa. Costumbres y quesos que se suelen comer en estas fechas" description="Se acercan las festividades decembrinas y en todo el mundo es un momento para celebrar en familia, así como de…" hash={["#Cultura","#Historia"]} img={img16} readtime="Lectura de 3 minutos" />
          </div>
          
        <div className="col-md-6 mb-5 pb-5">
            <CulturayQuesoCard title="Navidad a la francesa. Costumbres y quesos que se suelen comer en estas fechas" description="Se acercan las festividades decembrinas y en todo el mundo es un momento para celebrar en familia, así como de…" hash={["#Cultura","#Historia"]} img={img13} readtime="Lectura de 3 minutos" />
          </div>
          
         </div >
        
        </div>
      
      </section>
     
         </section>
     
     
             <div  style={{marginTop:-100}}>
             <Enalianzaconbox/>
             <Footer/>

             </div>

    </>
  );
}

export default App;
