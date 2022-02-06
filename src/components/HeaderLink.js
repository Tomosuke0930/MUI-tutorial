import * as React from "react";
import { Link } from "@mui/material";

export default function HeaderLink() {
  return (
    <div>
      {window.location.href === "" ? (
        <div>
          <Link href="" sx={{ color: "error.main" }}>
            Go To Home
          </Link>
        </div>
      ) : (
        <span>
          <Link href="/1/" sx={{ color: "error.main" }}>
            Go To Las Vegas
          </Link>
        </span>
      )}
    </div>
  );
}
