import PropTypes from "prop-types";

export default function SidebarButtonAnnotation({ text }) {
  return (
    <small className="inline-block ml-[37px] text-sm text-white/80 leading-[150%]">{text}</small>
  );
}

SidebarButtonAnnotation.propTypes = {
  text: PropTypes.string.isRequired,
}
