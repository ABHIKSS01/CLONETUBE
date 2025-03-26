import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { videos } from '../../data/dummyData';
import VideoPlayer from '../../components/videoDetails/VideoPlayer';
import VideoInfo from '../../components/videoDetails/VideoInfo';
import CommentSection from '../../components/videoDetails/CommentSection';
import RelatedVideos from '../../components/videoDetails/RelatedVideos';
import '../../styles/components/videoDetails.css';

const VideoDetailsPage = () => {
    const { videoId } = useParams();
    const video = videos.find(v => v.id === videoId);

    if (!video) {
        return <div>Video not found</div>;
    }

    return (
        <div className="video-details-page">
            <div className="main-video-content">
                <VideoPlayer video={video} />
                <VideoInfo video={video} />
                <CommentSection videoId={videoId} />
            </div>
            <div className="related-videos">
                <RelatedVideos currentVideoId={videoId} />
            </div>
        </div>
    );
};

export default VideoDetailsPage;