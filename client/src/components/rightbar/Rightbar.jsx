import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import TodoList from "../todo/TodoList";

export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Dan Rather</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Lafayette, Louisiana</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Nupo, Thailand</span>
          </div>
          {/* <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div> */}
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {/* <div className="rightbarFollowing">
            <img
              src={`${PF}person/1.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">HELPING HANDS</span>
          </div> */}
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/2.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Edward Scissorhand</span>
          </div>
          {/* <div className="rightbarFollowing">
            <img
              src={`${PF}person/3.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Dina Byrnes</span>
          </div> */}
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/4.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Bobby Boucher</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/5.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Harry Potter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/6.jpg`}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Katie McCallister</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
        <div className="todo-appbody">
          <div className="rightbartodo-app">
        <TodoList />
        </div>
        </div>
      </div>
    </div>
  );
}