import React, { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }: { children: ReactNode; to: string }) {
    const navigate = useNavigate();

    const className = "text-sm text-blue-500 hover:text-blue-800 hover:underline"
    if(to === "-1"){
        return (
            <button onClick={()=> navigate(-1)} className={className}>
                {children}
            </button>
        )
    }

  return (
    <Link
      to={to}
      className={className}
    >
      &larr; {children}
    </Link>
  );
}

export default LinkButton;
