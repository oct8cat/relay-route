const {Environment, Network, Store, RecordSource} = require('relay-runtime')

const store = new Store(new RecordSource())

const fetchQuery = () => Promise.resolve({
  data: {
    viewer: {
      text: 'This is some global viewer text',
      home: {
        text: 'This is home page text'
      },
      about: {
        text: 'This is about page text'
      }
    }
  }
})

const network = Network.create(fetchQuery)

const environment = new Environment({network, store})

module.exports = {
  environment
}
