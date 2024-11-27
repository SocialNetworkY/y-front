import { useEffect, useState } from "react";

export const useTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(savedTheme);

    const [checked, setChecked] = useState(savedTheme === 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setChecked((prevChecked) => !prevChecked);
    };

    return { theme, toggleTheme, checked };
};
