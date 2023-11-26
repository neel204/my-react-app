import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { MdInsertComment } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { useState } from "react";
import "../App.css";

const ImageContainer = ({ imageUrl }) => {
  const [isImageActive, setImageActive] = useState(false);
  const [isImageUrl, setImageUrl] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userLike, setUserLike] = useState(false);
  const [showCommentContainer, setShowCommentContainer] = useState(false);

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % imageUrl.length;
    setCurrentIndex(nextIndex);
    setImageUrl(imageUrl[nextIndex]);
    // setShowCommentContainer(false); // Close comment container when changing images
  };

  const showPreviousImage = () => {
    const previousIndex = (currentIndex - 1 + imageUrl.length) % imageUrl.length;
    setCurrentIndex(previousIndex);
    setImageUrl(imageUrl[previousIndex]);
    // setShowCommentContainer(false); // Close comment container when changing images
  };

  const toggleCommentContainer = () => {
    setShowCommentContainer(!showCommentContainer);
  };

  const toggleUserLike = () => {
    setUserLike(!userLike);
  };

  return (
    <div>
      {isImageActive && (
        <div className={`popup-container ${showCommentContainer ? 'comment-active' : ''}`}>
          
  <IoCloseCircleOutline
    className="close-icon"
    onClick={() => {
      setImageActive(false);
      setShowCommentContainer(false);
    }}
  />

          <div className="image-container">
            <button className="prev-button" onClick={showPreviousImage}>
              <GrFormPrevious />
            </button>
            <img src={isImageUrl} alt={`${currentIndex}`} className="popup-image" />
            <button className="next-button" onClick={showNextImage}>
              <MdNavigateNext />
            </button>
            <div>
               <div className="userInteraction">
            {userLike ? (
              <AiFillLike onClick={toggleUserLike} id="dislike" />
            ) : (
              <BiLike onClick={toggleUserLike} id="like" />
            )}
            {showCommentContainer ?  <MdInsertComment  id="comment icon" onClick={toggleCommentContainer} />: <MdOutlineComment id="comment icon" onClick={toggleCommentContainer} />}
            
           
          </div> 
            </div>
            
          </div>
          
          {showCommentContainer && (
            <div id="comment-container">
              <IoCloseCircleOutline className="cl" onClick={toggleCommentContainer} />
              {/* Place your comment input and display logic here */}
              <p>Comment input and display go here.</p>
              <input type="text"/>
            </div>
          )}
        </div>
      )}
      <div className="display">
        {imageUrl.map((eachImgUrl, i) => (
          <img
            src={eachImgUrl}
            alt={`${i}`}
            key={eachImgUrl}
            className="image-size"
            onClick={() => {
              setImageActive(true);
              setImageUrl(eachImgUrl);
              setCurrentIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
