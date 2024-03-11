"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
  };

	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onClick={toggleTheme}
			style={{
				background: 'transparent',
				border: 'none',
				cursor: 'pointer',
			}}
		>
			<motion.div
				animate={{ rotate: theme === "dark" ? 180 : 0 }}
				transition={{ duration: 0.5 }}
				className="text-lg"
			>
				{theme === "dark" ? '🌜' : '🌞'}
			</motion.div>
		</motion.button>
	);
};