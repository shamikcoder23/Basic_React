// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);*/

const root = createRoot(document.getElementById("root"));
const hour = new Date().getHours();
var msg = "";
var clr = "red";
if (hour <= 12) {
  msg = "Good Morning";
} else if (hour > 12 && hour <= 18) {
  msg = "Good Afternoon";
  clr = "green";
} else if (hour > 18 && hour <= 24) {
  msg = "Good Evening";
  clr = "blue";
}

root.render(
  <div>
    <h1 className="heading" style={{ color: clr }}>
      {msg}
    </h1>
  </div>
);
