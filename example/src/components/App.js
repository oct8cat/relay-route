const React = require('react')
const {graphql, createFragmentContainer} = require('react-relay')
const {RelayRoute} = require('../../..')
const {Link, Redirect, Switch} = require('react-router-dom')
const {environment} = require('../relay')

const Home = require('./Home')
const About = require('./About')

const App = createFragmentContainer(({viewer, match}) => {
  return (
    <div className='ui container' style={{paddingTop: 32}}>
      <div className='ui segment'>{viewer.text}</div>
      <div className='ui top attached menu'>
        <Link className='item' to='/home'>Home</Link>
        <Link className='item' to='/about'>About</Link>
      </div>
      <div className='ui bottom attached segment'>
        <Switch>
          <RelayRoute path='/home' component={Home} environment={environment} />
          <RelayRoute path='/about' component={About} environment={environment} />
          <Redirect from='/' to='/home' />
        </Switch>
      </div>
    </div>
  )
}, graphql`
  fragment App_viewer on Viewer {
    text
  }
`)

App.query = graphql`
  query AppQuery {
    viewer {
      ...App_viewer
    }
  }
`

module.exports = App
