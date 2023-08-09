'use client'
import { AlignJustify, XCircle } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false)

  return (
    <header className="fixed z-10 w-full border bg-zinc-50 px-6">
      <div className="m-auto flex h-[71px] w-full max-w-7xl items-center justify-between">
        <h1 className="font-title text-xl font-bold text-dark">
          beauty<span className="text-primary">salon</span>.
        </h1>
        <nav
          data-open={menuMobileIsOpen}
          className="hidden items-center gap-4 data-[open=true]:absolute data-[open=true]:left-0 data-[open=true]:top-0 data-[open=true]:flex data-[open=true]:h-screen data-[open=true]:w-screen data-[open=true]:flex-col data-[open=true]:justify-center data-[open=true]:gap-16 data-[open=true]:bg-white lg:flex"
        >
          <a
            className="font-title text-3xl font-bold text-dark lg:font-text lg:text-base lg:font-normal"
            href="#home"
            onClick={() => setMenuMobileIsOpen(false)}
          >
            Início
          </a>
          <a
            className="font-title text-3xl font-bold text-dark lg:font-text lg:text-base lg:font-normal"
            href="#about"
            onClick={() => setMenuMobileIsOpen(false)}
          >
            Sobre
          </a>
          <a
            className="font-title text-3xl font-bold text-dark lg:font-text lg:text-base lg:font-normal"
            href="#services"
            onClick={() => setMenuMobileIsOpen(false)}
          >
            Serviços
          </a>
          <a
            className="font-title text-3xl font-bold text-dark lg:font-text lg:text-base lg:font-normal"
            href="#testimonials"
            onClick={() => setMenuMobileIsOpen(false)}
          >
            Depoimentos
          </a>
          <a
            className="font-title text-3xl font-bold text-dark lg:font-text lg:text-base lg:font-normal"
            href="#contact"
            onClick={() => setMenuMobileIsOpen(false)}
          >
            Contatos
          </a>
        </nav>
        <button
          onClick={() => setMenuMobileIsOpen(!menuMobileIsOpen)}
          type="button"
          className="absolute right-6 lg:hidden"
        >
          {menuMobileIsOpen ? <XCircle /> : <AlignJustify />}
        </button>
      </div>
    </header>
  )
}
