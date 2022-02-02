import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={`${PF}post/3.png`} alt="" />
              <img
                className="profileUserImg"
                src={`${PF}person/1.png`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <div className="container">
                <div className="background-img">
                  <div className="box">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="content">
                      <h3 className="profileInfoName">WELCOME TO HELPING HANDS!</h3>
                      {/* <h1>Hope is priceless.</h1> */}
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <span className="profileInfoDesc">Hello my friends!</span> */}
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
