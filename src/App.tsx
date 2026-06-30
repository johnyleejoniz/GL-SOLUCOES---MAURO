/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle, 
  Car, 
  ShieldCheck, 
  TrendingUp, 
  Check,
  Zap,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  ChevronRight,
  Briefcase,
  HelpCircle,
  FileText,
  DollarSign,
  Activity,
  Globe,
  ExternalLink
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    responsavel: '',
    cnpj: '',
    telefone: '',
    email: '',
    segmento: '',
    site: '',
    descricao: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp prefilled message containing the form data
    const message = `*Novo Parceiro - Grupo GL*\n\n` +
      `*Empresa:* ${formData.nomeEmpresa}\n` +
      `*Responsável:* ${formData.responsavel}\n` +
      `*CNPJ:* ${formData.cnpj}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Segmento:* ${formData.segmento}\n` +
      `*Site:* ${formData.site || 'Não possui'}\n` +
      `*Descrição:* ${formData.descricao}`;
      
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/message/NCCROSKDG3DMN1?text=${encodedMessage}`;
    
    setFormSubmitted(true);
    
    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-secondary text-gray-800 font-sans antialiased selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-primary text-secondary shadow-lg backdrop-blur-md bg-opacity-95 border-b border-primary-dark/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <img 
                src="https://i.imgur.com/0M1yNP9.png" 
                alt="Grupo GL Logo" 
                className="h-14 w-auto transform hover:scale-105 transition-transform" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 items-center">
              <a href="#inicio" className="hover:text-white font-medium transition-colors">Início</a>
              <a href="#servicos" className="hover:text-white font-medium transition-colors">Nossos Serviços</a>
              <a href="#ceo" className="hover:text-white font-medium transition-colors">CEO da Operação</a>
              <a href="#parceiros" className="hover:text-white font-medium transition-colors">Seja um Parceiro</a>
              <a href="#escritorio-virtual" className="hover:text-white font-medium transition-colors">Escritório Virtual</a>
              <a href="#contato" className="hover:text-white font-medium transition-colors">Contato</a>
              
              <a 
                href="https://www.xn--glsoluoesdenegocios-byb.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-4 inline-flex items-center justify-center px-5 py-2.5 border-2 border-secondary hover:bg-secondary hover:text-primary font-bold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Escritório Virtual <ExternalLink className="ml-1.5 h-4 w-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-secondary hover:text-white focus:outline-none p-2 rounded-lg hover:bg-primary-dark/50 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-primary-dark border-t border-primary/20 overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-primary hover:text-white transition-all">Início</a>
                <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-primary hover:text-white transition-all">Nossos Serviços</a>
                <a href="#ceo" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-primary hover:text-white transition-all">CEO da Operação</a>
                <a href="#parceiros" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-primary hover:text-white transition-all">Seja um Parceiro</a>
                <a href="#escritorio-virtual" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-primary hover:text-white transition-all">Escritório Virtual</a>
                <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-primary hover:text-white transition-all">Contato</a>
                
                <div className="pt-4 px-3">
                  <a 
                    href="https://www.xn--glsoluoesdenegocios-byb.com.br/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full inline-flex items-center justify-center px-5 py-3 border-2 border-secondary bg-secondary text-primary font-bold rounded-xl transition-all shadow-md"
                  >
                    ACESSAR ESCRITÓRIO VIRTUAL <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-36 pb-20 md:pt-44 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 space-y-8 z-10"
          >
            <motion.div 
              variants={fadeIn} 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm shadow-sm"
            >
              <Sparkles className="h-4 w-4" /> GRUPO GL
            </motion.div>
            
            <motion.h1 
              variants={fadeIn} 
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tight"
            >
              Um Ecossistema Completo <br/>
              <span className="text-gray-900 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">de Soluções, Negócios e Oportunidades</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn} 
              className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed font-normal"
            >
              Conectamos empresas, parceiros e clientes através de soluções inovadoras que geram crescimento, proteção, mobilidade e desenvolvimento financeiro.
            </motion.p>

            {/* Quick Actions */}
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#servicos" 
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-secondary bg-primary hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Conheça Nossos Serviços
              </a>
              <a 
                href="#parceiros" 
                className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary text-base font-bold rounded-xl text-primary hover:bg-primary hover:text-secondary transition-all hover:-translate-y-0.5"
              >
                Seja um Parceiro
              </a>
            </motion.div>

            {/* Virtual Office Prompt */}
            <motion.div 
              variants={fadeIn} 
              className="pt-4 flex items-center gap-3 text-sm text-gray-600 bg-white/50 p-4 rounded-xl border border-secondary-dark/40 max-w-md shadow-sm"
            >
              <Users className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Já é parceiro ou cotista? <a href="https://www.xn--glsoluoesdenegocios-byb.com.br/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline inline-flex items-center gap-1">Acessar Escritório Virtual <ExternalLink className="h-3 w-3" /></a></span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 bg-primary/25 rounded-3xl transform rotate-3 scale-105 blur-md -z-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#346585]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F4E9D5]/40 rounded-full blur-2xl"></div>

            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Grupo GL Business Solutions" 
              className="relative rounded-3xl shadow-2xl object-cover h-[520px] w-full border border-secondary-dark/30 transform hover:-translate-y-1 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Highlight Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-secondary-dark/30 backdrop-blur-md bg-opacity-95 animate-pulse">
              <div className="bg-primary/10 p-3 rounded-full">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Ecossistema GL</p>
                <p className="text-lg font-bold text-primary">Crescimento & Inovação</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section id="servicos" className="py-24 bg-white border-t border-secondary-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-4xl font-extrabold text-primary mb-4 tracking-tight"
            >
              Nossos Serviços & Soluções
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"
            />
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Explore as diversas soluções e empresas que fazem parte do ecossistema inteligente de negócios do Grupo GL.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* 🚖 S-MOVE MOBILIDADE */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-8 bg-secondary/20 rounded-3xl border border-secondary-dark/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-primary text-secondary p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-md">
                    <Car className="h-8 w-8" />
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">Mobilidade</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">🚖 S-MOVE MOBILIDADE</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Plataforma de mobilidade urbana de ponta que conecta motoristas, parceiros de frotas e passageiros através de segurança, tecnologia avançada e eficiência.
                </p>
              </div>
              <a 
                href="https://smove.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full px-5 py-3.5 bg-primary text-secondary font-bold rounded-xl hover:bg-primary-dark transition-all shadow-md group-hover:shadow-lg"
              >
                Acessar Site da S-MOVE <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            {/* 🛡️ PROTEÇÃO VEICULAR */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-8 bg-secondary/20 rounded-3xl border border-secondary-dark/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-primary text-secondary p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-md">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">Proteção</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">🛡️ PROTEÇÃO VEICULAR</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Proteção patrimonial inteligente e completa para veículos com assistência nacional 24 horas, reboque e benefícios de alto nível exclusivos para associados.
                </p>
              </div>
              <a 
                href="https://app.powercrm.com.br/login?error=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full px-5 py-3.5 bg-primary text-secondary font-bold rounded-xl hover:bg-primary-dark transition-all shadow-md group-hover:shadow-lg"
              >
                Acessar Site da Proteção Veicular <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            {/* 💳 REABILITAÇÃO DE CRÉDITO */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-8 bg-secondary/20 rounded-3xl border border-secondary-dark/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-primary text-secondary p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-md">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">Recuperação</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">💳 REABILITAÇÃO DE CRÉDITO</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Planejamento e soluções especializadas de reabilitação financeira, remoção de apontamentos e estruturação de score para recuperação integral de poder de compra no mercado.
                </p>
              </div>
              <a 
                href="https://www.smovereabilita.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full px-5 py-3.5 bg-primary text-secondary font-bold rounded-xl hover:bg-primary-dark transition-all shadow-md group-hover:shadow-lg"
              >
                Acessar Site de Reabilitação <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            {/* 🚗 CONSÓRCIOS */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-8 bg-secondary/20 rounded-3xl border border-secondary-dark/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-primary text-secondary p-4 rounded-2xl group-hover:scale-110 transition-transform shadow-md">
                    <Zap className="h-8 w-8" />
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">Planejamento</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">🚗 CONSÓRCIOS</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Consórcios estruturados para aquisição planejada e inteligente de veículos, frotas, imóveis comerciais e industriais de forma segura, com as menores taxas do mercado.
                </p>
              </div>
              <a 
                href="https://consorciotriangulo.com.br/representante/SMOVE" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full px-5 py-3.5 bg-primary text-secondary font-bold rounded-xl hover:bg-primary-dark transition-all shadow-md group-hover:shadow-lg"
              >
                Acessar Site de Consórcios <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

          </div>

          {/* 📈 COTISTA GL - Destacado em largura total */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-12 p-8 md:p-12 bg-primary text-secondary rounded-3xl shadow-xl flex flex-col lg:flex-row gap-8 items-center"
          >
            <div className="lg:w-7/12 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 bg-white/20 rounded-full text-secondary">Programa Exclusivo</span>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">📈 COTISTA GL</h3>
              <p className="text-secondary/90 leading-relaxed text-base">
                Programa estratégico destinado a pessoas que desejam participar ativamente do crescimento e dos lucros do ecossistema Grupo GL através da aquisição de cotas contratuais.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Participação em projetos selecionados',
                  'Recebimento de distribuição de resultados',
                  'Transparência total via Escritório Virtual',
                  'Gestão centralizada de alta performance'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-secondary text-primary p-1 rounded-full flex-shrink-0">
                      <Check className="h-3.5 w-3.5 font-black" />
                    </div>
                    <span className="text-sm font-semibold text-secondary/95">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-5/12 w-full flex flex-col justify-center items-center lg:items-end">
              <a 
                href="https://www.prlsmovemobilidade.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center inline-flex justify-center items-center px-8 py-4 bg-white text-primary font-black text-lg rounded-xl hover:bg-secondary transition-all shadow-lg hover:-translate-y-0.5"
              >
                Conhecer Programa de Cotas
              </a>
              <span className="text-xs text-secondary/70 mt-3 flex items-center gap-1.5 font-medium">
                <Globe className="h-3.5 w-3.5" /> Acompanhamento 100% online
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO da Operação */}
      <section id="ceo" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Foto CEO */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-primary/15 rounded-3xl transform -rotate-3 scale-105"></div>
              <img 
                src="https://fvshysxuamdatyugdipx.supabase.co/storage/v1/object/public/video%20teste/GL%20SISTEMA%20COISAS/ChatGPT%20Image%2028%20de%20jun.%20de%202026,%2015_05_46.png" 
                alt="Mauro Lima - CEO de Operações Grupo GL" 
                className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full border border-secondary-dark/40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 bg-primary text-secondary px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md">
                CEO Grupo GL
              </div>
            </motion.div>

            {/* Conteúdo CEO */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">Liderança Executiva</span>
              <h2 className="text-4xl font-extrabold text-primary leading-none">Mauro Lima</h2>
              <p className="text-lg font-bold text-gray-800 -mt-2">CEO de Operações – Grupo GL</p>
              
              <div className="h-1 w-16 bg-primary rounded-full mb-6"></div>
              
              <p className="text-gray-700 leading-relaxed text-base">
                Mauro Lima lidera as operações estratégicas do Grupo GL, coordenando a expansão de negócios, desenvolvimento de parcerias e integração dos serviços de ponta que compõem o ecossistema empresarial.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-base">
                Com sólida experiência em empreendedorismo, marketing de relacionamento e desenvolvimento de projetos altamente escaláveis, atua estrategicamente na construção de soluções inteligentes voltadas à mobilidade, proteção patrimonial, serviços financeiros e estruturação de novos negócios.
              </p>

              {/* Mensagem / Quote */}
              <div className="p-6 bg-white rounded-2xl border-l-4 border-primary shadow-sm bg-opacity-70">
                <p className="text-gray-800 font-medium italic leading-relaxed text-lg">
                  "Acreditamos que o crescimento sustentável acontece quando unimos tecnologia de ponta, inovação de mercado e pessoas reais movidas por um propósito claro. Nosso compromisso é gerar oportunidades palpáveis de evolução para parceiros, clientes e investidores."
                </p>
                <p className="text-sm font-extrabold text-primary mt-3 uppercase tracking-wider">— Mauro Lima, CEO de Operações</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Seja um Parceiro */}
      <section id="parceiros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Texto de Apresentação de Parcerias */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-6 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-sm font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">Expansão de Canais</span>
                <h2 className="text-4xl font-black text-primary leading-tight tracking-tight">
                  Integre Sua Empresa <br/>ao Ecossistema GL
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  O Grupo GL busca ativamente empresas inovadoras e de alta performance que desejam expandir e ampliar sua atuação comercial através de nossa plataforma estruturada.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Empresas parceiras poderão disponibilizar seus produtos e serviços exclusivos diretamente para toda a rede GL, multiplicando a exposição e impulsionando as vendas.
                </p>
              </div>

              {/* Vantagens com ícones */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Vantagens de se Associar:</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Divulgação para toda a rede GL',
                    'Integração tecnológica de ponta',
                    'Expansão comercial acelerada',
                    'Novos canais de vendas integrados',
                    'Fortalecimento robusto de marca'
                  ].map((advantage, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-secondary/20 rounded-xl border border-secondary-dark/30">
                      <div className="bg-primary text-secondary p-1 rounded-full flex-shrink-0">
                        <Check className="h-3.5 w-3.5 font-bold" />
                      </div>
                      <span className="text-sm font-bold text-gray-800">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Formulário Interativo de Parceria */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:col-span-6 bg-secondary/40 p-8 rounded-3xl border border-secondary-dark/30 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">Formulário de Candidatura</h3>
              <p className="text-sm text-gray-600 mb-6">Insira os dados da sua empresa. Você será redirecionado para concluir no WhatsApp comercial.</p>
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form 
                    onSubmit={handleFormSubmit} 
                    className="space-y-4"
                    key="partner-form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-primary uppercase mb-1">Nome da Empresa *</label>
                        <input 
                          type="text" 
                          name="nomeEmpresa" 
                          required 
                          value={formData.nomeEmpresa}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white text-gray-800 font-medium"
                          placeholder="Ex: GL Ltda"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary uppercase mb-1">Responsável *</label>
                        <input 
                          type="text" 
                          name="responsavel" 
                          required 
                          value={formData.responsavel}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white text-gray-800 font-medium"
                          placeholder="Ex: João Silva"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-primary uppercase mb-1">CNPJ *</label>
                        <input 
                          type="text" 
                          name="cnpj" 
                          required 
                          value={formData.cnpj}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white text-gray-800 font-medium"
                          placeholder="00.000.000/0001-00"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary uppercase mb-1">Telefone / WhatsApp *</label>
                        <input 
                          type="tel" 
                          name="telefone" 
                          required 
                          value={formData.telefone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white text-gray-800 font-medium"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-primary uppercase mb-1">E-mail Corporativo *</label>
                        <input 
                          type="email" 
                          name="email" 
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white text-gray-800 font-medium"
                          placeholder="empresa@grupogl.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-primary uppercase mb-1">Segmento de Atuação *</label>
                        <input 
                          type="text" 
                          name="segmento" 
                          required 
                          value={formData.segmento}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white text-gray-800 font-medium"
                          placeholder="Ex: Seguros, Tecnologia"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-primary uppercase mb-1">Site da Empresa (Opcional)</label>
                      <input 
                        type="url" 
                        name="site" 
                        value={formData.site}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white text-gray-800 font-medium"
                        placeholder="https://suaempresa.com.br"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-primary uppercase mb-1">Descrição Curta dos Serviços *</label>
                      <textarea 
                        name="descricao" 
                        required 
                        rows={3}
                        value={formData.descricao}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white text-gray-800 font-medium resize-none"
                        placeholder="Descreva brevemente o que sua empresa oferece..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 bg-primary text-secondary font-black text-lg rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-2 mt-4"
                    >
                      QUERO SER PARCEIRO <ArrowRight className="h-5 w-5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4 space-y-6"
                    key="form-success"
                  >
                    <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                      <Check className="h-10 w-10 font-black" />
                    </div>
                    <h4 className="text-2xl font-bold text-primary">Candidatura Enviada!</h4>
                    <p className="text-gray-700 max-w-sm mx-auto leading-relaxed">
                      Seus dados foram estruturados. Estamos abrindo o WhatsApp corporativo para finalizar a conexão com nosso time operacional.
                    </p>
                    <div className="animate-pulse text-sm text-gray-500 font-bold">Redirecionando...</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Escritório Virtual Section */}
      <section id="escritorio-virtual" className="py-24 bg-secondary border-t border-secondary-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-secondary shadow-2xl relative overflow-hidden">
            
            {/* Background design elements */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary-dark/40 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-white/20 rounded-full text-secondary">Acesso Exclusivo</span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Escritório Virtual Grupo GL
                </h2>
                <p className="text-secondary/90 leading-relaxed text-lg font-light">
                  A nossa área exclusiva para parceiros integrados, afiliados e cotistas. Acesse e tenha total transparência operacional.
                </p>
                
                {/* Funcionalidades List */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {[
                    { label: 'Dashboard Financeiro', icon: DollarSign },
                    { label: 'Gestão de Rede', icon: Users },
                    { label: 'Extratos Completos', icon: Activity },
                    { label: 'Contratos Digitais', icon: FileText },
                    { label: 'Central de Documentos', icon: Briefcase },
                    { label: 'Suporte Integrado', icon: HelpCircle },
                    { label: 'Área do Cotista', icon: Award },
                    { label: 'Área do Parceiro', icon: CheckCircle },
                    { label: 'Área de Indicações', icon: TrendingUp }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/5">
                      <item.icon className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-xs font-bold text-secondary">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 w-full flex flex-col justify-center items-center lg:items-end">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10 max-w-sm w-full mb-6">
                  <h4 className="font-extrabold text-lg text-secondary mb-2">Conectado ao BackOffice</h4>
                  <p className="text-xs text-secondary/80 leading-relaxed">
                    Acesse de qualquer dispositivo para acompanhar contratos, faturamentos, comissões de indicações e cotas ativas no ecossistema GL.
                  </p>
                </div>
                
                <a 
                  href="https://www.xn--glsoluoesdenegocios-byb.com.br/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full text-center inline-flex justify-center items-center px-8 py-4 bg-secondary text-primary font-black text-lg rounded-xl hover:bg-white hover:text-primary transition-all shadow-xl hover:-translate-y-0.5"
                >
                  ENTRAR NO ESCRITÓRIO VIRTUAL <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer & Contacts */}
      <footer id="contato" className="bg-primary text-secondary/80 py-20 border-t border-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand column */}
            <div className="space-y-6">
              <img 
                src="https://i.imgur.com/0M1yNP9.png" 
                alt="Grupo GL" 
                className="h-16 w-auto" 
                referrerPolicy="no-referrer"
              />
              <p className="text-sm leading-relaxed max-w-xs text-secondary/70">
                Grupo GL - Um Ecossistema Completo de Soluções, Negócios e Oportunidades Integradas de Alta Performance.
              </p>
            </div>
            
            {/* Services Links */}
            <div>
              <h4 className="text-secondary font-extrabold mb-6 uppercase text-sm tracking-wider">Empresas e Serviços</h4>
              <ul className="space-y-3.5 text-sm">
                <li><a href="https://smove.site/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">🚖 S-MOVE Mobilidade <ExternalLink className="h-3.5 w-3.5 opacity-50" /></a></li>
                <li><a href="https://app.powercrm.com.br/login?error=true" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">🛡️ Proteção Veicular <ExternalLink className="h-3.5 w-3.5 opacity-50" /></a></li>
                <li><a href="https://www.smovereabilita.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">💳 Reabilitação de Crédito <ExternalLink className="h-3.5 w-3.5 opacity-50" /></a></li>
                <li><a href="https://consorciotriangulo.com.br/representante/SMOVE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">🚗 Consórcios Integrados <ExternalLink className="h-3.5 w-3.5 opacity-50" /></a></li>
                <li><a href="https://www.prlsmovemobilidade.site/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">📈 Programa de Cotistas GL <ExternalLink className="h-3.5 w-3.5 opacity-50" /></a></li>
              </ul>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="text-secondary font-extrabold mb-6 uppercase text-sm tracking-wider">Links Rápidos</h4>
              <ul className="space-y-3.5 text-sm">
                <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a></li>
                <li><a href="#ceo" className="hover:text-white transition-colors">CEO da Operação</a></li>
                <li><a href="#parceiros" className="hover:text-white transition-colors">Seja um Parceiro</a></li>
                <li><a href="#escritorio-virtual" className="hover:text-white transition-colors font-bold">Escritório Virtual</a></li>
              </ul>
            </div>

            {/* Direct Contacts */}
            <div className="space-y-6">
              <h4 className="text-secondary font-extrabold uppercase text-sm tracking-wider">Contato Comercial</h4>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/message/NCCROSKDG3DMN1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className="bg-secondary text-primary p-2 rounded-lg group-hover:scale-105 transition-transform">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary/60 font-semibold uppercase tracking-wider">WhatsApp</p>
                    <p className="text-sm text-secondary font-bold">WhatsApp Comercial</p>
                  </div>
                </a>

                <div 
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5"
                >
                  <div className="bg-secondary text-primary p-2 rounded-lg">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary/60 font-semibold uppercase tracking-wider">E-mail</p>
                    <p className="text-sm text-secondary font-bold">E-mail Corporativo</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="text-center pt-8 border-t border-primary-dark/80 text-sm text-secondary/50 font-medium">
            &copy; 2026 Grupo GL. Todos os direitos reservados.
          </div>
          
        </div>
      </footer>
    </div>
  );
}
