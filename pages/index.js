import Head from "next/head";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-base-content">
      <Head>
        <title>Book Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center min-h-screen w-full">
          <Header />
          <Banner />
        </div>
      </main>

      <footer className="flex"></footer>
    </div>
  );
}
