import logo from './logo.svg';
import './App.css';

const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {
  return (
    <div className="App">
      <SearchBar />
      <ProductTable />
    </div>
  );
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

function ProductTable() {
  const tableHeader = ["Name", "Price"]
  const prod = data[0]
  return (
    <table>
      <thead>
        <ProductTableHeader headers={tableHeader} />
      </thead>
      <tbody>
        { data.map(p => (<ProductTableRow {...p} />)) }
      </tbody>
    </table>
  );
}

function ProductTableHeader({headers}) {
  const head = headers.map(header => (<th>{header}</th>))
  return (
    <tr>
      { head }
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
