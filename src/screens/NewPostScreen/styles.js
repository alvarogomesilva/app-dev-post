import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404349'
    },

    input: {
        backgroundColor: 'transparent',
        margin: 10,
        color: COLORS.white,
        fontSize: 22,
    },

    button: {
        marginRight: 7,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: COLORS.white,
        fontSize: 16
    }
})