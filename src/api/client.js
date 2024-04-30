import { google } from "googleapis"
import dotenv from "dotenv"

dotenv.config()

const API_VERSION = "v3"
const API_KEY = process.env.YOUTUBE_API_KEY

export const client = google.youtube({
    version: API_VERSION,
    auth: API_KEY,
})


