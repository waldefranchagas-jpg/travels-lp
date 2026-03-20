import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Plataforma', href: '#busca' },
  { label: 'Solução', href: '#solucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Fornecedores', href: '#fornecedores' },
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <span className="bg-brand-yellow text-brand-dark text-xs font-bold px-2 py-1 rounded">
            T&C
          </span>
          <div className="hidden sm:block leading-tight">
            <p className="text-white text-sm font-semibold">Travels & CIA</p>
            <p className="text-brand-gray text-[10px]">Travel Technology Platform</p>
          </div>
        </a>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contato"
            className="text-white text-sm font-medium hover:text-brand-yellow transition-colors"
          >
            Seja parceiro
          </a>
          <a
            href="#contato"
            className="bg-brand-yellow text-brand-dark text-sm font-semibold px-5 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Agendar demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-brand-dark border-t border-brand-border px-6 py-6 space-y-3">
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="block text-white text-sm font-medium"
          >
            Seja parceiro
          </a>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="block bg-brand-yellow text-brand-dark text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
          >
            Agendar demo
          </a>
        </div>
      )}
    </nav>
  )
}
