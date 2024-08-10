import Layout from "./components/layout/Layout.jsx";

import mapView from "./assets/map-view.png";
import Premise from "./components/questionnaire/Premise.jsx";

function App() {
  return (
    <Layout>
      <Premise />
      <div className="h-full" style={{
        background: `url(${mapView}) repeat center center`
      }}/>
    </Layout>
  )
}

export default App
