import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({children}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
            borderWidth: 4,
            borderColor: Colors.accent500,
            padding: 24,
            margin: 24,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center'
    },

    numberText: {
        padding: 24,
        color: Colors.accent500,
        fontSize: 36,
        // fontWeight: 'bold'
        fontFamily: 'open-sans-bold'
    }

})

export default NumberContainer;