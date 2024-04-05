import getVideosId from "./videoId.js"
import client from "../api/client.js"

async function getVideosMetadata() {
    const videosIdArray = await getVideosId()

    try {
        const response = await client.videos.list({
            part: "snippet,statistics",
            id: videosIdArray,
        })

        const videosMetadata = response.data.items.map(({id, snippet, statistics}) => ({
            videoId: id,
            publishedAt: snippet.publishedAt,
            likeCount: statistics.likeCount,
            viewCount: statistics.viewCount,
        }))

        return videosMetadata
    } catch (err) {
        console.error("Error al buscar videos:", err)
        return []
    }
}

export default getVideosMetadata
