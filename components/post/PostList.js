import { gql, useQuery, NetworkStatus } from "@apollo/client";
import PostUpvoter from "./PostUpvoter";
import {Post} from './Post';
export const ALL_LINKS_QUERY = gql`
  query allPosts {
    feed {
      count
      links {
        id
        description
        url
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
            name
          }
        }
      }
    }
  }
`;

export const allPostsQueryVars = {
  skip: 0,
  first: 10,
};

export default function PostList() {
  const {loading, data, error } = useQuery(ALL_LINKS_QUERY);
  const { feed: { count, links } = {} } = data;
  return (
    <section className="w-full container p-4">
      <div className="my-4">
        {links.map(({ id, description, url, votes}) => 
          <Post 
            key={id}
            id={id}
            title={description}
            url={url}
            votes={votes} />
      )}
      </div>
    </section>
  );
}
