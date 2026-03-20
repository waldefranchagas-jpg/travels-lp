import { motion } from 'framer-motion'
import { Award, Eye, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: 'Redução real de custos',
    description:
      'Elimine taxas de emissão, compare fornecedores automaticamente e garanta sempre o menor preço. Economia comprovada em cada viagem.',
  },
  {
    icon: Eye,
    title: 'Visibilidade total dos gastos',
    description:
      'Enxergue custos invisíveis como no-shows, bilhetes não voados e multas de remarcação. O que você não mede, você não controla.',
  },
  {
    icon: TrendingUp,
    title: 'Gestão centralizada',
    description:
      'Aprovações, faturas, NFs e relatórios num lugar só. Sem informação espalhada, sem retrabalho, sem surpresas no fechamento.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-brand-dark py-24 lg:py-32 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-6">
            Benefícios estratégicos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
            Menos custos, mais controle, tudo num único lugar.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-brand-card border border-brand-border rounded-xl p-8 hover:border-brand-yellow/20 transition-colors"
            >
              <benefit.icon className="text-brand-yellow mb-5" size={24} />
              <h3 className="text-white font-semibold text-lg mb-3">{benefit.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
