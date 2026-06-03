import React, { useState, useEffect } from "react";
import Main from "./containers/Main";
import AllApps from "./AllApps"; 
import Header from "./components/Header/Header"; // <--- ADD THIS IMPORT (Adjust path if needed)

function App() {
  const [page, setPage] = useState("home");

  // --- PERSISTENT HISTORY ROUTING LAYER ---
  useEffect(() => {
    if (!window.history.state) {
      window.history.replaceState({ page: "home" }, "", " ");
    }

    const handleGlobalNavigation = () => {
      if (window.location.hash.includes("#projects-view")) {
        setPage("all-apps");
      } else {
        setPage("home");
      }
    };

    window.addEventListener("popstate", handleGlobalNavigation);
    window.addEventListener("hashchange", handleGlobalNavigation);

    return () => {
      window.removeEventListener("popstate", handleGlobalNavigation);
      window.removeEventListener("hashchange", handleGlobalNavigation);
    };
  }, []);
  // ----------------------------------------

  return (
    <div>
      {page === "home" ? (
        <>
          <Header setPage={setPage} />
          <Main setPage={setPage} />
        </>
      ) : (
        <AllApps setPage={setPage} />
      )}
    </div>
  );
} // <--- Make sure this closing brace exists

export default App;
