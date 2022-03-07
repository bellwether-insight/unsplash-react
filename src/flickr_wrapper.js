import Flickr from "flickr-sdk"

export default class FlickrWrapper {
  constructor({ accessKey }) {
    this.flickr = new Flickr(accessKey)
  }

  listPhotos = (page, perPage, sort = "interestingness-desc") => {
    return "hello"
  }
}