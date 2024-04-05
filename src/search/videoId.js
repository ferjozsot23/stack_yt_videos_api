import client from "../api/client.js"
import {STACKBUILDERS_ID, MAX_RESULTS} from "../utils/constants.js"

async function getVideosId() {
    try {
        const response = await client.search.list({
            part: "snippet",
            channelId: STACKBUILDERS_ID,
            fields: "items/id/videoId",
            maxResults: MAX_RESULTS,
            type: "video",
            videoDuration: "any",
        })
        return response.data.items.map((item) => item.id.videoId)
    } catch (err) {
        console.error("Error al buscar videos:", err)
        return []
    }
}

export default getVideosId
