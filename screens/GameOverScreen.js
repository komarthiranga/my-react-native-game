import { SafeAreaView, StyleSheet, Image, Text } from 'react-native';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOver = () => {
    return(
        <SafeAreaView style={styles.rootContainer}>
            <Title title={'Game Over'} />
            <SafeAreaView style={styles.imgaeContainer}>
                 <Image source={require('../assets/images/success.png')}  />
            </SafeAreaView>
            <SafeAreaView>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.heighlight}>X</Text> rounds to guess the number <Text style={styles.heighlight}>Y</Text>.</Text>
            </SafeAreaView>
            <PrimaryButton>Start New Game</PrimaryButton>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgaeContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 16,
        marginVertical: 24
    },
    heighlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})

export default GameOver;