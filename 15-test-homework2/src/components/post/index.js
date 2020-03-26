import React from 'react';

function Post(props) {
  return (
    <div className="Post">
      <div className="Post-account">
        <img src={props.author.photo} className="Post-account-img" alt="" />
      </div>
      <div className="Post-content">
        <div className="Post-content-header">
          <h5 className="Post-title">
            {props.author.name}
            <i className="zmdi zmdi-check-circle"></i>
          </h5>
          <span className="Post-info">
            {props.author.nickname}
          </span>
          <span className="Post-delimiter"></span>
          <span className="Post-info">
            {props.date}
          </span>
          <a href="#0" className="Post-hide-link"><i className="zmdi zmdi-chevron-down"></i></a>
        </div>
        <p className="Post-content-text">
          {props.content}
        </p>
        <div className="Post-content-image">
          <img src={props.image} className="Post-attached-image" alt="" />
        </div>
        <div className="Post-content-footer">
          <a href="#0" className="Post-footer-link">
            <i className="zmdi zmdi-comment-outline"></i>
            <span>
              {props.quantityСomment}
            </span>
          </a>
          <a href="#0" className="Post-footer-link">
            <i className="zmdi zmdi-refresh-alt"></i>
            <span>
              {props.quantityRepost}
            </span>
          </a>
          <a href="#0" className="Post-footer-link">
            <i className="zmdi zmdi-favorite-outline"></i>
            <span>
              {props.quantityFavorite}
            </span>
          </a>
          <a href="#0" className="Post-footer-link">
            <i className="zmdi zmdi-share"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;
