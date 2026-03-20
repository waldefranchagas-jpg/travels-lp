import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const features = [
  'Onboarding de fornecedores com dados operacionais e compliance',
  'Controle de custo por milheiro, tarifa e regra comercial por parceiro',
  'Margem configurável por produto, rota ou cliente corporativo',
  'Gestão de status: ativo, pausado, em validação ou bloqueado',
]

export default function Backoffice() {
  return (
    <section id="fornecedores" className="bg-brand-dark py-24 lg:py-32 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-6">
              Backoffice comercial
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Gerencie sua rede de fornecedores com controle total.
            </h2>
            <p className="text-brand-gray text-lg leading-relaxed mb-10">
              O painel administrativo centraliza o cadastro, a edição e o controle
              das fontes de tarifa, garantindo padronização e rastreabilidade em
              toda a cadeia comercial.
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-yellow shrink-0 mt-0.5" size={18} />
                  <span className="text-brand-gray text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Mock card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-card border border-brand-border rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-white font-semibold">Cadastro de fornecedor</h3>
              <span className="bg-brand-yellow/10 text-brand-yellow text-xs font-semibold px-3 py-1 rounded-full">
                Backoffice
              </span>
            </div>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-brand-gray text-xs mb-1.5">Fornecedor</p>
                  <div className="bg-brand-dark border border-brand-border rounded-lg px-4 py-3">
                    <p className="text-white text-sm">Sky Supplier Premium</p>
                  </div>
                </div>
                <div>
                  <p className="text-brand-gray text-xs mb-1.5">Tipo</p>
                  <div className="bg-brand-dark border border-brand-border rounded-lg px-4 py-3">
                    <p className="text-white text-sm">Milhas + aéreo</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-brand-gray text-xs mb-1.5">Custo base</p>
                  <div className="bg-brand-dark border border-brand-border rounded-lg px-4 py-3">
                    <p className="text-white text-sm">R$ 18,90 / milheiro</p>
                  </div>
                </div>
                <div>
                  <p className="text-brand-gray text-xs mb-1.5">Status</p>
                  <div className="bg-brand-dark border border-brand-border rounded-lg px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      <p className="text-white text-sm">Ativo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
