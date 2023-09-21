
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchedData = 'Hello, World!';
      setData(fetchedData);
    }, 6000); 
  }, []);

  return (
    <div className="App">
      <h1>UseEffect</h1>
      <div>
        {data ? (
          <p>Data: {data}</p>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default App;
