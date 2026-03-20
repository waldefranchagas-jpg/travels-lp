import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Conexão com inventário',
    description:
      'Sua operação se conecta às APIs de fornecedores, consolidadores e cias aéreas para rastrear tarifas em tempo real.',
  },
  {
    number: '02',
    title: 'Configuração comercial',
    description:
      'Cadastre parceiros no backoffice com regras de custo, margem e disponibilidade. Cada fornecedor opera com suas próprias condições.',
  },
  {
    number: '03',
    title: 'Cotação para o cliente',
    description:
      'Seu time comercial ou o próprio cliente corporativo consulta as melhores condições, com valor em R$, economia e regras da oferta.',
  },
  {
    number: '04',
    title: 'Emissão e faturamento',
    description:
      'Após aprovação, o fluxo segue para emissão do bilhete, confirmação operacional e controle financeiro centralizado.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

export default function Workflow() {
  return (
    <section id="como-funciona" className="bg-brand-dark py-24 lg:py-32 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-6">
            Fluxo operacional
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
            Da cotação ao faturamento em um fluxo controlado e escalável.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-brand-card border border-brand-border rounded-xl p-8 hover:border-brand-yellow/20 transition-colors group relative"
            >
              <span className="text-brand-yellow font-bold text-sm bg-brand-yellow/10 w-9 h-9 rounded-full inline-flex items-center justify-center mb-6">
                {step.number}
              </span>
              <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
