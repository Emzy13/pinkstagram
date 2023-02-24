import Head from 'next/head'
import Pagina from "../components/Pagina"


 export default function Home()  {
  return (
    <div className="bg-pink-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Pinkstagram by Emzy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Feed */}
      <Pagina />
      {/*Modal */}
    </div>
  );
}

