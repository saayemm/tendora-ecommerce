import { useContext, useEffect, useState } from "react"

import Title from "./Title";
import ProductItem from "./ProductItem";
import { ShopContext } from "../context/ShopContext";


const LatestCollection = () => {
    const {products} = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(()=>{
      if (products && products.length > 0) {
        setLatestProducts(products.slice(0, 10));
    }
    },[products])
    
    
  return (
    <div className="mt-12 mb-12">
        <Title heading={"Latest Collections"} subHeading={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."}>

        </Title>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-2">
            {
                latestProducts.map((item,idx)=>(
                    <ProductItem key={idx} name={item.name} id={item._id} image={item.image}
                    price={item.price}></ProductItem>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection