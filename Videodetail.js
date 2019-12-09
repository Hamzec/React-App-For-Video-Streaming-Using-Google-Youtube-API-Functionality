import React from "react";

const videodetail = ({ video }) => {
  if (!video) {
    return <div>Loading....</div>;
  }
  const srcc = `https://www.youtube.com/embed/$(video.id.videoId)`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="Title" src={srcc} />
      </div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default videodetail;
