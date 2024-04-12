import getVideosId from "./videoId.js"
import client from "../api/client.js"

async function getVideosMetadata() {
    const videosIdArray = await getVideosId()

    try {
        const response = await client.videos.list({
            part: "snippet,statistics",
            id: videosIdArray,
        })

        const videosMetadata = response.data.items.map(
            ({ id, snippet, statistics }) => ({
                videoId: id,
                publishedAt: snippet.publishedAt,
                likeCount: statistics.likeCount,
                viewCount: statistics.viewCount,
            })
        )

        return videosMetadata
    } catch (err) {
        throw new Error("Error fetching videos metadata: " + err.message)
    }
}

export default getVideosMetadata
