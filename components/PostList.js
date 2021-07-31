import { gql, useQuery, NetworkStatus } from '@apollo/client'
import ErrorMessage from './ErrorMessage'
import PostUpvoter from './PostUpvoter'

export const ALL_POSTS_QUERY = gql`
  query allPosts {
   feed {
     count
   }
  }
`

export const allPostsQueryVars = {
  skip: 0,
  first: 10,
}

export default function PostList() {

  return (
    <section>
      <ul>asd
        </ul>
   
    </section>
  )
}
