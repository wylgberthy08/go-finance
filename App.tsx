import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Dashboard } from "./src/screens/Dashboard";
import theme from "./src/global/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins_400": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins_500": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins_700": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
