const getTopLikedVideos = (data) =>
    Array.isArray(data)
        ? data
              .filter((video) => video)
              .sort((videoA, videoB) => videoB.likeCount - videoA.likeCount)
              .slice(0, 5)
        : []

const getNewestVideos = (data) =>
    Array.isArray(data)
        ? data
              .sort(
                  (videoA, videoB) =>
                      new Date(videoB.publishedAt) -
                      new Date(videoA.publishedAt)
              )
              .slice(0, 5)
        : []

const getTotalLikes = (data) =>
    Array.isArray(data)
        ? data.reduce((total, video) => total + parseInt(video.likeCount), 0)
        : 0

const getTopViewedVideos = (data) =>
    Array.isArray(data)
        ? data
              .sort((videoA, videoB) => videoB.viewCount - videoA.viewCount)
              .slice(0, 5)
        : []

export { getTopLikedVideos, getNewestVideos, getTotalLikes, getTopViewedVideos }
