import { validateData } from "./validator.js";

const getTopLikedVideos = (data) =>
  validateData(data)
    ? data
        .sort((videoA, videoB) => videoB.likeCount - videoA.likeCount)
        .slice(0, 5)
    : [];

const getNewestVideos = (data) =>
  validateData(data)
    ? data
        .sort(
          (videoA, videoB) =>
            new Date(videoB.publishedAt) - new Date(videoA.publishedAt)
        )
        .slice(0, 5)
    : [];

const getTotalLikes = (data) => {
  if (validateData(data)) {
    data.reduce((total, video) => total + parseInt(video.likeCount), 0);
  } else {
    throw new Error(
      "Invalid input: Expected an array of videos with its metadata"
    );
  }
};

const getTopViewedVideos = (data) =>
  validateData(data)
    ? data
        .sort((videoA, videoB) => videoB.viewCount - videoA.viewCount)
        .slice(0, 5)
    : [];

export {
  getTopLikedVideos,
  getNewestVideos,
  getTotalLikes,
  getTopViewedVideos,
  validateData,
};
