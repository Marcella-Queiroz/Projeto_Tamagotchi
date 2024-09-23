import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

interface JogoDaVelhaProps {
  navigateToHome: () => void;
}

const JogoDaVelha: React.FC<JogoDaVelhaProps> = ({ navigateToHome }) => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isComputerTurn, setIsComputerTurn] = useState(false);

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      Alert.alert(`Vencedor: ${winner}`, '', [{ text: 'OK', onPress: navigateToHome }]);
    } else if (board.every(square => square !== null)) {
      Alert.alert('Empate', '', [{ text: 'OK', onPress: navigateToHome }]);
    } else if (isComputerTurn) {
      const timer = setTimeout(makeComputerMove, 1000);
      return () => clearTimeout(timer);
    }
  }, [board, isComputerTurn]);

  const handlePress = (index: number) => {
    if (board[index] || calculateWinner(board) || !isXNext) return;

    const newBoard = board.slice();
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
    setIsComputerTurn(true);
  };

  const makeComputerMove = () => {
    const newBoard = board.slice();
    const availableSquares = newBoard.map((value, index) => value === null ? index : null).filter(value => value !== null);

    if (availableSquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableSquares.length);
      newBoard[availableSquares[randomIndex] as number] = 'O';
      setBoard(newBoard);
      setIsXNext(true);
      setIsComputerTurn(false);
    }
  };

  const calculateWinner = (squares: Array<string | null>) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const status = `Próximo jogador: ${isXNext ? 'X' : 'O'}`;

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.board}>
        {board.map((value, index) => (
          <TouchableOpacity key={index} style={styles.square} onPress={() => handlePress(index)}>
            <Text style={styles.squareText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={navigateToHome} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  status: {
    fontSize: 24,
    marginBottom: 20,
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  square: {
    width: '33.33%',
    height: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  squareText: {
    fontSize: 36,
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default JogoDaVelha;
