import React from "react";
import HOCDataFetcher from "./HOCDataFetcher";

function SWADisplay() {
  return (
    <div>
      <h2>Stringify and display data fetched from star wars api </h2>
      <HOCDataFetcher>
        {(loading, data) =>
          loading ? (
            <h2>Loading, please wait a second</h2>
          ) : (
            <p>{JSON.stringify(data)}</p>
          )
        }
      </HOCDataFetcher>
    </div>
  );
}

export default SWADisplay;
