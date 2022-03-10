import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const starWars = 'https://via.placeholder.com/350x200';

function TheRow(props) {
    return (
        <div className="py-4 py-lg-5 container">
            <h2>{props.title}</h2>
           
                <div className='dataRow'>
                    {props.data.map((item, index) => {
                        return (
                            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index} >
                                <div className="card">
                                    <img className="card-img-top" src={starWars} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to={`${props.title}/${item.name}`}>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </Link>
                                        <FontAwesomeIcon
                                            className="icons"
                                            icon={faHeart}
                                            color="green"
                                            onClick={() => props.addFavorite(item)}
                                        />
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