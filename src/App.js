import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";

import QueryPage from "./components/Querypage";

function App() {
  const [queryid, setQueryid] = useState("1");
  return (
    <div className="App">
      <Layout queryid={queryid} setQueryid={setQueryid}>
        <QueryPage queryid={queryid} setQueryid={setQueryid} />
      </Layout>
    </div>
  );
}

export default App;
