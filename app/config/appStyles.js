import { Platform } from "react-native";
import appColours from "./appColours";
import appFonts from "./appFonts";

export default {
  colours: appColours,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? appFonts.android : appFonts.ios,
    color: appColours.black,
  },
};
