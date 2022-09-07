import React, { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';
import { NavLink, Link, useNavigate} from "react-router-dom";
import "./Products.css";
import Pagination from "./Pagination.js";
import { RiShoppingBasket2Line } from "react-icons/ri";

export default function Products() {
  const navigate = useNavigate();
  const { products  } = useContext(AppContext);
  console.log(products.length);
  const [ currentPage, setCurrentPage] = useState(1);
 // console.log(currentPage);
  const [ productsPerPage] = useState(10);
//get Current Products
const indexOfLastProduct = (currentPage * productsPerPage);//6

const indexOfFirstProduct = indexOfLastProduct - productsPerPage;//1
const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);//6

//change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <div className="products-wrapper">
      {currentProducts.map((item) => {
        return (
          <>
          <div className="products-box " key={item.id}>
            <NavLink to={`/products/${item.id}`} state={item}>
              <img
                className="products-img"
                src={item.image}
                width={300}
                alt=""
              />
            </NavLink>
            <div style={{display:"flex"}}>
            <h2>{item.title}</h2>
            <p id="product-price">
              {`€ ${item.price}`}
              
            </p>
            <Link to={"./cart"}>< RiShoppingBasket2Line style ={{fontSize:"2em"}} onClick={() => navigate("/cart")}/></Link>
            </div>
          </div>
          </>
        );
      })}
      
    </div>
    <Pagination  productsPerPage={productsPerPage} totalPosts={products.length} paginate={paginate}/>

    
    </>
  );
}