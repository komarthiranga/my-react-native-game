import { TextInput, SafeAreaView, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enteredNumber);
    console.log(chooseNumber);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chooseNumber);
  };

  return (
    <SafeAreaView style={styles.rootScreen}>
      <SafeAreaView style={styles.title}>
        <Title title={'Guess my Number'} /> 
      </SafeAreaView>  
      <Card>
        <SafeAreaView style={styles.textContainer}>
          <Text style={styles.instructionText}>Enter a Number</Text>  
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType={"number-pad"}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.buttonsContainer}>
          <SafeAreaView style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </SafeAreaView>
          <SafeAreaView style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </SafeAreaView>
        </SafeAreaView>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    marginTop: 100
  }, 
  instructionText: {
    color: Colors.accent500,
    fontSize: 18,
    padding: 15
  },
  textContainer: {
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    margin: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  title: {
    alignItems: 'center'
  }
});

export default StartGameScreen;
