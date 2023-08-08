import { useState } from 'react';
import './App.css';
import Navbar from './components/static/Navbar';
import Sidebar from './components/dynamic/Sidebar';
import Recommendation from './components/dynamic/Recommendation';
import products from './db/data';
import Card from './components/dynamic/Card';
import Product from './pages/Product';

function App() {
  const [selectCategory, setSelectCategory] = useState<any>(null);
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  } 

  const filterItem = products?.filter((product: any) => product?.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  // Radio Filter
  const handleChange = (event: any) => {
    setSelectCategory(event.target.value);
  }

  // Button Filter
  const handleClick = (event: any) => {
    setSelectCategory(event.target.value);
  }

  const filterData = (products: any, selected: any, query: any) => {
    let filteredProducts = products;
    console.log('filter Products --> ', filteredProducts);

    // Input Filter
    if(query) {
      filteredProducts = filterItem;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }: any) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(( { img, title, star, reviews, prevPrice, newPrice } : any) => (
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      /> 
    ))

  }

  const result = filterData(products, selectCategory, query);

  return (
    <>
     <Sidebar handleChange={handleChange} />
     <Navbar query={query} handleInputChange={handleInputChange} />
     <Recommendation handleClick={handleClick} />
     <Product result={result} />
    </>
  );
}

export default App;
