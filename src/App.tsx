import { useEffect } from "react";
import Terminal from "./features/terminal/components/Terminal";

function App() {
  useEffect(() => {
    const el = document.querySelector<HTMLInputElement>("#input-bar");
    window.addEventListener("click", () => {
      el?.focus();
    });
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Terminal></Terminal>
    </div>
  );
}

export default App;
