import Footer from './components/Footer';
import Head from 'next/head';
import Header from './components/Header';
import { Inter } from '@next/font/google';
import Welcome from './screens/Welcome';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Baseej</title>
        <meta name="Baseej" content="Generated by Tanveer Hussain Mir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Welcome />
      <Footer />
    </>
  );
}
