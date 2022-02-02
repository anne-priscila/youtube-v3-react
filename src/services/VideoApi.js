import axios from 'axios';

const VideoApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/videos/'
});

export default VideoApi;