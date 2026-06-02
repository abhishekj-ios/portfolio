import React, { useState } from "react";
import "./App.scss";
import Main from "./containers/Main";
import AllApps from "./AllApps";

function App() {
  // 'page' state tracks which screen to show. 
  // 'home' is default.
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" ? (
        // Pass a function to Main so the "All Projects" button can change the page
        <Main onNavigate={(target) => setPage(target)} />
      ) : (
        // Render AllApps and give it a way to go back home
        <AllApps onNavigate={(target) => setPage(target)} />
      )}
    </div>
  );
}

export default App;
