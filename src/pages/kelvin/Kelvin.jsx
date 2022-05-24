import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./kelvin.css"

export default function Kelvin() {
  return (
    <>
      <Topbar />
      <div className="kelvinContainer">
        {/* <Sidebar /> */}
        <Feed/>
        {/* <Rightbar/> */}
      </div>
    </>
  );
}
