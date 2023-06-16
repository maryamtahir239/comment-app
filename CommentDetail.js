import React from "react";

const CommentDetail = props=> {
    return(
        <div className='comment'>
      <a>
        <img alt="avatar" />
       </a>
      <div className='content'>
        <a className='author'>{props.author}</a>
          <span className='date'>{props.timeAgo}</span>
        <div className='text'> {props.text}</div>
        </div>
     </div>
    );

};

export default CommentDetail;