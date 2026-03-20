import { motion } from 'framer-motion'
import { Send, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-[#111320]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 pt-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-6">
              Plataforma para empresas que viajam a negócios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Gestão de Viagens com{' '}
              <span className="text-brand-yellow">taxa zero</span> e{' '}
              <span className="text-brand-yellow">controle total</span>
            </h1>
            <p className="text-brand-gray text-lg leading-relaxed mb-10 max-w-lg">
              Centralize passagens aéreas e rodoviárias, elimine taxas ocultas
              e recupere o controle financeiro da sua empresa em uma única plataforma.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark font-semibold px-7 py-3.5 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Agendar demonstração
                <Send size={18} />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-medium px-7 py-3.5 rounded-lg hover:border-white/40 transition-colors"
              >
                Conhecer a solução
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="flex gap-10 mt-12">
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-brand-yellow">R$ 0</p>
                <p className="text-brand-gray text-sm mt-1">Taxa de emissão</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-brand-yellow">+200</p>
                <p className="text-brand-gray text-sm mt-1">Empresas atendidas</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-brand-yellow">35%</p>
                <p className="text-brand-gray text-sm mt-1">Economia média</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-brand-card border border-brand-border rounded-2xl p-8"
          >
            <div className="mb-8">
              <h2 className="text-white font-semibold text-lg">
                Agende uma demonstração
              </h2>
              <p className="text-brand-gray text-sm mt-1">
                Preencha e nosso time entra em contato em até 1 dia útil.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-brand-gray text-sm mb-2">Nome do responsável</label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-brand-gray text-sm mb-2">E-mail corporativo</label>
                <input
                  type="email"
                  placeholder="voce@suaempresa.com.br"
                  className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-brand-gray text-sm mb-2">Empresa</label>
                <input
                  type="text"
                  placeholder="Nome da sua empresa"
                  className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-brand-gray text-sm mb-2">Como podemos ajudar?</label>
                <textarea
                  rows={3}
                  placeholder="Quantos colaboradores viajam por mês, destinos frequentes..."
                  className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-yellow/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-yellow text-brand-dark font-semibold py-3.5 rounded-lg hover:bg-yellow-400 transition-colors inline-flex items-center justify-center gap-2"
              >
                Agendar demonstração
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
