const getTopLikedVideos = (data) =>
    data
        .sort((videoA, videoB) => videoB.likeCount - videoA.likeCount)
        .slice(0, 5)

const getNewestVideos = (data) =>
    data
        .sort(
            (videoA, videoB) =>
                new Date(videoB.publishedAt) - new Date(videoA.publishedAt)
        )
        .slice(0, 5)

const getTotalLikes = (data) =>
    data.reduce((total, video) => total + parseInt(video.likeCount), 0)

const getTopViewedVideos = (data) =>
    data
        .sort((videoA, videoB) => videoB.viewCount - videoA.viewCount)
        .slice(0, 5)

export { getTopLikedVideos, getNewestVideos, getTotalLikes, getTopViewedVideos }
