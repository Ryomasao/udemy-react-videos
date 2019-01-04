import axios from 'axios'

const KEY = 'AIzaSyDG0CMt9Jx3w8KpznZI593uqImArtW_7_E'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
})
