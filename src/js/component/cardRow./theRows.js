import React from 'react'

function TheRow(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <div className='dataRow'>
                {props.data.map((item, index) => {
                    return (
                        <div key={index} className='col'>
                            <div className="card">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TheRow