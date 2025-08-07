import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HealthCheckPageWithButton from "./pages/HealthCheckPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HealthCheckPageWithButton />
    </>
  );
}

export default App;
