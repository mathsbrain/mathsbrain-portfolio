"use client";

import { ThemeSwitcher } from "@/components";
import { Hamburger, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavAnimationProps = {
	width: number;
	height: number;
	top: number;
	left: number;
};

const menuVars = {
	initial: {
		scaleY: 0
	},
	animate: {
		scaleY: 1,
		transition: {
			duration: 0.5,
			ease: [0.12, 0, 0.39, 0]
		}
	},
	exit: {
		scaleY: 0,
		transition: {
			delay: 0.75,
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1]
		}
	}
};

const mobileLinkVars = {
	initial: {
		y: "30vh",
		transition: {
			duration: 0.5,
			ease: [0.37, 0, 0.63, 1]
		}
	},
	open: {
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0, 0.55, 0.45, 1]
		}
	}
};

const containerVars = {
	initial: {
		transition: {
			staggerChildren: 0.09,
			staggerDirection: -1
		}
	},
	open: {
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.09,
			staggerDirection: 1
		}
	}
};

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [navAnimation, setNavAnimation] = useState<NavAnimationProps>();
	const [navAnimationOpacity, setNavAnimationOpacity] = useState(0);
	const [mounted, setMounted] = useState(false);

	const { theme } = useTheme();

	const homeRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const experienceRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		setIsOpen((prevOpen) => !prevOpen);
	};

	const handleAnimationNav = ({ witch }: { witch: "home" | "about" | "experience" | "skills" | "projects" | "contact" }) => {
		if (witch === "home") {
			if (!homeRef.current) return;

			const { width, height, top, left } = homeRef.current.getBoundingClientRect();

			setNavAnimation({
				width,
				height,
				left,
				top
			});

			setNavAnimationOpacity(1);
		}

		if (witch === "about") {
			if (!aboutRef.current) return;

			const { width, height, top, left } = aboutRef.current.getBoundingClientRect();

			setNavAnimation({
				width,
				height,
				left,
				top
			});

			setNavAnimationOpacity(1);
		}

		if (witch === "skills") {
			if (!skillsRef.current) return;

			const { width, height, top, left } = skillsRef.current.getBoundingClientRect();

			setNavAnimation({
				width,
				height,
				left,
				top
			});

			setNavAnimationOpacity(1);
		}

		if (witch === "experience") {
			if (!experienceRef.current) return;

			const { width, height, top, left } = experienceRef.current.getBoundingClientRect();

			setNavAnimation({
				width,
				height,
				left,
				top
			});

			setNavAnimationOpacity(1);
		}

		if (witch === "projects") {
			if (!projectsRef.current) return;

			const { width, height, top, left } = projectsRef.current.getBoundingClientRect();

			setNavAnimation({
				width,
				height,
				left,
				top
			});

			setNavAnimationOpacity(1);
		}

		if (witch === "contact") {
			if (!contactRef.current) return;

			const { width, height, top, left } = contactRef.current.getBoundingClientRect();

			setNavAnimation({
				width,
				height,
				left,
				top
			});

			setNavAnimationOpacity(1);
		}
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<header className="fixed w-full top-0 py-5 px-8 lg:px-16 flex items-center justify-between shadow-md bg-[#f9f9f9] dark:bg-[#181210] z-50">
			<h1 className="flex gap-4 items-center font-semibold text-lg">
				<svg width="40" height="40" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M43.0117 65.3051C44.8036 65.3051 46.5955 66.4333 46.5955 68.8225C46.5955 71.1454 44.8036 72.34 43.0117 72.34C41.2198 72.34 39.4279 71.1454 39.4279 68.8225C39.4279 66.4333 41.2198 65.3051 43.0117 65.3051Z" fill={`${theme === "light" ? "#181210" : "#f9f9f9"}`}/>
					<path d="M45.2683 59.9297H40.7553C40.158 59.9297 39.627 59.4651 39.627 58.8014V48.6472C39.627 48.0499 40.0916 47.519 40.7553 47.519H55.2234C56.0198 47.519 56.6171 46.9217 56.6171 46.1253C56.6171 45.3289 56.0198 44.7316 55.2234 44.7316H18.0577C14.2083 44.7316 10.6909 42.1433 9.89447 38.2939C8.8326 33.0509 12.8146 28.4716 17.8586 28.4716H62.9883C63.7847 28.4716 64.382 27.8743 64.382 27.0779C64.382 26.2815 63.7847 25.6842 62.9883 25.6842H9.29717C5.44786 25.6842 1.9304 23.0958 1.13399 19.2465C0.00574315 14.1362 3.98778 9.55689 9.0317 9.55689H54.2942C55.0906 9.55689 55.6879 8.95959 55.6879 8.16318C55.6879 7.36677 55.0906 6.76947 54.2942 6.76947H19.7168C19.1195 6.76947 18.5886 6.3049 18.5886 5.64122V1.12824C18.5886 0.530939 19.0532 0 19.7168 0H54.0951C57.9444 0 61.4619 2.58833 62.2583 6.43763C63.3202 11.6806 59.3381 16.26 54.2942 16.26H9.0317C8.23529 16.26 7.63798 16.8573 7.63798 17.6537C7.63798 18.4501 8.30166 19.0474 9.0317 19.0474H62.7229C66.5722 19.0474 70.0896 21.6357 70.886 25.4851C71.9479 30.7281 67.9659 35.3074 62.922 35.3074H17.7922C16.9958 35.3074 16.3985 35.9047 16.3985 36.7011C16.3985 37.4975 16.9958 38.0285 17.7922 38.0285H54.9579C58.8072 38.0285 62.3247 40.6168 63.1211 44.4661C64.1829 49.7091 60.2009 54.2885 55.157 54.2885H47.1265C46.7283 54.2885 46.3965 54.6203 46.3965 55.0185V58.8678C46.3301 59.4651 45.8656 59.9297 45.2683 59.9297Z" fill={`${theme === "light" ? "#181210" : "#f9f9f9"}`}/>
				</svg>

				Matheus Antunes
			</h1>

			<nav className="items-center gap-14 hidden lg:flex">
				<div className="flex gap-5 relative" onMouseLeave={() => setNavAnimationOpacity(0)}>
					<div
						className={`fixed transition-all duration-500 rounded -z-10 bg-gray-300 dark:bg-stone-600`}
						style={{
							width: navAnimation?.width,
							height: navAnimation?.height,
							top: navAnimation?.top,
							left: navAnimation?.left,
							opacity: navAnimationOpacity
						}}
					></div>

					<div className="py-1.5 px-5 cursor-pointer" ref={homeRef} onMouseOver={() => handleAnimationNav({ witch: "home" })}>
						<Link href="#home">Home</Link>
					</div>
					<div className="py-1.5 px-5 cursor-pointer" ref={aboutRef} onMouseOver={() => handleAnimationNav({ witch: "about" })}>
						<Link href="#about">Sobre</Link>
					</div>
					<div className="py-1.5 px-5 cursor-pointer" ref={skillsRef} onMouseOver={() => handleAnimationNav({ witch: "skills" })}>
						<Link href="#skills">Skills</Link>
					</div>
					<div className="py-1.5 px-5 cursor-pointer" ref={experienceRef} onMouseOver={() => handleAnimationNav({ witch: "experience" })}>
						<Link href="#experiences">Experiências</Link>
					</div>
					<div className="py-1.5 px-5 cursor-pointer" ref={projectsRef} onMouseOver={() => handleAnimationNav({ witch: "projects" })}>
						<Link href="#projects">Projetos</Link>
					</div>
					<div className="py-1.5 px-5 cursor-pointer" ref={contactRef} onMouseOver={() => handleAnimationNav({ witch: "contact" })}>
						<Link href="#contact">Contato</Link>
					</div>
				</div>

				<ThemeSwitcher />
			</nav>

			<div className="flex gap-5 lg:hidden">
				<ThemeSwitcher />

				<Hamburger size={32} onClick={toggleMenu} className="cursor-pointer" />
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={menuVars}
						initial="initial"
						animate="animate"
						exit="exit"
						className="fixed left-0 top-0 origin-top w-full h-screen bg-stone-900 text-gray-100 p-10 flex items-center justify-center"
					>
						<div className="px-10 pt-5 pb-6 flex flex-col items-center justify-between">
							<div
								className="flex items-center justify-between w-fit absolute top-10 left-5"
								onClick={toggleMenu}
							>
								<Link href="/" className="font-semibold text-lg flex gap-5">
									<svg width="40" height="40" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M43.0117 65.3051C44.8036 65.3051 46.5955 66.4333 46.5955 68.8225C46.5955 71.1454 44.8036 72.34 43.0117 72.34C41.2198 72.34 39.4279 71.1454 39.4279 68.8225C39.4279 66.4333 41.2198 65.3051 43.0117 65.3051Z" fill="#f9f9f9" />
										<path d="M45.2683 59.9297H40.7553C40.158 59.9297 39.627 59.4651 39.627 58.8014V48.6472C39.627 48.0499 40.0916 47.519 40.7553 47.519H55.2234C56.0198 47.519 56.6171 46.9217 56.6171 46.1253C56.6171 45.3289 56.0198 44.7316 55.2234 44.7316H18.0577C14.2083 44.7316 10.6909 42.1433 9.89447 38.2939C8.8326 33.0509 12.8146 28.4716 17.8586 28.4716H62.9883C63.7847 28.4716 64.382 27.8743 64.382 27.0779C64.382 26.2815 63.7847 25.6842 62.9883 25.6842H9.29717C5.44786 25.6842 1.9304 23.0958 1.13399 19.2465C0.00574315 14.1362 3.98778 9.55689 9.0317 9.55689H54.2942C55.0906 9.55689 55.6879 8.95959 55.6879 8.16318C55.6879 7.36677 55.0906 6.76947 54.2942 6.76947H19.7168C19.1195 6.76947 18.5886 6.3049 18.5886 5.64122V1.12824C18.5886 0.530939 19.0532 0 19.7168 0H54.0951C57.9444 0 61.4619 2.58833 62.2583 6.43763C63.3202 11.6806 59.3381 16.26 54.2942 16.26H9.0317C8.23529 16.26 7.63798 16.8573 7.63798 17.6537C7.63798 18.4501 8.30166 19.0474 9.0317 19.0474H62.7229C66.5722 19.0474 70.0896 21.6357 70.886 25.4851C71.9479 30.7281 67.9659 35.3074 62.922 35.3074H17.7922C16.9958 35.3074 16.3985 35.9047 16.3985 36.7011C16.3985 37.4975 16.9958 38.0285 17.7922 38.0285H54.9579C58.8072 38.0285 62.3247 40.6168 63.1211 44.4661C64.1829 49.7091 60.2009 54.2885 55.157 54.2885H47.1265C46.7283 54.2885 46.3965 54.6203 46.3965 55.0185V58.8678C46.3301 59.4651 45.8656 59.9297 45.2683 59.9297Z" fill="#f9f9f9" />
									</svg>
					
									Matheus Antunes
								</Link>
							</div>

							<div className="flex items-center justify-between w-fit absolute top-10 right-5">
								<div className="flex flex-col items-end justify-center gap-5">
									<div className="cursor-pointer" onClick={toggleMenu}>
										<X size={32} color="#f9f9f9" />
									</div>
								</div>
							</div>

							<div>
								<motion.ul
									variants={containerVars}
									initial="initial"
									animate="open"
									exit="initial"
									className="flex flex-col items-center gap-8 mt-10"
								>
									<motion.li className="overflow-hidden">
										<motion.div
											variants={mobileLinkVars}
											onClick={toggleMenu}
										>
											<Link
												href="#home"
												className="font-medium text-center flex items-center justify-center text-4xl text-gray-100 uppercase transition-all hover:text-gray-200"
											>
												Home
											</Link>
										</motion.div>
									</motion.li>

									<motion.li className="overflow-hidden">
										<motion.div
											variants={mobileLinkVars}
											onClick={toggleMenu}
										>
											<Link
												href="#about"
												className="font-medium text-center flex items-center justify-center text-4xl text-gray-100 uppercase transition-all hover:text-gray-200"
											>
												Sobre
											</Link>
										</motion.div>
									</motion.li>

									<motion.li className="overflow-hidden">
										<motion.div
											variants={mobileLinkVars}
											onClick={toggleMenu}
										>
											<Link
												href="#skills"
												className="font-medium text-center flex items-center justify-center text-4xl text-gray-100 uppercase transition-all hover:text-gray-200"
											>
												Skills
											</Link>
										</motion.div>
									</motion.li>

									<motion.li className="overflow-hidden">
										<motion.div
											variants={mobileLinkVars}
											onClick={toggleMenu}
										>
											<Link
												href="#experiences"
												className="font-medium text-center flex items-center justify-center text-4xl text-gray-100 uppercase transition-all hover:text-gray-200"
											>
												Experiências
											</Link>
										</motion.div>
									</motion.li>

									<motion.li className="overflow-hidden">
										<motion.div
											variants={mobileLinkVars}
											onClick={toggleMenu}
										>
											<Link
												href="#projects"
												className="font-medium text-center flex items-center justify-center text-4xl text-gray-100 uppercase transition-all hover:text-gray-200"
											>
												Projetos
											</Link>
										</motion.div>
									</motion.li>

									<motion.li className="overflow-hidden">
										<motion.div
											variants={mobileLinkVars}
											onClick={toggleMenu}
										>
											<Link
												href="#contact"
												className="font-medium text-center flex items-center justify-center text-4xl text-gray-100 uppercase transition-all hover:text-gray-200"
											>
												Contato
											</Link>
										</motion.div>
									</motion.li>
								</motion.ul>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};