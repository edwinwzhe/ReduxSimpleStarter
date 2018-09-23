import React from 'react';
import VideoListItem from './video_list_item';

// for functional components - props are passed in as function parameters
// for class components - props are available as this.props
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoClick={props.onVideoClick}
            key={video.etag}
            video={video}/>
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;