import React, { useState } from "react";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";

function App() {
  const [tab1, settab1] = useState(true);
  const [tab2, settab2] = useState(false);
  const [tab3, settab3] = useState(false);

  return (
    <div>
      {/* <input 
      onChange={(e) => {
        // console.log(rows[0].name.props.children, "rows")
        // console.log(e.target.value);
        let filtered = dummyrows.filter((v,i) => {
          return v.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setRows(filtered);
      }}  /> */}

      <div style={{ marginLeft: "5%"}} >
        <h3 style={{color: "grey"}} >JOB OPENINGS</h3>
      </div>
      <div style={{ marginLeft: "7%" , marginRight: "7%" , marginBottom: "3%"}}  >
        <p>
          For information on how to apply for a job, go to <a href="www.google.com" >Application Process</a>
          page. To read about recent changes to the application process, <a>click here</a>
          . <br/> Applications from women candidates are strongly encouraged. <br/> The
          United Nations does not charge a fee at any stage of the recruitment
          process (application, interview meeting, processing, training or any
          other fees). The United Nations does not concern itself with
          information on bank accounts.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <button
          onClick={() => {
            settab1(!tab1);
            settab2(false);
            settab3(false);
          }}
          style={{ padding: "10px", width: "200px" }}
        >
          Higher Categories
        </button>

        <button
          onClick={() => {
            settab1(false);
            settab2(!tab2);
            settab3(false);
          }}
          style={{
            padding: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            width: "200px",
          }}
        >
          Field Services
        </button>

        <button
          onClick={() => {
            settab1(false);
            settab2(false);
            settab3(!tab3);
          }}
          style={{ padding: "10px", width: "200px" }}
        >
          InternShip
        </button>
      </div>

      {tab1 && <Tab1 />}

      {tab2 && <Tab2 />}

      {tab3 && <Tab3 />}
    </div>
  );
}

export default App;
