import React from 'react';

// ES6 syntax below to directly extract props.video as the parameter
const VideoListItem = ({video, onVideoClick}) => {
    // const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoClick(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
            </div>

            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </li>
    );
};

export default VideoListItem;