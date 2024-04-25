import { StyleSheet } from "react-native";
import { COLORS } from "../../colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.8,
        backgroundColor: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
    }
})