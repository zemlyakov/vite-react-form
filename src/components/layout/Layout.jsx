import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Header from "./Header.jsx";

export default function Layout({ children }) {
  return (
    <main className="w-screen h-screen">
      <Sidebar/>
      <Header />
      {children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
