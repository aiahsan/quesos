import React from 'react'
export default ()=>{
const [box,setboxR]=React.useState([1,2,3,4,5,6,7,8,9,10,11,12]);
    return <section className="Enalianzacon pb-5">
    <div className="container">
      <h1>En alianza con</h1>
      <div className="sadi3jsadjzczxcs">
      <div className="d-flex flex-wrap justify-content-center">
        {
            box.map(x=><div className="asdj83ieawd2">
            <div className="sdsSdnadiaase2"></div>
          </div>)
        }
      </div>
      </div>
    </div>
  </section>
}