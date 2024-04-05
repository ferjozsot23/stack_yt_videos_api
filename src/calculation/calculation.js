

function getTopLikedVideos(data) {
    return data
        .sort((videoA, videoB) => videoB.likeCount - videoA.likeCount)
        .slice(0, 5)
}


function getNewestVideos(data) {
    return data
        .sort(
            (videoA, videoB) =>
                new Date(videoB.publishedAt) - new Date(videoA.publishedAt)
        )
        .slice(0, 5)
}

function getTotalLikes(data) {
    return data.reduce((total, video) => total + parseInt(video.likeCount), 0)
}


function getTopViewedVideos(data) {
    return data
        .sort((videoA, videoB) => videoB.viewCount - videoA.viewCount)
        .slice(0, 5)
}


export { getTopLikedVideos, getNewestVideos, getTotalLikes, getTopViewedVideos }
