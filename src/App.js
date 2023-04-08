import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import styles from "./App.less";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
