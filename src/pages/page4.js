import React from 'react';
import img40 from '../images/img40.png'
import Recetassugeridas from '../components/Recetassugeridas'
import img34 from '../images/img34.png'
import RecetasconestequesoCard from '../components/RecetasconestequesoCard'
import img33 from '../images/img33.png'
import YouMightLikeCard from '../components/youmightlikeCard'
import Enalianzaconbox from '../components/Enalianzaconbox';
import Nav from '../components/navbar'
import BreadCrumb from '../components/breadcrum'
import Footer from '../components/footer'

function App() {
  return (
    <div className="bg-theme-1">
     <Nav/>
     <BreadCrumb active={2} data={[{link:"",title:"Inicio"},{link:"",title:"Cultura y Queso"},{link:"",title:"Macarrones con queso"}]}/>

      <section className="bg-theme-1 sdfashu3wznqwv1">
        <div className="container">
          <div className="asm9q3nsan20ass">
            <div className="row">
              <div className="col-md-6">
                <div className="asdq290ejzxzq">
                  <span>3 minutos de lectura</span>
                  <h1>Cómo incluir queso Brie en tus platillos</h1>
                  <p>El queso Brie es conocido como el “rey de los quesos” o el “queso de los reyes”. Las personas se han deleitado con él desde la época de Carlomagno, y su afamado sabor llegó hasta la literatura en Gargantúa y Pantagruel, cuando Gargantúa regala un trozo a sus padres.</p>
                  <div class="d-flex justify-content-around asndjuaez1">
                    <p>#Historia</p>
                    <p>#Recetas</p>
                    <p>#Delicioso</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="frame-wrapper1">
                  <img src={img40} alt="" className="w-100" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="asdj83yhasd ">
        <div className="container">
        <p>
        Utilitatis causa amicitia est quaesito. Quae quo sunt excelsiores. no dont cloriora indicia ncrturae. Sed haec quidem liberius ab ea dicuntur et soepius. Et ille ridens: Video, inquit, quid ago% Turn ille timide vel potius verecunde: Focio, inquit. An hoc usque quaque, oliter in vita? Unum nescio, quo modo possit, si luxuriosus sit, finitos cupiditates habere. Aliter enim explicori, quod quoeritur, non potest. Sed hoes quidem liberius ab eo dicuntur et saepius. An hoc usque quaque. after in vita. Unum nescio. quo modo possit. si luxunosus sit, finitas cupiditotes habere. Alder enim explicari, quod quaeritur, non potest Sed haec quidem liberius ab eo dicuntur et saepius. 
        </p>
        </div>
        
      </section>
      <section className="asd82hasd0asz">
        <div className="container">
          <h1>Recetas relacionadas</h1>
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
      <section className="asdm3inszzasq9">
        <div className="container">
          <div className="asdfjsdf112c1">
            <div ><p className="sdfaiso39nncbs" style={{ backgroundColor: 'rgb(2,230,230)', color: 'black' }}>You might also like</p></div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <YouMightLikeCard hasborder={false} title="Now we're getting  somewhere" author="Megan Anderson & Victoria West" />
            </div>
            <div className="col-md-3">
              <YouMightLikeCard hasborder={true} title="Anyone can hold the helm when the sea is calm" author="Megan Anderson & Victoria West" />
            </div>
            <div className="col-md-3">
              <YouMightLikeCard hasborder={true} title="Anyone can hold the helm when the sea is calm" author="Megan Anderson & Victoria West" />
            </div>
            <div className="col-md-3">
              <YouMightLikeCard hasborder={true} title="Anyone can hold the helm when the sea is calm" author="Megan Anderson & Victoria West" />
            </div>
          </div>
        <div className="asdfsidhr38snxqw">
        <div className="row ">   
            <div className="col-md-6">
              <div className="d-flex asjdwjqi8sn2" style={{float:'left',marginLeft:'5%'}}>
                <div >
                  <div class="frame-wrapper">
                    <img src={img34} alt="" className="asc12w8ash" />
                  </div>
                </div>
                <div style={{ marginLeft: 20 }}>
                  <p>Newer Post</p>
                  <h2 className="zmxzxqw8y">Now we're getting somewhere</h2>
                </div>
              </div>
            </div>
          
            <div className="col-md-6">
              <div className="d-flex asjdwjqi8sn2" style={{float:'right',marginRight:'10%'}}>
              <div style={{ marginLeft: 20 }}>
                  <p>Older Post</p>
                  <h2 className="zmxzxqw8y">Now we're getting somewhere</h2>
                </div>
                <div >
                  <div class="frame-wrapper">
                    <img src={img34} alt="" className="asc12w8ash" />
                  </div>
                </div>
                
              </div>
            </div>
       
          
          </div>
        </div>
        
          
        </div>
      </section>
      <Enalianzaconbox />
      <Footer/>

    </div>
  );
}

export default App;
