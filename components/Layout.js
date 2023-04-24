/** @format */

import Head from "next/head";
import Header from "./Header"

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto my-7" >{children}</main>
    </div>
  );
};

Layout.defaultProps = {
    title: "Welcome to blog_site",
    keywords: "development, coding, vegan",
    description: "The best blog site about web dev and veganism"
}

export default Layout;
