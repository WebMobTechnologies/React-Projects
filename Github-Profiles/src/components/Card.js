import React from 'react';
import './Card.scss';
import { FaHeart, FaEye, FaRegCommentAlt } from 'react-icons/fa';

const Card = (props) => {
  return (
    <>
      <div className="my-card">
        <div className="profile">
          <img alt="avatar" src={props.data.avatar_url} />
          <div className="profile-data">
            <h3 className="name">{props.data.name}</h3>
            <span className="bio">{props.data.bio}</span>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              Lorem ipsum dolor sit amet
            </p>

            <div className="icon-group">
              <div className="social-icons">
                <FaEye className="icon" size={18} />
                <span>{props.data.following}</span>
              </div>

              <div className="social-icons">
                <FaHeart className="icon" size={18} fill={'red'} />
                <span>{props.data.followers}</span>
              </div>

              <div className="social-icons">
                <FaRegCommentAlt className="icon" size={18} />
                <span>{props.data.public_repos}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
