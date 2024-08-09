import SidebarButton from "./SidebarButton";
import FileNew from "../icons/FileNew";
import Blur from "../icons/Blur.jsx";

import noiseBgUrl from "../../assets/noise-fg.png";
import Contact from "../icons/Contact.jsx";
import User from "../icons/User.jsx";

export default function Sidebar() {
  return (
    <aside id="default-sidebar"
           className="fixed top-0 left-0 z-40 w-[15.625rem] h-screen transition-transform -translate-x-full sm:translate-x-0"
           aria-label="Sidebar">
      <div className="h-full flex flex-col justify-between px-4 pt-5 pb-6 overflow-y-auto" style={{
        background: `url(${noiseBgUrl}) repeat-y center center, black`
      }}>
        <Blur className="w-[250px]] h-[335px] absolute top-[-34px] left-[-9px] pointer-events-none"/>
        <div>
          <h6 className="text-lg font-semibold text-white">Smart Advisor</h6>
          <ul className="mt-14 space-y-2 font-medium">
            <li>
              <SidebarButton icon={<FileNew className="w-3.5 h-[1.125]"/>} text="New scenario"/>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 font-medium">
            <li>
              <SidebarButton icon={<Contact className="w-5 h-5"/>} text="Support" variant="bottom"/>
            </li>
            <li>
              <SidebarButton icon={<User className="w-5 h-5"/>} text="Sign in" variant="bottom"/>
              <small className="inline-block ml-[37px] text-sm text-white/80 leading-[150%]">Save your progress and keep all scenarios in one place</small>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
