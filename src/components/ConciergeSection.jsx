import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function ConciergeSection() {
  return (
    <section className="bg-brand-dark py-24 lg:py-32 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-brand-card to-brand-dark border border-brand-yellow/20 rounded-2xl p-10 lg:p-16 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="text-brand-yellow" size={32} />
            </div>
          </div>

          <span className="inline-block text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">
            O pulo do gato
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Muito além de uma{' '}
            <span className="text-brand-yellow">plataforma de reservas.</span>
          </h2>

          <p className="text-brand-gray text-lg leading-relaxed max-w-3xl mx-auto">
            Para desafios maiores, nossa equipe de Concierge assume o controle.
            Planejamento de logísticas complexas para eventos de negócio e consultoria
            especializada para deslocamentos nacionais e internacionais.
            No plano Business, você nunca está sozinho.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
