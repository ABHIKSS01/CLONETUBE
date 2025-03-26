import React from "react";
import LikeDislikeButtons from "./LikeDislikeButton";
import SubscribeButton from "./SubscribeButton";
import { formatViewCount, formatTimeElapsed} from "../../utils/formatter";
import { Container } from "react-bootstrap";

const VideoInfo = ({ video }) => {
    const[showFullDescription, setShowFullDescription] = React.useState(false);

    const {toggleDescription} = () => {
        setShowFullDescription(!showFullDescription);
    }

    return (
        <div className="video-info-Container">
            <h1 className="video-title">{video.title}</h1>
            <div className="video-metadata"></div>
        </div>