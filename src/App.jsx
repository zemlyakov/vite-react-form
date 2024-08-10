import Layout from "./components/layout/Layout.jsx";

import mapView from "./assets/map-view.png";

function App() {
  return (
    <Layout>
      <div>Hello world</div>
      <div className="h-full" style={{
        background: `url(${mapView}) repeat center center`
      }}/>
    </Layout>
  )
}

export default App
