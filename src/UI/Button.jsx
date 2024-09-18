import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const className =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:bg-yellow-300 disabled:cursor-not-allowed";
  const base =
    "inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    round: base + " px-2.5 py-1 md:px-3 md:py-1 text-sm",
    small: base + " py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      " mx-2 border-2 border-stone-300 inline-block rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
