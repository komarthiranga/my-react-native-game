import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Title from '../components/Title';
const GameScreen = () => {

    return (
        <SafeAreaView style={styles.screen}>
            <Title title={"Oppnent's Guess"} /> 

            <SafeAreaView>
                <Text> Higher or Lower ? </Text>
            </SafeAreaView> 
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 40
    },
})

export default GameScreen;