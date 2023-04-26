import Layout from '@/components/Layout'

const AboutPage = () => {
  return (
    <Layout title="About Vegan Code">
      <h1 className="text-5xl border-b-4 pb-5 font-bold">About</h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">Benjahmin's recommended books</h3>
        <img src="../images/headshot.jpeg" />
        <h5>
          This site is a curated list of some of my favorite books from the last
          few years. I hope you enjoy any or all of them as much as I do!<br/>
          <span className='font-bold'>Know Better, Do Better</span>
        </h5>
        <p className="mb-3">This site is built with Next.js and Markdown</p>
        <p>
          <span className="font-bold">Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  );
}

export default AboutPage
