import { motion } from 'framer-motion'
import { Mail, Clock, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contato" className="bg-brand-dark py-24 lg:py-32 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-6">
              Fale com nosso time comercial
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Agende uma demonstração e conheça a plataforma por dentro.
            </h2>
            <p className="text-brand-gray text-lg leading-relaxed mb-10">
              Nosso time de especialistas apresenta a solução, entende sua operação
              e propõe o melhor plano para o estágio atual do seu negócio.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-brand-card border border-brand-border rounded-xl p-5">
                <Mail className="text-brand-yellow mb-3" size={18} />
                <p className="text-white text-sm font-semibold mb-1">E-mail comercial</p>
                <p className="text-brand-gray text-xs">comercial@travelsecia.com.br</p>
              </div>
              <div className="bg-brand-card border border-brand-border rounded-xl p-5">
                <Clock className="text-brand-yellow mb-3" size={18} />
                <p className="text-white text-sm font-semibold mb-1">Retorno garantido</p>
                <p className="text-brand-gray text-xs">Em até 1 dia útil</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-card border border-brand-border rounded-2xl p-8"
          >
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
                  rows={4}
                  placeholder="Descreva brevemente sua operação e o que busca resolver..."
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
