import { useSelector } from "react-redux";

function userName() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const username = useSelector((state) => state.user.username);
  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default userName;
