import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'

export default ({img,title,time})=>{
    return <div>
        <div className="row">
            <div className="col-md-6">
            <img src={img} className="w-100"/>
            </div>
            <div className="col-md-6">
                <h3>{title}</h3>
                <p><AiOutlineClockCircle/> {time}</p>
            </div>
        </div>
    </div>
}