import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <nav>
        <Link href="/about">About Us</Link>
      </nav>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
