import React from 'react';
import img25 from '../images/img25.png'
import img36 from '../images/img36.png'
import img37 from '../images/img37.png'
import img38 from '../images/img38.png'
import img39 from '../images/img39.png'
import img16 from '../images/img16.png'
import img13 from '../images/img13.png'
import CulturayQuesoCard from '../components/CulturayQuesoCard';
import Recetassugeridas from '../components/Recetassugeridas'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import CheckBox from '../components/checkBox'
import Enalianzaconbox from '../components/Enalianzaconbox';
import Nav from '../components/navbar'
import BreadCrumb from '../components/breadcrum'
import Footer from '../components/footer'

function App() {
  return (
    <div className="bg-theme-1">
           <Nav/>
           <BreadCrumb active={2} data={[{link:"",title:"Inicio"},{link:"",title:"Recetas"},{link:"",title:"Hamburguesa de pollo asado con queso Camembert y mermelada de chipotle"}]}/>

      <section className="asdn83nzs39sd ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={img25} className="w-100" />
              <div className="asdm9q3enzc3">

              </div>
              <p>Si lo que buscas son sabores agridulces, prueba hacer esta hamburguesa con mermelada de chipotle casera. Además, debido a que tiene pechuga de pollo asada, espinaca y queso Camembert, es muy ligera.</p>
            </div>
            <div className="col-md-6">
              <div>
                <h1>Hamburguesa de pollo asado con queso Camembert y mermelada de chipotle</h1>
                <div className="d-flex">
                  <div><p><AiOutlineClockCircle color="#EB5919" /> 30 min</p></div>
                  <div style={{ marginLeft: 10 }}>< p><FiUser color="#EB5919" /> 4 porciones</p></div>
                </div>
                <button className="btn max-wdiasd2   m-auto">Guardar</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container asdf23iasd121">
          <div className="row">
            <div className="col-md-8 bg-white ">
             <div className="sjklasdfjalas2">
             <h2>Ingredientes:</h2>
              <div>

                <CheckBox title="250 g de queso Camembert" />
                <CheckBox title="4 medallones de pechuga de pollo" />
                <CheckBox title="1 cucharadita de ajo en polvo" />
                <CheckBox title="2 cucharadas de aceite de oliva" />
                <CheckBox title="4 bollos con ajonjolí" />
                <CheckBox title="2 tazas de hojas de espinaca" />
                <CheckBox title="2 cucharadas de mantequilla" />
                <CheckBox title="2 cucharadas de mayonesa" />

              </div>
              <h2>Para la mermelada:</h2>
              <div>

                <CheckBox title="250 g de queso Camembert" />
                <CheckBox title="4 medallones de pechuga de pollo" />
                <CheckBox title="2 tazas de frambuesas" />
                <CheckBox title="1 taza de fresas" />
                <CheckBox title="½ taza de agua" />
                <CheckBox title="1 limón, el jugo" />
                <CheckBox title="1 chile chipotle de lata" />
                <CheckBox title="1 cucharadita de sal y pimienta" />

              </div>
              

              <h2>Preparación</h2>
              <h2 className="sad23uzbxcbwza">Para la mermelada:</h2>
              <div>

                <CheckBox title="Colocar todos los ingredientes en una cacerola y cocinar a fuego bajo sin dejar de mover, cuando comience a espesar cocinar por 10 minutos." />
                <CheckBox title="Dejar enfriar y licuar, colar y regresar al fuego. Cocinar por 10 minutos más sin dejar de mover y dejar enfriar." />
                <CheckBox title="Calentar un sartén con aceite, cocinar los medallones de pollo, espolvorear el ajo en polvo y salpimentar. Cocinar por unos minutos hasta que se haya cocido." />
                <CheckBox title="Tostar las piezas de pan en un sartén con mantequilla. Untar un poco de mayonesa en una base del pan, acomodar las espinacas." />
                <CheckBox title="Añadir rebanadas del queso y el pollo. Añadir la mermelada al gusto y servir." />
                <CheckBox title="1 cucharadita de sal y pimienta" />
              

              </div>
              
              


              <div className="d-flex">
                <p className="asdn83ihasf2sds">#Historia</p>
                <p className="asdn83ihasf2sds">#Recetas</p>
                <p className="asdn83ihasf2sds">#Delicioso</p>
              </div>

             </div>
            </div>

            <div className="col-md-4 ">
              <div className="asndd83hasd bg-white">
              <h2>Recetas sugeridas</h2>
              <Recetassugeridas img={img36} title="3 hamburguesas con Quesos de Europa" time="30 min" />
              <Recetassugeridas img={img37} title="Hamburguesa con tocino y queso Emmental" time="30 min" />
              <Recetassugeridas img={img38} title="Hamburguesa de pollo glaseado y queso Brie" time="30 min" />
              <Recetassugeridas img={img39} title="Hamburguesa Juicy Lucy con Mimolette" time="30 min" />
        
              </div>
                 </div>
          </div>
        </div>

      </section>
      <section className="Recetas mt-5 mb-5 bg-theme-1">
        <div className="container">
        <div className="row">
          <h1 className="text-center mb-5">Artículos relacionados</h1>
        <div className="col-md-6 mb-5 pb-5">
            <CulturayQuesoCard title="Navidad a la francesa. Costumbres y quesos que se suelen comer en estas fechas" description="Se acercan las festividades decembrinas y en todo el mundo es un momento para celebrar en familia, así como de…" hash={["#Cultura","#Historia"]} img={img16} readtime="Lectura de 3 minutos" />
          </div>
          
        <div className="col-md-6 mb-5 pb-5">
            <CulturayQuesoCard title="Navidad a la francesa. Costumbres y quesos que se suelen comer en estas fechas" description="Se acercan las festividades decembrinas y en todo el mundo es un momento para celebrar en familia, así como de…" hash={["#Cultura","#Historia"]} img={img13} readtime="Lectura de 3 minutos" />
          </div>
        <div className="col-md-6 mb-5 pb-5">
            <CulturayQuesoCard title="Navidad a la francesa. Costumbres y quesos que se suelen comer en estas fechas" description="Se acercan las festividades decembrinas y en todo el mundo es un momento para celebrar en familia, así como de…" hash={["#Cultura","#Historia"]} img={img13} readtime="Lectura de 3 minutos" />
          </div>
        <div className="col-md-6 mb-5 pb-5">
            <CulturayQuesoCard title="Navidad a la francesa. Costumbres y quesos que se suelen comer en estas fechas" description="Se acercan las festividades decembrinas y en todo el mundo es un momento para celebrar en familia, así como de…" hash={["#Cultura","#Historia"]} img={img13} readtime="Lectura de 3 minutos" />
          </div>
          
         </div >
        
        </div>
      
      </section>
      <div  style={{marginTop:-100}}>
             <Enalianzaconbox/>
             </div>
             <Footer/>


    </div>
  );
}

export default App;
