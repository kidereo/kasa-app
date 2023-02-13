import { Platform } from "react-native";
import appColours from "./appColours";
import appFonts from "./appFonts";

export default {
  display: {
    fontSize: 60,
    lineHeight: 64,
    fontWeight: "400",
    fontFamily: Platform.OS === "android" ? appFonts.android : appFonts.ios,
    color: appColours.black,
  },
  headline: {
    fontSize: 35,
    lineHeight: 40,
    fontWeight: "400",
    fontFamily: Platform.OS === "android" ? appFonts.android : appFonts.ios,
    color: appColours.black,
  },
  title: {
    fontSize: 25,
    lineHeight: 28,
    fontWeight: "400",
    fontFamily: Platform.OS === "android" ? appFonts.android : appFonts.ios,
    color: appColours.black,
  },
  label: {
    fontSize: 18,
    //lineHeight: 20,
    fontWeight: "500",
    textTransform: "uppercase",
    fontFamily: Platform.OS === "android" ? appFonts.android : appFonts.ios,
    color: appColours.black,
  },
  body: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: Platform.OS === "android" ? appFonts.android : appFonts.ios,
    color: appColours.black,
  },
};
