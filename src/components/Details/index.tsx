import React from 'react';
import './styles.css';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

type Props = {
  title: string;
  poster_path: string;
  overview: string;
}

function Details({
  title,
  poster_path,
  overview
}: Props) {
  return (
    <div className="Details">
      <div className="side-right">
      <img src={poster_path ?
        (IMG_API + poster_path)
        : "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1728&q=80"}
        alt={title}
      />
      </div>
      <div className="side-left">
        <h2>{title}</h2>
        <div className="overview">
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
