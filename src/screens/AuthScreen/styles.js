import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: COLORS.white,
        fontSize: 55,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },

    input: {
        backgroundColor: COLORS.white,
        width: '80%',
        marginTop: 10,
        padding: 12,
        borderRadius: 5,
        fontSize: 18
    },

    button: {
        backgroundColor: COLORS.red,
        width: '80%',
        padding: 15,
        marginTop: 12,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: '600'
    },

    link: {
        width: '80%',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    linkText: {
        color: COLORS.white,
        fontSize: 16
    }
})