import React , {useEffect} from "react";

import RightDivShop from "./RightDivShop";
import "./Shop.css";
import SideBarDiv from "./SideBarDiv";
import { useSelector, useDispatch } from "react-redux";
import { getproduct } from "../../../Redux/AppReducer/action";
import { useState } from "react";


const Shop = (props) => {
  const [data,setData] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  // const isLoading = useSelector((state) => state.product.isLoading);
  // console.log(products,isLoading);
//   let filterarray = products;

  const [filterarray , setFilterArray] = useState(products);
  // console.log(filterarray);

  useEffect(() => {

    dispatch(getproduct());
  }, [dispatch]);

  const handlefilter = (value) => {
    //  console.log(value)
     let arr = products.filter((v) => v.Category === value);
     setFilterArray(arr)
    //  console.log(filterarray);
  }

  const handleSort = (e) => {
    
        let data2 = filterarray.sort((a,b) => {
            if(e === "priceasc"){
                return a.Price - b.Price;
            }
            else if(e === "pricedesc"){
                return b.Price - a.Price;
            }
            else if(e === "nameasc"){
                 return a.Name.localeCompare(b.Name);
            }
            else if(e === "namedesc"){
               return b.Name.localeCompare(a.Name);
            }
            else if(e === "BestSelling"){
              let data3 = filterarray.filter(a => {
                //   console.log(a.top_rated,e.target.value)
                  return a.Best_Selling === e.target.value;
              })
              setData([...data3])
            }
        })
        // console.log(data2)
        setData([...data2]) 
    }

  return (
    <div>

      <div className="heading">
        <h1>Products</h1>
      </div>
      <div className="product-menu-dropdown-div">
        <select className="filter" onChange={(e) => handleSort(e.target.value)}>
          <option value="Featured">Featured</option>
          <option value="BestSelling">Best Selling</option>
          <option value="nameasc">Name Ascending</option>
          <option value="namedesc">Name Descending</option>
          <option value="priceasc">Price Ascending</option>
          <option value="pricedesc">Price Descending</option>
        </select>

        <select className="filter">
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="All">All</option>
        </select>
      </div>
      <div className="maindiv">
        <div className="sidebar_div">
          <SideBarDiv  handlefilter={handlefilter}/>
        </div>
        <div className="right_div">
          <RightDivShop data={filterarray}/>
        </div>
      </div>
    </div>
  );
};

export default Shop;
