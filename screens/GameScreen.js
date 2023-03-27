import { Text, SafeAreaView, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameHandler}) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect( () => {
        if(currentGuess === userNumber) {
            onGameHandler();
        }
    }, [currentGuess, userNumber, onGameHandler] )

    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && currentGuess < userNumber) || 
           (direction === 'greater' && currentGuess > userNumber)) {
            console.log("I am innn");
            Alert.alert("Don't lie!", "you know that this is Wrong...", [{text: 'Sorry', style: 'cancel'}])
            return;
        }

        if(direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <SafeAreaView style={styles.screen}>
            <Title title={"Oppnent's Guess"} /> 
            <NumberContainer>{currentGuess}</NumberContainer>
            <SafeAreaView style={styles.actionsContainer}>
                <Text style={styles.text}> Higher or Lower ? </Text>
                <SafeAreaView style={styles.buttonsContainer}>
                    <SafeAreaView style={styles.buttonContainer}>
                         <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </SafeAreaView>
                    <SafeAreaView style={styles.buttonContainer}> 
                         <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </SafeAreaView>
                </SafeAreaView> 
            </SafeAreaView> 
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 40
    },
    actionsContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        margin: 16
    },
    buttonContainer: {
        flex: 1
    },
    text: {
        color: 'white',
        fontSize: 16
    }
})

export default GameScreen;