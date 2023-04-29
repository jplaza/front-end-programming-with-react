import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {
  const [inputValue, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <div className="App">
      <StatefulComponents
        onInputChange={handleChange}
        value={inputValue} />
      {/* <SearchBar />
      <ProductTable products={data} /> */}
    </div>
  );
}

function StatefulComponents({onInputChange, value}) {  

  return (
    <div>      
      <input
        value={value}
        onChange={onInputChange} />
    </div>
  )
}

function SearchBar() {
  return (
    <div className='search-bar'>
      <div>
        <input type="text" placeholder='Search...' />
      </div>
      <div>
        <input type="checkbox" />
        <label>Only show product in stock</label>
      </div>
    </div>
  );
}

function ProductTable({products}) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductTableRow
        {...product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductTableRow({name, price}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}


export default App;
