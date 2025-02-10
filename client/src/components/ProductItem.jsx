import { useContext } from "react"

import { Link } from "react-router"
import { ShopContext } from "../context/ShopContext"


const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext)
  return (
    <div>
        <Link className="text-gray-600 cursor-pointer" to={`/product/${id}`}>
            <div className="overflow-hidden">
                <img className="hover:scale-120 transition ease-in-out" src={image[0]} alt="" />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className=" pb-3 text-sm font-medium">{currency}{price}</p>
        </Link>
    </div>
  )
}

export default ProductItem