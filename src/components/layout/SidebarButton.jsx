import PropTypes from "prop-types";

export default function SidebarButton({ icon, text, variant = "primary" }) {
  return (
    <button type="button"
            className={`w-full px-2 py-1.5 inline-flex space-x-2 items-center font-medium leading-6 text-white ${variant === "primary" ? "bg-white bg-opacity-20" : "bg-transparent"} rounded-lg focus:ring-4 focus:outline-none`}>
      {icon}
      <span>{text}</span>
    </button>
  );
}

SidebarButton.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
