// App.js
import React, { useState } from "react";
import Main from "./containers/Main";
import AllApps from "./AllApps"; // Your new component

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" ? (
        <Main setPage={setPage} />
      ) : (
        <AllApps setPage={setPage} />
      )}
    </div>
  );
}
export default App;
