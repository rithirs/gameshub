import Head from 'next/head';
import TicTacToe from '../components/TicTacToe';

export default function TicTacToePage() {
  return (
    <div className="flex flex-col items-center min-h-screen py-8">
      <Head>
        <title>Tic-Tac-Toe | GamesHub</title>
        <meta name="description" content="Play Tic-Tac-Toe online!" />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Tic-Tac-Toe</h1>
      <TicTacToe />
    </div>
  );
}
