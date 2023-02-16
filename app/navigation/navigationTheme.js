import { DefaultTheme } from "@react-navigation/native";

import globalStyles from "../config/appStyles";

const appNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: globalStyles.colours.primary,
    background: globalStyles.colours.white,
  },
};

export default appNavigationTheme;
