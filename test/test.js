
import { assert } from 'chai';

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

describe("getNewestVideos", function () {
  it("should return the top 5 newest videos", function () {
      const result = getNewestVideos(fixtureData);
      assert.isArray(result, "Result should be an array");
      assert.lengthOf(result, 5, "Result should have length 5");
  });
});

describe("getTotalLikes", function () {
  it("should return the total number of likes of all videos", function () {
      const result = getTotalLikes(fixtureData);
      assert.isNumber(result, "Result should be a number");
  });
});

describe("getTopViewedVideos", function () {
  it("should return the top 5 videos with the most views", function () {
      const result = getTopViewedVideos(fixtureData);
      assert.isArray(result, "Result should be an array");
      assert.lengthOf(result, 5, "Result should have length 5");
  });
});