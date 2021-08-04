import { UserIcon } from "./UserIcon";

export const UserVotes = ({ votes = [] }) => {
    const displayVotes = votes.slice(0, 3);
    const remainingVotes = votes.length > 3 ? votes.length - 3 : null;
    if (!displayVotes.length) return <p>no upvotes</p>
    return (
        <div className="flex justify-start px-2">
            <div className="inline">
                {displayVotes.map(({ user = {}}) => <UserIcon key={user.id} name={user.name} />)}
            </div>            
            {remainingVotes && <p className="text-sm ml-2">{`...${remainingVotes} remaining votes`}</p>}
        </div>
    ) 
}