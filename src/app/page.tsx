"use client";

import { ArrowLeft, ArrowRight, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";

import { contact } from "../../contact";
import { experiences } from "../../experiences";
import { skills } from "../../skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-[#181210] overflow-y-auto">
      <div id="home" className="w-full min-h-60 bg-[#f9f9f9] dark:bg-[#181210]">
        <div className="md:w-full lg:w-10/12 xl:w-9/12 2xl:w-7/12 pt-40 mdlg:pt-0 min-h-screen mx-auto flex-1 flex flex-col items-center justify-between p-10 mdlg:flex-row">
          <img src="./assets/me.jpg" alt="" className="w-80 h-auto border-2 border-[#181210] dark:border-[#f9f9f9] rounded-2xl shadow-2xl mdlg:hidden" />

          <div className="flex flex-col gap-6 text-center mdlg:text-left mt-10">
            <h1 className="text-5xl leading-snug md:text-6xl md:leading-tight font-bold text-[#181210] dark:text-[#f9f9f9]">Front-End React Developer 👋🏻</h1>
            <h2 className="text-gray-600 dark:text-gray-300 mdlg:w-9/12">Olá, meu nome é Matheus Antunes. Um dev que ama criar telas simples e muito interarivas.</h2>

            <div className="mt-2 flex items-center justify-center mdlg:justify-start">
              <Link href="#contact">
                <button className="group px-10 py-4 bg-[#181210] dark:bg-[#f9f9f9] text-[#f9f9f9] dark:text-[#181210] flex items-center gap-2 font-medium">
                  Fale comigo
  
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-xs transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>
                </button>
              </Link>
            </div>

            <div className="flex items-center justify-center mdlg:justify-start gap-6 mt-2">
              <Link href="https://www.linkedin.com/in/mathsbrain/" target="_blank">
                <LinkedinLogo size={32} weight="duotone" className="transition-all cursor-pointer hover:-translate-y-1" />
              </Link>
              <Link href="https://github.com/mathsbrain/" target="_blank">
                <GithubLogo size={32} weight="duotone" className="transition-all cursor-pointer hover:-translate-y-1" />
              </Link>
              <Link href="https://www.instagram.com/omathantunes/" target="_blank">
                <InstagramLogo size={32} weight="duotone" className="transition-all cursor-pointer hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          <img src="./assets/me.jpg" alt="" className="hidden mdlg:block w-80 h-auto border-2 border-[#181210] dark:border-[#f9f9f9] rounded-2xl shadow-2xl" />
        </div>
      </div>

      <div id="about" className="w-full min-h-60 bg-white dark:bg-stone-900 py-28 px-10">
        <div className="md:w-full lg:w-10/12 xl:w-9/12 2xl:w-7/12 mx-auto flex flex-col gap-12 mdlg:flex-row">
          <img src="./assets/about.jpg" alt="" className="w-full mdlg:w-6/12 rounded object-cover border-2 border-[#181210] dark:border-[#f9f9f9] shadow-lg flex-1" />

          <div className="mdlg:p-7 flex flex-col gap-3">
            <div>
              <h2 className="font-semibold text-blue-600 text-lg">Sobre</h2>
              <h3 className="text-[#181210] dark:text-[#f9f9f9] font-semibold text-2xl">Um pouco mais sobre mim</h3>
            </div>

            <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-300">
              Meu nome é Matheus Antunes, sou um desenvolvedor front-end React especializado em Next JS, com mais de 7 anos de experiência na área.
              Minha carreira é movida pela paixão de criar interfaces dinâmicas e responsivas, empregando as mais modernas tecnologias e práticas de desenvolvimento.<br /><br />
              Atualmente, estou aprofundando meus conhecimentos em UI Design, um campo que complementa minha expertise em desenvolvimento e reflete meu
              interesse em aprimorar a experiência do usuário por meio de designs mais intuitivos e atraentes.
            </p>
          </div>
        </div>
      </div>

      <div id="skills" className="w-full min-h-60 bg-[#f9f9f9] dark:bg-[#181210] py-28 px-10 flex">
        <div className="md:w-full lg:w-10/12 xl:w-9/12 2xl:w-7/12 mx-auto flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-semibold text-blue-600 text-lg">Minhas Skills</h2>
            <h3 className="leading-relaxed text-sm text-gray-600 dark:text-gray-300">Algumas tecnologias que eu trabalho (ou que eu já trabalhei ;))</h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {skills.map((skill) => (
              <div key={skill.id} className="py-3 shadow px-6 rounded bg-gray-300 dark:bg-stone-600 text-sm flex items-center justify-center gap-2 font-medium">
                <img src={skill.icon} alt="" className="max-w-5" />
                {skill.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="experiences" className="w-full min-h-60 bg-white dark:bg-stone-900 py-28 px-10 flex">
        <div className="md:w-full lg:w-10/12 xl:w-9/12 2xl:w-7/12 mx-auto flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-semibold text-blue-600 text-lg">Experiências</h2>
            <h3 className="leading-relaxed text-sm text-gray-600 dark:text-gray-300">Veja algumas empresas que eu tiver o prazer de trabalhar</h3>
          </div>

          <div className="w-full grid grid-cols-[1fr_auto_1fr] gap-20 md:gap-10 mt-16 md:mt-10">
            {experiences.map((experience, index) => (
              <div key={experience.id} className={`relative grid md:grid-cols-2 col-start-1 col-end-4`}>
                <div className={`${index % 2 === 0 ? "col-start-1 col-end-2" : "col-start-1 col-end-2 md:col-start-2 md:col-end-3"}`}>
                  <div className={`absolute ${index % 2 === 0 ? "md:left-1/2" : "md:-translate-x-[110%]"} md:top-1/2 -translate-y-[calc(100%+10px)] md:-translate-y-1/2 flex items-center gap-2`}>
                    {index % 2 === 0 && <ArrowLeft size={24} className="ml-5 hidden md:block" />}
                    {index % 2 === 0 ? (
                      <div className="w-fit hidden md:block shadow-md p-2 rounded-full border-2 border-gray-500 bg-gray-300 dark:border-stone-700 dark:bg-stone-600">
                        <img src={experience.stack} alt="" className="w-5" />
                      </div>
                    ) : ""}

                    <div className="w-fit md:hidden shadow-md p-2 rounded-full border-2 border-gray-500 bg-gray-300 dark:border-stone-700 dark:bg-stone-600">
                      <img src={experience.stack} alt="" className="w-5" />
                    </div>

                    <span className="font-semibold text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                      {experience.tmp}
                    </span>

                    {index % 2 !== 0 ? (
                      <div className="hidden md:block w-fit shadow-md p-2 rounded-full border-2 border-gray-500 bg-gray-300 dark:border-stone-700 dark:bg-stone-600">
                        <img src={experience.stack} alt="" className="w-5" />
                      </div>
                    ) : ""}
                    {index % 2 !== 0 && <ArrowRight size={24} className="hidden md:block" />}
                  </div>

                  <div className="p-5 bg-gray-300 dark:bg-stone-600 rounded flex flex-col gap-2 shadow-xl">
                    <div>
                      <h2 className="font-semibold text-stone-800 dark:text-stone-200">{experience.title}</h2>
                      <h3 className="text-gray-600 dark:text-gray-300">{experience.local}</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="projects" className="w-full min-h-60 bg-[#f9f9f9] dark:bg-[#181210] py-28 px-10 flex">
        <div className="md:w-full lg:w-10/12 xl:w-9/12 2xl:w-7/12 mx-auto flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-semibold text-blue-600 text-lg">Meus Projetos</h2>
            <h3 className="leading-relaxed text-sm text-gray-600 dark:text-gray-300">Working in progress</h3>
          </div>
        </div>
      </div>

      <div id="contact" className="w-full min-h-60 bg-white dark:bg-stone-900 py-28 px-10 flex">
        <div className="md:w-full lg:w-10/12 xl:w-9/12 2xl:w-7/12 mx-auto flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-semibold text-blue-600 text-lg">Contato</h2>
            <h3 className="leading-relaxed text-sm text-gray-600 dark:text-gray-300">Entre em contato comigo por meio das minhas redes sociais.</h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {contact.map((contact) => (
              <Link href={contact.href} target="_blank" key={contact.id} className="py-3 shadow px-6 transition-all hover:-translate-y-1 rounded bg-gray-300 dark:bg-stone-600 text-sm flex items-center justify-center gap-2 font-medium">
                {contact.icon === "linkedin" && <LinkedinLogo size={24} weight="duotone" className="transition-all cursor-pointer" />}
                {contact.icon === "github" && <GithubLogo size={24} weight="duotone" className="transition-all cursor-pointer" />}
                {contact.icon === "instagram" && <InstagramLogo size={24} weight="duotone" className="transition-all cursor-pointer" />}
                {contact.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
