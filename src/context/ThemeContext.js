import { createContext, useState, useEffect, useContext} from "react";

// Context'i oluşturuyoruz
const ThemeContext = createContext();

// Context'in gerçekleştirmesini oluşturuyoruz
export const ThemeProvider = ({children}) =>{

    //Context'imizde bir State oluşturuyoruz
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])

    const values = {
        theme,
        setTheme,
    };

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
}

export const useTheme = ()=>  useContext(ThemeContext);