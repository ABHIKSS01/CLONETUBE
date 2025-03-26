import React from "react";
import VideoCard from "./VideoCard";
import { videos } from "../../data/dummyData";

const VideoGrid = ({ videos, title }) => {
    return (
        <div className="video-grid-container">
            {title && <h2 className="section-title">{title}</h2>}
            <div className="video-grid">
                {videos.map(videos => (
                <VideoCard key={videos.id} video={videos} />
                ))}
            </div>
        </div>
    );
}
export default VideoGrid;