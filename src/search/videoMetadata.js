import { getChannelVideosId } from "./videoId.js"
import client from "../api/client.js"

export async function getVideosMetadata() {
    try {
        const videosIdArray = await getChannelVideosId()

        const response = await client.videos.list({
            part: "snippet,statistics",
            id: videosIdArray,
        })

        if (
            !response ||
            !response.data ||
            !response.data.items ||
            response.data.items.length === 0
        ) {
            throw new Error("No metadata found for the retrieved video IDs")
        }

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
        throw new Error(
            "Error fetching metadata from the specified video IDs: " +
                err.message
        )
    }
}
