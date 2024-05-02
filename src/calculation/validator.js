export const validateData = (data) => {
    return (
        Array.isArray(data) &&
        data.length > 0 &&
        data.every(
            (video) =>
                video && video.publishedAt && video.likeCount && video.viewCount
        )
    )
}
