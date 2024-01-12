import { ReactNode } from "react";
import { Link } from "react-router-dom";

function Button({
  children,
  disabled,
  to,
}: {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
}) {
    const className =  "rounded-lg bg-yellow-400 px-4 py-2 font-semibold uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed"
  if (to) {
    return <Link to={to} className={className}>{children}</Link>;
  }
  return (
    <button
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
