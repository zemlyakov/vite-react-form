import AlertIcon from '../icons/Alert.jsx';
import ExternalLink from "../icons/ExternalLink.jsx";

export default function Alert() {
  return (
    <div className="p-4 rounded-xl bg-[#FCEBEC]" role="alert">
      <div className="flex items-center gap-2 text-[#9D272B]">
        <AlertIcon className="w-3.5 h-3.5"/>
        <b className="font-semibold leading-[150%]">You will not be able to perform activities in
          the specified area</b>
      </div>
      <small className="block mt-1.5 text-sm leading-[150%] text-[#9D272B]">Select another location or use map based insights to find
        the best one</small>
      <a href="#"
         className="mt-3 inline-flex items-center gap-2 px-3 py-2 text-white hover:text-white bg-[#BE2F34] text-xs font-medium leading-[150%] rounded-lg">
        Map Based Insights
        <ExternalLink className="w-2.5 h-2.5" />
      </a>
    </div>
  );
}
