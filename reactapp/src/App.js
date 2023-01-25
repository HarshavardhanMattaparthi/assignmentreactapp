import { LineChart, Line } from "recharts";

import { BiTimeFive } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillPiggyBankFill } from "react-icons/bs";
import World from "./component/world";
import "./App.css";


const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 1200,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1698,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 2000,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 2408,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 2800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4800,
    amt: 2100,
  },
];

const App = () => {
  return (
    <div className="main-div">
      <div className="nav-bar">
        <ul className="list-style">
          <li className="list-items">Project</li>
          <li className="list-items">Language</li>
          <li className="list-items">Language </li>
          <li className="list-items">Dashboard</li>
          <li className="list-items">User Management</li>
        </ul>
      </div>
      <div className="date-container">
        <div className="date-subcontainer">
          <label for="birthday">Date:</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            className="input-style"
          />
          <span>-</span>

          <input
            type="date"
            id="birthday"
            name="birthday"
            className="input-style"
          />
        </div>
      </div>
      <div className="card-container">
        <div className="card card1">
          <div class="sub-card-container">
            <p className="number-style">525</p>
            <p className="icon">
              <BsFillPiggyBankFill />
            </p>
          </div>
          <div>
            <h1 className="card-text">Total onboarded projects</h1>
          </div>
        </div>
        <div className="card card2">
          <div class="sub-card-container">
            <p className="number-style">282</p>
            <p className="icon">
              <BiTimeFive />
            </p>
          </div>
          <div>
            <h1 className="card-text">Transalations in progress</h1>
          </div>
        </div>
        <div className="card card3">
          <div class="sub-card-container">
            <p className="number-style">243</p>
            <p className="icon">
              <AiFillCheckCircle />
            </p>
          </div>
          <div>
            <h1 className="card-text">Transalations Completed</h1>
          </div>
        </div>
      </div>
      <div className="graph-container">
        <div className="graph-container-items">
          <p className="paragraph-graph">characters Transalated</p>
          <p className="paragraph-graph">65,894,387</p>
          <LineChart width={700} height={60} data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#ede279"
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="graph-container-items">
          <p className="paragraph-graph">Translation Memory Capacity</p>
          <p className="paragraph-graph">5GB</p>
          <LineChart width={700} height={85} data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#e04436"
              strokeWidth={2}
            />
          </LineChart>
        </div>

        <div></div>
      </div>
      <div className="graph-container">
        <div className="graph-container-items">
          <p className="paragraph-graph">Human in The Middle reviews</p>
          <p className="paragraph-graph">43,487</p>
          <LineChart width={700} height={60} data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#4dbcdb"
              strokeWidth={2}
            />
          </LineChart>
        </div>
        <div className="graph-container-items">
          <p className="paragraph-graph">Total Saving</p>
          <p className="paragraph-graph">$1,376,923</p>
          <LineChart width={700} height={80} data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </div>

        
      </div>
      <div className="map-container">
     <World/>
     <div>
     <table className="table-style">
  
  
  <tr>
    <td className="countryname">USA</td>
    <td>176,880</td>
  </tr>
  <tr>
    <td className="countryname">France</td>
    <td>54,748</td>
  </tr>
  <tr>
    <td className="countryname">Australia</td>
    <td>86,068</td>
  </tr>
  <tr>
    <td className="countryname">China</td>
    <td>96,304</td>
  </tr>
  <tr>
    <td className="countryname">Mexico</td>
    <td>66,870</td>
  </tr>
  <tr>
    <td className="countryname">Indonesia</td>
    <td>14,757</td>
  </tr>
  <tr>
    <td className="countryname">Philippines</td>
    <td>77,482</td>
  </tr>
  <tr>
    <td className="countryname">Cuba</td>
    <td>18,418</td>
  </tr>
  <tr>
    <td className="countryname">Iran</td>
    <td>74,482</td>
  </tr>
  <tr>
    <td className="countryname">Uk</td>
    <td>89,934</td>
  </tr>
  <tr>
    <td className="countryname">Japan</td>
    <td>25,808</td>
  </tr>
  <tr>
    <td className="countryname">Africa</td>
    <td>93,998</td>
  </tr>
  <tr>
    <td className="countryname">Argentina</td>
    <td>72,762</td>
  </tr>
 
</table>



     </div>
      </div>
      <div className="secondtable-style">
        
        <table className="table-style">
  <tr className="tr-background" >
    <th>Transalation by Language</th>
    <th></th>
  </tr>
  
  <tr>
    <td className="countryname">Japanese</td>
    <td>82,776</td>
  </tr>
  <tr>
    <td className="countryname">Potuguese</td>
    <td>75,447</td>
  </tr>
  <tr>
    <td className="countryname">Germany</td>
    <td>59,055</td>
  </tr>
  <tr>
    <td className="countryname">English</td>
    <td>58,150</td>
  </tr>
  <tr>
    <td className="countryname">Italian</td>
    <td>56,956</td>
  </tr>
  <tr>
    <td className="countryname">Hindi</td>
    <td>43,229</td>
  </tr>
  <tr>
    <td className="countryname">Spanish</td>
    <td>42,757</td>
  </tr>
  <tr>
    <td className="countryname">Turkish</td>
    <td>38,482</td>
  </tr>
  <tr>
    <td className="countryname">Russia</td>
    <td>26,933</td>
  </tr>
  
</table>
      </div>
      
    </div>
    
  );
};
export default App;
