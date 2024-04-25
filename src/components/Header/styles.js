import { StyleSheet } from "react-native";
import { COLORS } from '../../colors';


export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.black,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#C7C7C7'
    },

    title: {
        fontSize: 27,
        fontWeight: 'bold',
        paddingBottom: 15,
        color: COLORS.white
    },

    logo: {
        fontStyle: 'italic',
        color: COLORS.red,
    }
})