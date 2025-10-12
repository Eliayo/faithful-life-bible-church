import AppRoutes from "./Router/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BackToTopButton from "./components/Common/BackToTopButton";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <AppRoutes />
          <BackToTopButton />
        </Layout>
      </Router>
    </>
  );
}

export default App;
