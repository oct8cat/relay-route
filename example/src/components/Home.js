const React = require('react')
const {graphql, createFragmentContainer} = require('react-relay')

const Home = createFragmentContainer(({viewer}) => {
  return (
    <div>
      <h1>Home</h1>
      <p>{viewer.home.text}</p>
    </div>
  )
}, graphql`
  fragment Home_viewer on Viewer {
    home {
      text
    }
  }
`)

Home.query = graphql`
  query HomeQuery {
    viewer {
      ...Home_viewer
    }
  }
`

module.exports = Home
