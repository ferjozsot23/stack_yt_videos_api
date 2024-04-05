import assert from "assert"
import {
    getTopLikedVideos,
    getNewestVideos,
    getTotalLikes,
    getTopViewedVideos,
} from "../calculation/calculation.js"

import fixtureData from "../fixture/data.js"

describe("getTopLikedVideos", function () {
    it("return the top 5 videos with the most likes", function () {
        const result = getTopLikedVideos(fixtureData)
        assert.isArray(result, "Result should be an array")
        assert.lengthOf(result, 5, "Result should have length 5")       
    })
})
