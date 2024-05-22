// src/App.js
import React, { useEffect, useState } from 'react';
import ECGMonitor from './ECGMonitor';

const ecgData = [
  { ecg: { Samples: [-173, -159, -131, -108, -111, -130, -158, -174, -181, -179, -167, -156, -158, -168, -171, -170], Timestamp: 119502 }},
  { ecg: { Samples: [-171, -173, -176, -167, -138, -98, -55, -22, 1, 3, -18, -64, -106, -127, -133, -138], Timestamp: 119630 }},
  { ecg: { Samples: [-146, -147, -151, -162, -153, -102, -65, -249, -497, -72, 1192, 2216, 1866, 388, -845, -1004], Timestamp: 119758 }},
  { ecg: { Samples: [-543, -250, -232, -228, -210, -202, -170, -149, -136, -121, -115, -103, -84, -68, -56, -37], Timestamp: 119886 }},
  { ecg: { Samples: [-20, 5, 25, 53, 90, 132, 170, 201, 228, 251, 261, 268, 255, 213, 144, 56], Timestamp: 120014 }},
  { ecg: { Samples: [-34, -121, -199, -257, -290, -306, -315, -321, -318, -310, -295, -273, -260, -255, -256, -251], Timestamp: 120142 }},
  { ecg: { Samples: [-236, -220, -211, -211, -204, -193, -188, -187, -188, -185, -182, -179, -172, -166, -164, -158], Timestamp: 120270 }},
  { ecg: { Samples: [-151, -140, -139, -148, -159, -165, -159, -139, -99, -57, -20, 3, 6, -20, -62, -102], Timestamp: 120398 }},
  { ecg: { Samples: [-116, -114, -116, -127, -136, -142, -149, -143, -96, -57, -213, -457, -117, 1010, 1982, 1717], Timestamp: 120526 }},
  { ecg: { Samples: [374, -808, -1008, -588, -281, -238, -232, -228, -217, -177, -153, -146, -128, -112, -96, -84], Timestamp: 120654 }},
  { ecg: { Samples: [-67, -57, -48, -36, -9, 19, 44, 65, 96, 136, 170, 192, 209, 222, 227, 215], Timestamp: 120782 }},
];


function App() {
  /*const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data.json');
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData);
    };

    fetchData();
  }, []);*/
  return (

    <div className="App">
      <h1>ECG Monitor</h1>
      <ECGMonitor data={ecgData}/>
    </div>
  );
}

export default App;
