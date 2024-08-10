import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Header from "./Header.jsx";

export default function Layout({ children }) {
  return (
    <main className="w-screen h-screen">
      <Sidebar/>
      <div className="w-full h-full flex flex-col pl-[250px]">
        <Header />
        <div className="h-full flex">
          <div className="w-[55%]">{children[0]}</div>
          <div className="w-[45%] h-full">{children[1]}</div>
        </div>
      </div>
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
