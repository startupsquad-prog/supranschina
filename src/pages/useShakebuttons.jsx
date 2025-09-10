import { useEffect } from "react";

export default function useShakeButtons() {
  useEffect(() => {
    const interval = setInterval(() => {
      // Select all buttons with the shake-btn class anywhere in the DOM
      const buttons = document.querySelectorAll(".shake-btn");
      buttons.forEach((btn) => {
        btn.classList.add("shake");
        setTimeout(() => btn.classList.remove("shake"), 500); // shake duration
      });
    }, 3000); // shake every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
}
