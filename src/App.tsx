/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Home, 
  Car, 
  Briefcase, 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  TrendingUp, 
  Check,
  Menu,
  X
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-primary text-secondary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <img src="https://i.imgur.com/0M1yNP9.png" alt="GL Soluções" className="h-14 w-auto" referrerPolicy="no-referrer" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
              <a href="#creditos" className="hover:text-white transition-colors">Créditos</a>
              <a href="#vantagens" className="hover:text-white transition-colors">Vantagens</a>
              <a href="#simulador" className="hover:text-white transition-colors">Simulador</a>
              <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-secondary hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary-dark">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-white">Como Funciona</a>
              <a href="#creditos" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-white">Créditos</a>
              <a href="#vantagens" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-white">Vantagens</a>
              <a href="#simulador" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-white">Simulador</a>
              <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary hover:text-white">Sobre</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
              Consultoria e Gestão em Cartas de Crédito Programadas
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-extrabold text-primary leading-tight">
              Planeje Seu Crédito <br/><span className="text-gray-800">com Segurança</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-gray-700 max-w-xl leading-relaxed">
              Consultoria especializada em gestão de cartas de crédito programadas para aquisição de imóveis, automóveis e serviços. A GL Soluções oferece planejamento financeiro e gestão completa para quem deseja conquistar seus objetivos.
            </motion.p>
            
            <motion.div variants={fadeIn} className="space-y-3">
              {[
                'Consultoria especializada',
                'Planejamento financeiro estruturado',
                'Gestão completa da carta de crédito'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#creditos" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-secondary bg-primary hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl">
                Ver Créditos Disponíveis
              </a>
              <a href="#simulador" className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary text-base font-medium rounded-xl text-primary hover:bg-primary hover:text-secondary transition-colors">
                Simular Crédito
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 scale-105"></div>
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Planejamento Financeiro" 
              className="relative rounded-3xl shadow-2xl object-cover h-[600px] w-full"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="bg-secondary p-3 rounded-full">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Objetivos Alcançados</p>
                <p className="text-2xl font-bold text-primary">100% Foco</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Como Funciona</h2>
            <p className="text-lg text-gray-600">Um processo simples e transparente para você alcançar seus objetivos com segurança e planejamento.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Escolha seu objetivo',
                desc: 'Selecione o tipo de crédito que deseja planejar: Imóvel, Automóvel ou Serviços.',
                icon: Target
              },
              {
                step: '2',
                title: 'Adesão ao plano',
                desc: 'Para ativação da carta de crédito é realizada uma taxa de adesão inicial, garantindo a entrada no plano.',
                icon: ShieldCheck
              },
              {
                step: '3',
                title: 'Contribuições mensais',
                desc: 'Após a adesão, o cliente inicia as parcelas do plano escolhido de forma programada.',
                icon: TrendingUp
              },
              {
                step: '4',
                title: 'Contemplação',
                desc: 'A liberação do crédito ocorre conforme as regras contratuais e programação do plano.',
                icon: CheckCircle
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative p-8 bg-secondary/30 rounded-2xl border border-secondary hover:shadow-lg transition-shadow"
              >
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                  {item.step}
                </div>
                <item.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cartas de Crédito Disponíveis */}
      <section id="creditos" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Cartas de Crédito Disponíveis</h2>
            <p className="text-lg text-gray-700">Conheça nossas opções e escolha a que melhor se adapta ao seu planejamento financeiro.</p>
          </motion.div>

          <div className="space-y-16">
            {/* Imóvel */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-primary/20 pb-4">
                <div className="bg-primary p-3 rounded-xl text-secondary">
                  <Home className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Crédito Programado para Imóvel</h3>
                  <p className="text-gray-600 font-medium">Taxa adm: 18% | Prazo médio: 200 meses | Adesão: 10%</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { credit: '120.000', adhesion: '12.000', parcel: '708' },
                  { credit: '180.000', adhesion: '18.000', parcel: '1.062' },
                  { credit: '250.000', adhesion: '25.000', parcel: '1.475' },
                  { credit: '350.000', adhesion: '35.000', parcel: '2.065' },
                ].map((card, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="text-sm text-gray-500 font-medium mb-1">Carta {i + 1}</div>
                    <div className="text-3xl font-bold text-primary mb-4">R$ {card.credit}</div>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Adesão:</span>
                        <span className="font-semibold text-gray-900">R$ {card.adhesion}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Parcela est.:</span>
                        <span className="font-semibold text-gray-900">R$ {card.parcel}</span>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary hover:text-secondary transition-colors">
                      Solicitar Consultoria
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Automóvel */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-primary/20 pb-4">
                <div className="bg-primary p-3 rounded-xl text-secondary">
                  <Car className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Crédito Programado para Automóvel</h3>
                  <p className="text-gray-600 font-medium">Taxa adm: 14% | Prazo médio: 85 meses | Adesão: 15%</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { credit: '40.000', adhesion: '6.000', parcel: '536' },
                  { credit: '60.000', adhesion: '9.000', parcel: '804' },
                  { credit: '80.000', adhesion: '12.000', parcel: '1.072' },
                ].map((card, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="text-sm text-gray-500 font-medium mb-1">Carta {i + 1}</div>
                    <div className="text-3xl font-bold text-primary mb-4">R$ {card.credit}</div>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Adesão:</span>
                        <span className="font-semibold text-gray-900">R$ {card.adhesion}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Parcela est.:</span>
                        <span className="font-semibold text-gray-900">R$ {card.parcel}</span>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary hover:text-secondary transition-colors">
                      Consultar Disponibilidade
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Serviços */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-primary/20 pb-4">
                <div className="bg-primary p-3 rounded-xl text-secondary">
                  <Briefcase className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Crédito Programado para Serviços</h3>
                  <p className="text-gray-600 font-medium">Taxa adm: 24% | Prazo médio: 48 meses | Adesão: 20%</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { credit: '10.000', adhesion: '2.000', parcel: '258' },
                  { credit: '20.000', adhesion: '4.000', parcel: '516' },
                  { credit: '30.000', adhesion: '6.000', parcel: '774' },
                ].map((card, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="text-sm text-gray-500 font-medium mb-1">Carta {i + 1}</div>
                    <div className="text-3xl font-bold text-primary mb-4">R$ {card.credit}</div>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Adesão:</span>
                        <span className="font-semibold text-gray-900">R$ {card.adhesion}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Parcela est.:</span>
                        <span className="font-semibold text-gray-900">R$ {card.parcel}</span>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary hover:text-secondary transition-colors">
                      Falar com Consultor
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section id="vantagens" className="py-20 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Vantagens da GL Soluções</h2>
              <div className="space-y-6">
                {[
                  'Consultoria especializada em crédito programado',
                  'Planejamento financeiro organizado',
                  'Diversas opções de cartas de crédito',
                  'Acompanhamento até contemplação',
                  'Atendimento personalizado'
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-primary-dark/50 p-4 rounded-xl"
                  >
                    <div className="bg-secondary p-2 rounded-full flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Equipe GL Soluções" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-3xl mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulador */}
      <section id="simulador" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-secondary rounded-3xl p-8 md:p-12 shadow-xl border border-secondary-dark/30"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-primary mb-4">Simulador de Crédito</h2>
              <p className="text-gray-700">Simule agora seu plano e dê o primeiro passo para a sua conquista.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-primary">Tipo de crédito</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white text-gray-700">
                    <option value="">Selecione uma opção</option>
                    <option value="imovel">Imóvel</option>
                    <option value="automovel">Automóvel</option>
                    <option value="servicos">Serviços</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-primary">Valor desejado (R$)</label>
                  <input 
                    type="text" 
                    placeholder="Ex: 150.000" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-primary">Prazo do plano (meses)</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white text-gray-700">
                  <option value="">Selecione o prazo</option>
                  <option value="48">Até 48 meses</option>
                  <option value="85">Até 85 meses</option>
                  <option value="200">Até 200 meses</option>
                </select>
              </div>

              <button type="submit" className="w-full py-4 bg-primary text-secondary font-bold text-lg rounded-xl hover:bg-primary-dark transition-colors shadow-lg flex justify-center items-center gap-2 mt-8">
                Simular Agora <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-secondary border-t border-secondary-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <img src="https://i.imgur.com/0M1yNP9.png" alt="GL Soluções" className="h-24 w-auto mx-auto" referrerPolicy="no-referrer" />
            <h2 className="text-3xl font-bold text-primary">Sobre a GL Soluções</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A GL Soluções atua na consultoria e gestão de cartas de crédito programadas, auxiliando clientes a conquistar bens e serviços através de planejamento financeiro estruturado.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nosso objetivo é oferecer orientação profissional e transparência em cada etapa do processo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer / Aviso Legal */}
      <footer className="bg-primary text-secondary/80 py-12 border-t border-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <img src="https://i.imgur.com/0M1yNP9.png" alt="GL Soluções" className="h-16 w-auto" referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm leading-relaxed max-w-md">
                Consultoria especializada em gestão de cartas de crédito programadas para aquisição de imóveis, automóveis e serviços.
              </p>
            </div>
            
            <div className="bg-primary-dark/30 p-6 rounded-xl border border-primary-dark">
              <h4 className="text-secondary font-bold mb-4 uppercase text-sm tracking-wider">Aviso Legal</h4>
              <p className="text-sm mb-4 leading-relaxed">
                A GL Soluções atua como consultoria e intermediação na gestão de cartas de crédito programadas.
              </p>
              <p className="text-sm mb-2">A liberação do crédito depende de:</p>
              <ul className="list-disc list-inside text-sm space-y-1 mb-4 ml-2">
                <li>análise cadastral</li>
                <li>regras contratuais</li>
                <li>programação do plano contratado</li>
              </ul>
              <p className="text-sm font-semibold text-secondary">
                A empresa não é instituição financeira.
              </p>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-primary-dark text-sm">
            &copy; {new Date().getFullYear()} GL Soluções. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
