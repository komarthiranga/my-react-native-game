import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOver from './screens/GameOverScreen';

export default function App() {
  const [ userNumber, setUserNumber ] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const gameOverHandler = () => {
    setGameIsOver(true);
  }


  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameHandler={gameOverHandler} />
  }

  if(gameIsOver && userNumber) {
    screen = <GameOver />
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
            <ImageBackground source={require('./assets/images/background.png')} 
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}  
            >
                {screen}
            </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
    rootScreen: {
      flex: 1
    },
    backgroundImage: {
      opacity: 0.15
    }
});
