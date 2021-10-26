import color from "./color";
import { Platform } from "react-native";

export default {
    color,
    text: {
        color: color.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avebir"
    }

}