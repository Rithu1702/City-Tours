import React, {Component} from "react";
import "./Tour.css";
export default class Tour extends Component {
    render() {
        const{city,img,name}= this.props.tour;
        return (
        <article className="tour"> 
        <div className=".img.container">
            <img src={img}
            alt= ""
            />
            <span className="close-btn">
                
            </span>
            </div>  
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>
                    <span>
                        <i className="fas fa-caret-square-down" /> 
                    </span>
                </h5>
 
            </div>
         </article>
        );

    }
}