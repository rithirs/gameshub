import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      <Head>
        <title>GamesHub</title>
        <meta name="description" content="Play simple games like Tic-Tac-Toe online!" />
      </Head>
      <h1 className="text-4xl font-bold mb-4">GamesHub</h1>
      <p className="mb-8 text-lg text-gray-600">A collection of simple games built with Next.js, TypeScript, and TailwindCSS.</p>
      <div className="space-y-4">
        <Link href="/tic-tac-toe" className="block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Play Tic-Tac-Toe</Link>
      </div>
    </div>
  );
}
