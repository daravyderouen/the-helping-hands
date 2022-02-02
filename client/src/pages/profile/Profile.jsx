import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/post/3.png" alt="" />
              <img
                className="profileUserImg"
                src="./assets/person/1.jpg"
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
                      <h4 className="profileInfoName">WELCOME TO HELPING HANDS!</h4>
                      <h2>Our mission is to help those that cannot help themselves.</h2>
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
