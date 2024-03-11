"use client";

import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="py-5 bg-stone-950 px-10">
			<div className="md:w-full lg:w-10/12 xl:w-9/12 2xl:w-7/12 mx-auto flex flex-col gap-5 md:flex-row items-center justify-between text-stone-200">
				<h2 className="text-sm">Copyright © 2024. Todos os direitos reservados.</h2>

				<div className="flex items-center gap-2">
					<Link href="https://www.linkedin.com/in/mathsbrain/" target="_blank">
						<LinkedinLogo size={24} weight="duotone" className="transition-all cursor-pointer hover:-translate-y-1" />
					</Link>
					<Link href="https://github.com/mathsbrain/" target="_blank">
						<GithubLogo size={24} weight="duotone" className="transition-all cursor-pointer hover:-translate-y-1" />
					</Link>
					<Link href="https://www.instagram.com/omathantunes/" target="_blank">
						<InstagramLogo size={24} weight="duotone" className="transition-all cursor-pointer hover:-translate-y-1" />
					</Link>
				</div>
			</div>
		</footer>
	);
};
