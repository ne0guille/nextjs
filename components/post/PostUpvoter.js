import { gql, useMutation } from '@apollo/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const UPVOTE_POST_MUTATION = gql`
  mutation vote($linkId: ID!) {
    vote(linkId: $linkId) {
      id
    }
  }
`

export default function PostUpvoter({ isEnabled, onVote, id }) {
  const [upvotePost, { loading }] = useMutation(UPVOTE_POST_MUTATION);

  const handleClick = () => {
    upvotePost({
      variables: {
        linkId: id,
      }
    })
  }

  return (
    <div className="inline-flex justify-start text-4xl mx-4">
      <button disabled={loading} onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  )
}
