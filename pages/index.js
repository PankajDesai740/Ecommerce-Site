import { useState,useEffect } from "react"

export default function Home() {

const [productsInfo, setProductsInfo] = useState([]);

useEffect(() => {
  fetch("/api/products")
  .then(response=>response.json())
  .then(json => setProductsInfo(json));
}, [])

const categoriesNames = [...new Set(productsInfo.map(p => p.category))];
console.log({categoriesNames});

  return (
    <div className="p-5">
      <div className="text-2xl">
        <h2>Mobiles</h2>
        <div className="py-4">
          <div className="w-64">
            <div className="bg-blue-100 p-5 rounded-xl">
              <img src="/product/iphone.png" alt="" />
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-lg">Iphone 14 pro</h3>
            </div>
            <p className="text-sm mt-1 leading-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint, nam ea magni quas maxime neque dolor ab iure amet.
            </p>
            <div className="flex mt-1">
              <div className="text-2xl font-bold grow">$799</div>
              <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
