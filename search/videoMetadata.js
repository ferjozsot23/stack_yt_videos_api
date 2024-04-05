import getVideosId from "./videoId.js"
import client from "../api/client.js"

async function getVideosMetadata() {
    const videosIdArray = await getVideosId()
    
    try {
        const response = await client.videos.list({
            part: "snippet,statistics",
            id: videosIdArray
        })

        const videosMetadata = response.data.items.map(item => {
            return {
                videoId: item.id,
                publishedAt: item.snippet.publishedAt,
                likeCount: item.statistics.likeCount,
                viewCount: item.statistics.viewCount
            };
        });
        
        return videosMetadata
        
    } catch (err) {
        console.error("Error al buscar videos:", err)
        return []
    }
}

export default getVideosMetadata