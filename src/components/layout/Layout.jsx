import PropTypes from "prop-types";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <main>
      <Sidebar/>
      {children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
