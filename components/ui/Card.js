
import { SafeAreaView, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
const Card = ({children}) => {
    return(
        <SafeAreaView style={styles.inputContainer}>
            {children}
        </SafeAreaView>     
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 20,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
});

export default Card;