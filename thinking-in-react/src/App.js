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

function Logo() {
  return <div className='Logo' />
}

function App() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const shouldIncludeProduct = prod => (
    prod.name.toLowerCase().includes(filterText.toLowerCase())
    && (inStockOnly ? prod.stocked : true)
  )
  const products = data.filter(shouldIncludeProduct)

  return (
    <div className="AppContainer">
      <Logo />
      <div className="App">
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly} />
        <ProductTable products={products} />
      </div>
    </div>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <div className='search-bar'>
      <div>
        <input type="text" placeholder='Search...'
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)} />
      </div>
      <div>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
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
          <th className='number-cell'>Price</th>
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

function ProductTableRow({name, price, stocked}) {
  const style = {
    color: stocked?'inherit':'red'
  }
  return (
    <tr>
      <td><span style={style}>{name}</span></td>
      <td class="number-cell">{price}</td>
    </tr>
  );
}


export default App;
