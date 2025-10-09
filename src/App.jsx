import AppRoutes from "./Router/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </>
  );
}

export default App;
