import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://mdnjyospzyvebgdvkjzu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbmp5b3Nwenl2ZWJnZHZranp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNDcxNjcsImV4cCI6MjAxODcyMzE2N30.VXedK0wlDn4en70NYPjJ4XyzJ4jrMq-0fcnQH85Vdtw"
);

function App() {
  const [party, setPaties] = useState([]);

  useEffect(() => {
    getParties();
  }, []);

  async function getParties() {
    console.log(supabase);
    const { data } = await supabase.from("Party").select().limit(10);
    console.log(data);
    setPaties(data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Politico Frontend</p>

        <p> checking </p>
        <p> {party} </p>
      </header>

      <section>
        <p>
          <a href="">sign-in</a>
        </p>
        <p>
          <a href="">sign-out</a>
        </p>
      </section>
    </div>
  );
}

export default App;
