import { Link } from "gatsby";
import * as React from "react";

const Layout: React.FC = ({ children }) => (
  <>
    <header className="bg-blue-800 p-4 text-white">
      <Link to="/" className="text-2xl">
        Blog Demo
      </Link>
    </header>
    <main className="p-5">{children}</main>
  </>
);

export default Layout;
