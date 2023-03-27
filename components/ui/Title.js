import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const Title = ({title}) => {
    return(
        <Text style={styles.title}>{title}</Text>  
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
})

export default Title;