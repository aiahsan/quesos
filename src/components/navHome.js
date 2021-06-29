import React, { useState, useEffect } from 'react'
import logo from '../images/logo.png'
import { useMediaQuery } from 'react-responsive'
import SideMenu from '../components/sidebar'
import Sidebar from "react-sidebar";
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineMenuFold } from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
export default () => {
  const [isfixed, setrisfixed] = useState(false);
  const isTablet = useMediaQuery({ query: '(max-width: 991px)' })
  const [sidebarOpen, setsidebarOpen] = React.useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 40) {
      setrisfixed(true)
    }
    else {
      setrisfixed(false);
    }

  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <>
    {!isTablet ? <div>

      <div className={`${isfixed?"scrolasdfji3waf":""}`}>
          <div className="d-flex justify-content-center">
            <img className="asd38sd-logo" src={logo} />
          </div>
         <div className="row" className={`row ${isfixed?"container asjdiow92e1":""}`}>
        <div className="col-md-3"></div>
        <div className="col-md-6">
        <div className="d-flex justify-content-between asniw3eadas">
              <div className="sandfi3k9ujscas">
                <a href="">Quesos</a>
                <a href="">Cultura y queso</a>
                <a href=""> Recetas</a>
                <a href="">eventos</a>
                <a href="">¿dónde comprar?</a>
              </div>
            
            </div>
        </div>
        <div className="col-md-3">
        <div className="d-flex justify-content-end">
        <AiOutlineSearch className="asdn2i9asudjn2" color="white" />

        </div>
        </div>
         </div>
          
          </div>

    </div> : <>

    <div className={`${isfixed?"scrolasdfji3waf asdfhisdl pb-3":"asdfhisdl"}`}>
               <div className="d-flex justify-content-between align-items-center asd93jeaf3scxz container">
               <GiHamburgerMenu onClick={()=>setsidebarOpen(true)} style={{cursor:'pointer'}} fontSize={20} color="white" />
               <img className="asd38sd-logo" src={logo} />
               <AiOutlineSearch color="white" fontSize={20} />

               </div>
             </div>
    </>}

    {
      !isTablet ? <>
      </> : <>
        <Sidebar
          sidebar={<SideMenu         handleclose={() => { setsidebarOpen(false) }}
          />}
          open={isTablet && sidebarOpen}
          onSetOpen={() => { setsidebarOpen(false) }}
          styles={{ sidebar: { background: "black", position: 'fixed', backdropFilter: 'blur(2px)' } }}
          pullRight={false}

          overlayClassName="asda920-sadm223"
        ></Sidebar></>
    }

  </>
}