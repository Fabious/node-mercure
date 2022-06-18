import EventEmitter from 'events'
import http from 'http'

const publishListener = () => {
  console.log('publish event!')
}

const subscribeListener = () => {
  console.log('subscribe event!')
}

class Hub extends EventEmitter {
  server: http.Server

  constructor() {
    super()
    console.log('init')

    this.server = http.createServer()

    this.addListener('publish', publishListener)
    this.addListener('subscribe', subscribeListener)
  }

  listen() {
    console.log('listening...')
  }

  end() {
    console.log('closing server...')
    this.server.close()
  }
}

export default Hub
