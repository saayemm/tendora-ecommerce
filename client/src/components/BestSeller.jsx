import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title"
import ProductItem from "./ProductItem"


const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller))
        if (products && products.length > 0) {
            setBestSeller(bestProduct.slice(0, 5));
        }
    },[products])

  return (
    <div className="">
        <div>
            <Title heading={"Our Best Seller"} 
            subHeading={"Lorem ipsum dolor sit amet consectetur adipisicing elit asperiores beatae, deserunt tenetur placeat"}></Title>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-2">
            {
                bestSeller.map((item,idx)=>(
                    <ProductItem key={idx} name={item.name} id={item._id} image={item.image}
                    price={item.price}></ProductItem>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller