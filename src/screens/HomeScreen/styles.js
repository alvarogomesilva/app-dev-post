import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black
    },


    button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.dark,
        zIndex: 99
    },

    icon: {
        fontSize: 24,
        color: COLORS.white
    },

    flatlist: {
        flex: 1,
        backgroundColor: COLORS.white
    }

})