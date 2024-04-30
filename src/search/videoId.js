import { client } from "../api/client.js"
import {
    CHANNEL_ID,
    MAX_RESULTS,
    PART,
    FIELDS,
    TYPE,
    VIDEO_DURATION,
} from "../utils/constants.js"

export async function getChannelVideosId() {
    try {
        const response = await client.search.list({
            part: PART,
            channelId: CHANNEL_ID,
            fields: FIELDS,
            maxResults: MAX_RESULTS,
            type: TYPE,
            videoDuration: VIDEO_DURATION,
        })

        if (
            !response ||
            !response.data ||
            !response.data.items ||
            response.data.items.length === 0
        ) {
            throw new Error("No videos found for the specified channel ID")
        }

        return response.data.items.map((item) => item.id.videoId)
    } catch (err) {
        if (err.response && err.response.status === 403) {
            throw new Error(
                "Access forbidden. Please check your API key or channel ID."
            )
        } else if (err.response && err.response.status === 400) {
            throw new Error(
                "Bad request. Please ensure the request parameters are correct."
            )
        } else if (err.response && err.response.status === 404) {
            throw new Error(
                "Channel not found. Please ensure the provided channel ID is correct."
            )
        } else {
            throw new Error(
                "Error fetching videos from the API for the specified channel ID: " +
                    err.message
            )
        }
    }
}
