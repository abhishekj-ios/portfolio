// App.js
import React, { useState, useEffect } from "react";
import Main from "./containers/Main";
import AllApps from "./AllApps"; // Your new component

function App() {
  const [page, setPage] = useState("home");

  // --- PERSISTENT HISTORY ROUTING LAYER ---
  useEffect(() => {
    // Establish a clean baseline history entry for the homepage on initialization
    if (!window.history.state) {
      window.history.replaceState({ page: "home" }, "", " ");
    }

    const handleGlobalNavigation = () => {
      // If the back button strips away our custom hash parameter, fall back to home
      if (window.location.hash.includes("#projects-view")) {
        setPage("all-apps");
      } else {
        setPage("home");
      }
    };

    // Keep these event listeners alive at the root level of your application
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
        <Main setPage={setPage} />
      ) : (
        <AllApps setPage={setPage} />
      )}
    </div>
  );
}

export default App;
