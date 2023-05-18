import { createContext, useContext, useState } from "react";
import BackDrop from "../Components/Common/MUI/BackDrop";
import Alerts from "../Components/Common/MUI/Alerts";
const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);

const BackDropContext = createContext();
export const BackDropProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <BackDropContext.Provider value={{ setIsLoading }}>
      <BackDrop isLoading={isLoading} />
      {children}
    </BackDropContext.Provider>
  );
};
export const useBackDrop = () => useContext(BackDropContext);

const AlertContext = createContext();
export const AlertProvider = ({ children }) => {
  const [alertDetails, setAlertDetails] = useState({
    message: "",
    type: "",
    isVisible: false,
  });

  const alert = (message, type = "error") => {
    setAlertDetails({
      message: message,
      type: type,
      isVisible: true,
    });
    setTimeout(() => {
      setAlertDetails({ message: "", type: "", isVisible: false });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert }}>
      <Alerts details={alertDetails} />
      {children}
    </AlertContext.Provider>
  );
};
export const useAlert = () => useContext(AlertContext);
