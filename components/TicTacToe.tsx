import { useState } from 'react';
import { calculateWinner } from '../games/ticTacToeLogic';

export type Player = 'X' | 'O';
export type Square = Player | null;

const initialBoard: Square[] = Array(9).fill(null);

export default function TicTacToe() {
  const [board, setBoard] = useState<Square[]>(initialBoard);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(Boolean);

  function handleClick(index: number) {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setBoard(initialBoard);
    setXIsNext(true);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-2 mb-4">
        {board.map((square, i) => (
          <button
            key={i}
            className="w-20 h-20 bg-white border-2 border-gray-300 rounded-lg text-2xl font-bold flex items-center justify-center shadow hover:bg-gray-100 transition"
            onClick={() => handleClick(i)}
            aria-label={`Square ${i + 1}`}
            disabled={!!square || !!winner}
          >
            {square}
          </button>
        ))}
      </div>
      <div className="mb-4 text-lg">
        {winner ? (
          <span className="text-green-600 font-semibold">Winner: {winner}</span>
        ) : isDraw ? (
          <span className="text-yellow-600 font-semibold">Draw!</span>
        ) : (
          <span>Next: <span className="font-semibold">{xIsNext ? 'X' : 'O'}</span></span>
        )}
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
