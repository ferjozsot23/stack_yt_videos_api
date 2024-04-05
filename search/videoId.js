import client from "../api/client.js"
import channelNameId from "../utils/channelId.js"

async function getVideosId(channelName) {
    const stackbuildersChannelId = channelNameId["stackbuilders"]
    try {
        const response = await client.search.list({
            part: "snippet",
            channelId: stackbuildersChannelId,
            fields: "items/id/videoId",
            maxResults: 50,
            type:"video",
            videoDuration:"any"
        })
        return response.data["items"].map(item => item.id.videoId)
    } catch (err) {
        console.error("Error al buscar videos:", err)
        return []
    
    }
}

export  default getVideosId