import { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState("")
  const [size, setSize] = useState('');
  const [gauge, setGauge] = useState(6500);

const sizes = [
  { id: 1, label: "8mm", value: "8mm", gaugeValue: 6500 },
  { id: 2, label: "10mm", value: "10mm", gaugeValue: 5500 },
  { id: 3, label: "12mm", value: "12mm", gaugeValue: 5000 },
  { id: 4, label: "16mm", value: "16mm", gaugeValue: 5000 },
  { id: 5, label: "20mm", value: "20mm", gaugeValue: 5000 },
  { id: 6, label: "25mm", value: "25mm", gaugeValue: 5000 },
  { id: 7, label: "32mm", value: "32mm", gaugeValue: 6500 },
];

const handleChange = (e) => {
  for (let index = 0; index < sizes.length; index++) {
    const x = sizes[index].value;
   if(x===e.target.value){
    setGauge(sizes[index].gaugeValue)
    console.log(sizes[index].gaugeValue);
   }
  }
      setSize(e.target.value);
}

const totalPreGST = parseInt(price) + parseInt(gauge) + 280;
const gstAmt = (totalPreGST*18/100).toFixed(2);
const FinalAmt = totalPreGST+parseFloat(gstAmt)+500;

  return (
    <div className="container">
      <h1 className="my-5 text-center">
        <strong>Calculate</strong>
      </h1>
      <div>
        <div className="mb-3">
          <label htmlFor="inputAmt" className="form-label">
            <strong>Enter Price</strong>
          </label>
          <input
            type="number"
            className="form-control"
            id="inputAmt"
            onChange={(e) => setPrice(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <label htmlFor="inputSize" className="form-label">
          <strong>Select Size</strong>
        </label>
        <select
          className="form-select"
          id="inputSize"
          key={size}
          value={size}
          onChange={handleChange}
          aria-label="Default select example"
        >
          {sizes.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="my-5 table-responsive">
        <h2 className="my-3 text-center">
          <strong>Total Breakdown</strong>
        </h2>
        <table className="table table-bordered border-dark">
          <tbody>
            <tr>
              <th>Price</th>
              <td>₹{price}</td>
            </tr>
            <tr>
              <th>Gauge Charges</th>
              <td>₹{gauge}</td>
            </tr>
            <tr>
              <th>Loading Charges</th>
              <td>₹280/-</td>
            </tr>
            <tr>
              <th>GST 18%</th>
              <td>₹{gstAmt}</td>
            </tr>
            <tr>
              <th>Commision</th>
              <td>₹500/-</td>
            </tr>
            <tr class="table-dark">
              <th>Final Amount</th>
              <td>
                <strong>₹{FinalAmt}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        &#169; 2024 <strong>Lakhdatar Steel</strong>
      </p>
    </div>
  );
}

export default App;
