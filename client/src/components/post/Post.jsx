import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
    
  }


  const [check,setCheck] = useState(post.check)
  const [isChecked,setIsChecked] = useState(false)

  const checkHandler =()=>{
    setCheck(isChecked ? check-0 : check+1)
    setIsChecked(!isChecked)
    
  }  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={PF+Users.filter((u) => u.id === post?.userId)[0].username}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF +post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <img className="likeIcon" src={`${PF}check.png`} onClick={checkHandler} alt="" />
          <span className="postCheckCounter">{check} </span>
            <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} </span>
            <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
