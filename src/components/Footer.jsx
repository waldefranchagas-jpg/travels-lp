import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-dark border-t border-brand-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-semibold">
            Travels & CIA
          </p>
          <p className="text-brand-gray text-sm mt-1">
            Plataforma B2B para milhas, tarifas aéreas e inteligência comercial.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a href="#busca" className="text-brand-gray text-sm hover:text-white transition-colors">
            Solução
          </a>
          <a href="#contato" className="text-brand-gray text-sm hover:text-white transition-colors">
            Contato
          </a>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-brand-yellow text-sm font-semibold hover:text-yellow-400 transition-colors"
          >
            Voltar ao topo
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
