"use client";

import styled from "styled-components";
import COLORS from "@/data/colors";
import Link from "next/link";

const Cont = styled.div`
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

const Navbar = () => {
  return (
    <Cont colors={COLORS}>
      <div className="flex align-center">
        <Link href="/" className="link">
          <h3>Dog Facts</h3>
        </Link>
      </div>
      <div className="flex align-center">
        <Link href="/photos" className="mar-right-16 link">
          <h5>Photos</h5>
        </Link>
        <Link href="/facts" className="link">
          <h5>Facts</h5>
        </Link>
      </div>
    </Cont>
  );
};

export default Navbar;
