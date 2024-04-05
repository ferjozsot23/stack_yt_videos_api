import { google } from "googleapis"
import { api_key_secret } from "../config.js"

const api_version = "v3"
const api_key = api_key_secret

const client = google.youtube({
    version: api_version,
    auth: api_key,
})

export default client