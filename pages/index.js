import App from '../components/App'
import PostList, {
  ALL_LINKS_QUERY,
  allPostsQueryVars,
} from '../components/post/PostList'
import { initializeApollo, addApolloState } from '../lib/apolloClient'

const IndexPage = () => {
  return (
    <App>
      <PostList />
    </App>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_LINKS_QUERY,
    variables: allPostsQueryVars,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  })
}

export default IndexPage
