import React from 'react'
export default ({ img, title, description, hash, readtime }) => {
    return <div className="asdjasio3943jqasd" >
        <div className="d-flex justify-content-between">
            <div className="asjdiow92e">
                <h2>{title}</h2>
                <span className="Sad3i49sjdfsd">{readtime}</span>
            </div>
            <div>

                <div class="frame-wrapper">
                    <img src={img} alt=""  className="w-100"/>
                </div>
            </div>
        </div>
        <div>
            <p>{description}</p>
            <spa>{hash.map((x, i) => <span key={i} style={{ marginRight: 10 }}>{x}</span>)}</spa>

        </div>
    </div>
}