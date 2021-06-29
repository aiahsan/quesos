import React from 'react';
export default ({data,active})=>{
    return <div className="container asdfofjowemcn">
        {
            data.map((x,i)=><a href={x.link}  style={{fontWeight:active==i?900:100,marginLeft:10}}>{x.title} {i!=data.length-1?">":""}</a>)
        }
            
    </div>
}