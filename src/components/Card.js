import React from "react"


export default function Card(props) {

    return (
        <div className="card">
            <img className="card--image" src={process.env.PUBLIC_URL+"/images/"+props.info.coverImg}/>
            <div className="card--stats">
                <img className ="card--star" src={process.env.PUBLIC_URL+"/images/star.png"}/>
                <span>{props.info.stats.rating}</span>
                <span className="gray">({props.info.stats.reviewCount}) • </span>
                <span className="gray">{props.info.location}</span>
            </div>
            <p className="card--title">{props.info.title}</p>
            <p className="card--price"><span className="bold">from ${props.info.price}</span>/person</p>
        </div>
    )
}