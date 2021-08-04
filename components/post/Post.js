import PostUpvoter from "./PostUpvoter";
import { UserVotes } from "./UserVotes";

export const Post = ({ id, title = "", url = "", votes = [] }) => {
  return (
    <div className="border border-black bg-white my-4 py-4 rounded">
      <div className="text-xl mb-6">
        <a className="capitalize" href={url} target="_blank">
          {title}
        </a>
      </div>
      <div className="flex justify-start">
        <div className="justify-start">
          <PostUpvoter id={id} />
        </div>
        <div className="mx-4 py-4 justify-end border w-full">
          <UserVotes votes={votes} />
        </div>
      </div>
    </div>
  );
};
