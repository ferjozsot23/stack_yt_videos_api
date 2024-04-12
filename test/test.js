import { assert } from "chai"

import {
    getTopLikedVideos,
    getNewestVideos,
    getTotalLikes,
    getTopViewedVideos,
} from "../src/calculation/calculation.js"

import fixtureData from "./fixtures/youtubeData.js"

describe("getTopLikedVideos", () => {
    describe("when receiving valid data", () => {
        it("returns an array", () => {
            const result = getTopLikedVideos(fixtureData)
            assert.isArray(result, "Result is an array")
        })

        it("returns an array with length 5", () => {
            const result = getTopLikedVideos(fixtureData)
            assert.lengthOf(result, 5, "Result have length 5")
        })

        it("returns an array with the top 5 videos with the most likes", () => {
            const result = getTopLikedVideos(fixtureData)

            const expectedVideoIds = [
                "wqFzBIHh_I4",
                "Zssas2Pop8k",
                "X0WwRoEfzRc",
                "lyOuWqp3r3U",
                "BUYGO5ksvoo",
            ]
            const returnedVideoIds = result.map((video) => video.videoId)

            assert.sameMembers(
                returnedVideoIds,
                expectedVideoIds,
                "Returned video IDs match expected video IDs"
            )
        })
    })

    describe("when it receives an empty array", () => {
        it("returns an empty array", () => {
            const result = getTopLikedVideos([])
            assert.deepEqual(result, [])
        })
    })

    describe("when it receives null", () => {
        it("returns an empty array", () => {
            const result = getTopLikedVideos(null)
            assert.deepEqual(result, [])
        })
    })

    describe("when it receives undefined", () => {
        it("returns an empty array", () => {
            const result = getTopLikedVideos(undefined)
            assert.deepEqual(result, [])
        })
    })
    describe("when receiving data that is not an array", () => {
        it("returns an empty array", () => {
            const result = getTopLikedVideos("not an array")
            assert.deepEqual(result, [])
        })
    })
})

//****************************************************** */
describe("getNewestVideos", () => {
    describe("when receiving valid data", () => {
        it("returns an array", () => {
            const result = getNewestVideos(fixtureData)
            assert.isArray(result, "Result is an array")
        })

        it("returns an array with length 5", () => {
            const result = getNewestVideos(fixtureData)
            assert.lengthOf(result, 5, "Result have length 5")
        })
        it("returns an array with the newest videos", () => {
            const result = getNewestVideos(fixtureData)

            const expectedVideoIds = [
                "S9ZlUR9MrmM",
                "aRvpwr5ntKc",
                "9yeQ5JHluzg",
                "X0WwRoEfzRc",
                "wqFzBIHh_I4",
            ]
            const returnedVideoIds = result.map((video) => video.videoId)
            assert.sameMembers(
                returnedVideoIds,
                expectedVideoIds,
                "Returned video IDs match expected video IDs"
            )
        })
    })

    describe("when it receives an empty array", () => {
        it("returns an empty array", () => {
            const result = getNewestVideos([])
            assert.deepEqual(result, [])
        })
    })

    describe("when it receives null", () => {
        it("returns an empty array", () => {
            const result = getNewestVideos(null)
            assert.deepEqual(result, [])
        })
    })

    describe("when it receives undefined", () => {
        it("returns an empty array", () => {
            const result = getNewestVideos(undefined)
            assert.deepEqual(result, [])
        })
    })
    describe("when receiving data that is not an array", () => {
        it("returns an empty array", () => {
            const result = getNewestVideos("not an array")
            assert.deepEqual(result, [])
        })
    })
})

//****************************************************** */
describe("getTotalLikes", () => {
    describe("when receiving valid data", () => {
        it("returns a number", () => {
            const result = getTotalLikes(fixtureData)
            assert.isNumber(result, "Result is a number")
        })
        it("returns the total number of likes of all videos", () => {
            const result = getTotalLikes(fixtureData)
            const expectedTotalLikes = 56
            assert.equal(
                result,
                expectedTotalLikes,
                "Total likes match expected total likes"
            )
        })
    })

    describe("when it receives an empty array", () => {
        it("returns 0", () => {
            const result = getTotalLikes([])
            assert.strictEqual(result, 0, "Result is 0")
        })
    })

    describe("when it receives null", () => {
        it("returns 0", () => {
            const result = getTotalLikes(null)
            assert.strictEqual(result, 0, "Result is 0")
        })
    })

    describe("when it receives undefined", () => {
        it("returns 0", () => {
            const result = getTotalLikes(undefined)
            assert.strictEqual(result, 0, "Result is 0")
        })
    })
    describe("when receiving data that is not an array", () => {
        it("returns an empty array", () => {
            const result = getTotalLikes("not an array")
            assert.strictEqual(result, 0)
        })
    })
})

//****************************************************** */
describe("getTopViewedVideos", () => {
    describe("when receiving valid data", () => {
        it("returns an array", () => {
            const result = getTopViewedVideos(fixtureData)
            assert.isArray(result, "Result is an array")
        })

        it("returns an array with length 5", () => {
            const result = getTopViewedVideos(fixtureData)
            assert.lengthOf(result, 5, "Result have length 5")
        })
        it("returns an array with the top viewed videos", () => {
            const result = getTopViewedVideos(fixtureData)

            const expectedVideoIds = [
                "aRvpwr5ntKc",
                "S9ZlUR9MrmM",
                "BUYGO5ksvoo",
                "lyOuWqp3r3U",
                "9yeQ5JHluzg",
            ]

            const returnedVideoIds = result.map((video) => video.videoId)

            assert.sameMembers(
                returnedVideoIds,
                expectedVideoIds,
                "Returned video IDs should match expected video IDs"
            )
        })
    })

    describe("when it receives an empty array", () => {
        it("returns an empty array", () => {
            const result = getTopViewedVideos([])
            assert.deepEqual(result, [])
        })
    })

    describe("when it receives null", () => {
        it("returns an empty array", () => {
            const result = getTopViewedVideos(null)
            assert.deepEqual(result, [])
        })
    })

    describe("when it receives undefined", () => {
        it("returns an empty array", () => {
            const result = getTopViewedVideos(undefined)
            assert.deepEqual(result, [])
        })
    })
    describe("when receiving data that is not an array", () => {
        it("returns an empty array", () => {
            const result = getTopViewedVideos("not an array")
            assert.deepEqual(result, [])
        })
    })
})
