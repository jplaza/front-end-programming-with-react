import './App.css';
import {useEffect, useState} from 'react';


async function loadCategories() {
  const response = await fetch("https://dummyjson.com/products/categories")
  return response.json()
}

async function loadProducts(category) {
  const response = await fetch(`https://dummyjson.com/products/category/${category}`)
  return response.json()
}

function SelectCategory({categories, category, onCategoryChange, disabled}) {
  function handleCategoryChange(e) {
    onCategoryChange(e.target.value)
  }

  return (
    <div>
      <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={category}
        onChange={handleCategoryChange}
        disabled={disabled}
      >
        <option value=""></option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
    </div>
  )
}

function App() {
  const [categories, setCategories] = useState([])
  const [productList, setProductList] = useState({products: [], isLoading: false})
  const [selectedCategory, setSelectedCategory] = useState("")
  
  useEffect(() => {
    loadCategories().then((response) => {
      setCategories(response)
    })
  }, [])

  function handleCategoryChange(newCategory) {
    setSelectedCategory(newCategory)
    if (newCategory) {
      setProductList({ products: [], isLoading: true })
      loadProducts(newCategory).then(newProductList => {
        setProductList({ ...newProductList, isLoading: false })
      })
    }
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl mt-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Products</h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <SelectCategory
            categories={categories}
            onCategoryChange={handleCategoryChange}
            disabled={productList.isLoading}
            cateogory={selectedCategory} />
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            {productList.isLoading && (<div className="lds-ripple"><div></div><div></div></div>)}
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Description
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Price
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Rating
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Brand
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {productList.products.map((product) => (
                  <tr key={product.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {product.title}
                    </td>
                    <td className=" px-3 py-4 text-sm text-gray-500">{product.description}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.price}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.rating}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {product.brand}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
