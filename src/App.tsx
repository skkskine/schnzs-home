import { useEffect } from "react";
import Terminal from "./features/terminal/components/Terminal";

function App() {
  // always keep the focus on the input bar
  useEffect(() => {
    const el = document.querySelector<HTMLInputElement>("#input-bar");
    window.addEventListener("click", () => {
      el?.focus();
    });
  }, []);

  return <Terminal></Terminal>;
}

export default App;
