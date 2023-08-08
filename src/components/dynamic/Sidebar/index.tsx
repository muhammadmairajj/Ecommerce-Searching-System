// import shoesLogo from "../../../assets/shoes.png";
import Category from "./Category";
import Color from "./Color";
import Price from "./Price";
import "./style.css";

const Sidebar = ( {handleChange}: any ) => {
  return (
    <section className="sidebar">
        <div className="logo-container">
            <h2>Shoes Shop</h2>
            {/* <img src={shoesLogo} alt="" /> */}
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
    </section>
  )
}

export default Sidebar