import React from "react";
import "./style.css";

const Card = (props: any) => {
  const { img, title, prevPrice, newPrice, star, reviews } = props;
  return (
    <section className="card">
      <img src={img} alt={title} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>

        <section className="card-reviews">
          <i className={star} style={{color:'#d5ab55'}}></i>
          <i className={star} style={{color:'#d5ab55'}}></i>
          <i className={star} style={{color:'#d5ab55'}}></i>
          <i className={star} style={{color:'#d5ab55'}}></i>
          <span className="card-total-reviews">{reviews}</span>
        </section>

        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> <span style={{fontWeight:"bold", fontSize:18}}>{newPrice}</span>
          </div>

          <div className="bag-icon">
            <i className="fa-solid fa-bag-shopping"></i>
            <i></i>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
