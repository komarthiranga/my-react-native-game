import { TextInput, SafeAreaView, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/colors';

const StartGameScreen = ({onPickNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chooseNumber = parseInt(enteredNumber);
        console.log(chooseNumber);
        if(isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        onPickNumber(chooseNumber)
    }

    return(
        <SafeAreaView style={styles.inputContainer}>
            <SafeAreaView style={styles.textContainer}>
                <TextInput style={styles.numberInput} maxLength={2} 
                keyboardType={'number-pad'}  autoCapitalize="none" autoCorrect={false} onChangeText={numberInputHandler} value={enteredNumber} />
            </SafeAreaView>
            <SafeAreaView style={styles.buttonsContainer}>
                <SafeAreaView style={styles.buttonContainer}>
                     <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </SafeAreaView>
                <SafeAreaView style={styles.buttonContainer}>
                     <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25 
    },
    textContainer: {
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberInput: {
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1
    }
})

export default StartGameScreen;