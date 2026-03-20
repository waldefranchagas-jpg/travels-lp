import { motion } from 'framer-motion'
import { Award, Eye, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: 'Posicionamento premium',
    description:
      'Sua agência se posiciona como referência em tecnologia e inovação, transmitindo confiança a prospects e clientes corporativos.',
  },
  {
    icon: Eye,
    title: 'Transparência na proposta',
    description:
      'O cliente corporativo visualiza condições claras, economia comprovada e regras comerciais objetivas — sem ruído na negociação.',
  },
  {
    icon: TrendingUp,
    title: 'Maior taxa de conversão',
    description:
      'Provas de economia e comparativos de preço fortalecem sua proposta comercial, reduzindo o ciclo de venda B2B.',
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
            Vantagens competitivas que aceleram o crescimento da sua operação.
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
