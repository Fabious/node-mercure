import Hub from '../hub'

describe('Mercure hub', () => {
  it('publishes updates', () => {
    const mercureHub = new Hub()

    mercureHub.emit('publish')

    mercureHub.listen()
    mercureHub.end()
  })
})
