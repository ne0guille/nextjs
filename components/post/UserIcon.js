export const UserIcon = ({ name = '' }) => {
    const initialLetter = name.charAt(0);

    if (!initialLetter) return null;

    return (
        <span className="border rounded-full bg-blue-200 w-8 py-2 px-3">
            {initialLetter}
        </span>
    ) 
}