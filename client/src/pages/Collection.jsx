import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { IoIosArrowDropdown } from "react-icons/io";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";


const Collection = () => {
  const {products} = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subcategory, setSubCategory] = useState([])

  const toggleCategory = (e)=> {
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item !== e.target.value))
    }else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  useEffect(()=>{
    setFilterProducts(products)
  },[])

  useEffect(()=>{
    console.log(category)
  },[category])

  return (
    <div className="flex">
      {/* left */}
      <div className="mt-20">
        <p onClick={()=>setShowFilter(!showFilter)} className="font-semibold flex gap-2 items-center">Filters 
          <span className={`sm:hidden ${setShowFilter ? 'rotate-0' : ''}`}><IoIosArrowDropdown /></span></p>
        <div className={`border border-gray-300 w-40 pl-5 py-3 mt-2 ${showFilter ? '' : "hidden"} sm:block`}>
            <p className="mb-2 uppercase font-medium">Categories</p>
            <div className="flex flex-col text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" value={'Men'} onChange={toggleCategory} />Men</p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Women'} onChange={toggleCategory} />Women</p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids</p>
            </div>
        </div>
        {/* SubCategory */}
        <div className={`border border-gray-300 w-40 pl-5 py-3 mt-2 ${showFilter ? '' : "hidden"} sm:block`}>
            <p className="mb-2 uppercase font-medium">Type</p>
            <div className="flex flex-col text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" value={'Top'} />Top</p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Botto'} />Bottom</p>
              <p className="flex gap-2">
                <input type="checkbox" value={'Winter'} />Winter</p>
            </div>
        </div>
      </div>

      {/* Left */}
      <div className="flex-1 mt-20 ml-12">
        <div className="flex justify-between">
            <Title heading={"All Collections"}></Title>
            <select className="border border-gray-300 px-4 h-10">
                <option value="relevent">Sort by: Relevent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
            </select>
        </div>

        {/* Products map */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {
              filterProducts.map((item,idx)=><ProductItem key={idx}name={item.name} id={item._id} image={item.image}
              price={item.price}></ProductItem>)
            }
        </div>
      </div>
    </div>
  )
}

export default Collection