// src/pages/index.tsx

import React from "react";
import Head from "next/head";
import Link from "next/link"; // Import Link from next.js
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
