
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Zap,
  CheckCircle2,
  ShieldCheck,
  Search,
  Code2,
  Target,
  TrendingUp,
  Cpu,
  Database,
  Network,
  BarChart4,
  EyeOff,
  LineChart,
  ShieldAlert,
  Server,
  Users,
  Activity,
  Globe,
  Lock,
  MousePointer2,
  BarChart3
} from 'lucide-react';

// --- CONSTANTS ---
const LOGO_URL = "https://midias.lcai.com.br/images/2025/12/20/Sem-titulo-2-1.png";
const WHATSAPP_LINK = "https://wa.me/5519999611441";

// --- COMPONENTS ---

const SectionHeader: React.FC<{ tag: string; title: string; subtitle?: string; light?: boolean }> = ({ tag, title, subtitle, light }) => (
  <div className="mb-20">
    <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">{tag}</span>
    <h2 className={`text-4xl md:text-7xl font-black italic tracking-tighter leading-none ${light ? 'text-white' : 'text-white'}`}>
      {title}
    </h2>
    {subtitle && <p className="text-gray-400 text-xl font-light mt-6 max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-blue-400 transition-colors"
      >
        <span className="text-lg font-bold">{question}</span>
        {isOpen ? <span className="text-blue-500 font-bold">-</span> : <span className="text-blue-500 font-bold">+</span>}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed font-light">{answer}</p>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center group">
          <img src={LOGO_URL} alt="LCAI" className="h-10 md:h-12 w-auto object-contain" />
        </a>
        <div className="hidden md:flex items-center gap-10">
           <a href="#inteligencia" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Inteligência</a>
           <a href="#servicos" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Serviços</a>
           <a href="#metodo" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Metodologia</a>
           <a href="#diagnostico" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Consultoria</a>
        </div>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          className="bg-blue-600 text-white hover:bg-white hover:text-black px-6 py-3 rounded-full text-[10px] font-black transition-all shadow-xl uppercase tracking-tighter"
        >
          Diagnóstico de Dados
        </a>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative pt-40 pb-32 md:pt-64 md:pb-48 overflow-hidden min-h-screen flex items-center">
          <div className="scanline"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full hero-glow pointer-events-none opacity-40"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-white/10 text-blue-400 text-[10px] font-black mb-10 tracking-[0.4em] uppercase">
              <Activity size={14} className="animate-pulse" /> Engenharia de Dados de Alta Performance
            </div>
            
            <h1 className="text-5xl md:text-[10rem] font-black leading-[0.85] mb-12 tracking-tighter uppercase">
              Dados que <br /> 
              Geram <span className="gradient-text italic inline-block pr-12">Escala</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-3xl mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Na <span className="text-white font-bold">LCAI</span>, nós não gerenciamos campanhas; nós construímos a <span className="text-white italic">infraestrutura tecnológica</span> que torna o crescimento do seu lucro inevitável.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#diagnostico"
                className="group bg-blue-600 text-white px-12 py-7 rounded-full font-black text-xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-[0_30px_60px_-15px_rgba(37,99,235,0.4)]"
              >
                SOLICITAR PLANO TÉCNICO
                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* SEÇÃO 01: INTELIGÊNCIA (O PORQUÊ) */}
        <section id="inteligencia" className="py-32 relative bg-zinc-950/40 border-y border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              tag="01. Inteligência de Dados"
              title={<>A Escuridão dos Dados <br/> <span className="text-blue-500">Mata seu Lucro</span></>}
              subtitle="40% das suas vendas são invisíveis para o Facebook e Google devido ao iOS14 e AdBlockers. Você está escalando no escuro."
            />

            <div className="grid lg:grid-cols-2 gap-16">
               <div className="space-y-6">
                  <div className="p-8 glass rounded-[2.5rem] border border-red-500/20 group hover:border-red-500/40 transition-all">
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                        <EyeOff size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Sub-Atribuição de Vendas</h4>
                        <p className="text-gray-400 text-sm font-light">Seu dashboard do Meta mostra 10 vendas, mas seu banco mostra 15. Você está perdendo a chance de escalar o que já está funcionando.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 glass rounded-[2.5rem] border border-blue-500/20 group hover:border-blue-500/40 transition-all">
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                        <Database size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Engenharia Server-Side</h4>
                        <p className="text-gray-400 text-sm font-light">Enviamos os dados direto do servidor (CAPI), ignorando bloqueios e garantindo que o algoritmo receba 100% dos sinais de compra.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 glass rounded-[2.5rem] border border-cyan-500/20 group hover:border-cyan-500/40 transition-all">
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-500 shrink-0">
                        <BarChart3 size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Decisões por Margem, não Cliques</h4>
                        <p className="text-gray-400 text-sm font-light">Sincronizamos seu CRM com dashboards para que você veja o ROI real por produto e canal em tempo real.</p>
                      </div>
                    </div>
                  </div>
               </div>

               <div className="relative flex items-center justify-center">
                  <div className="glass p-10 rounded-[3rem] border border-white/10 relative z-10 w-full">
                     <div className="flex items-center gap-4 mb-10">
                        <Activity className="text-blue-500" />
                        <span className="text-xs font-black uppercase tracking-widest">Simulação de Performance</span>
                     </div>
                     <div className="space-y-10">
                        <div>
                          <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-tighter">
                            <span>Rastreamento Padrão (Amador)</span>
                            <span className="text-red-500">60% Precisão</span>
                          </div>
                          <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-[60%]"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-tighter">
                            <span>Engenharia LCAI (Server-Side)</span>
                            <span className="text-blue-500">99.8% Precisão</span>
                          </div>
                          <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                          </div>
                        </div>
                     </div>
                     <div className="mt-12 pt-8 border-t border-white/5 flex gap-8 items-center justify-center">
                        <div className="text-center">
                          <p className="text-2xl font-black italic">40%</p>
                          <p className="text-[10px] text-gray-500 uppercase font-black">Recuperação de Dados</p>
                        </div>
                        <div className="w-px h-10 bg-white/10"></div>
                        <div className="text-center">
                          <p className="text-2xl font-black italic text-blue-500">-22%</p>
                          <p className="text-[10px] text-gray-500 uppercase font-black">Custo por Aquisição</p>
                        </div>
                     </div>
                  </div>
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
               </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 02: SERVIÇOS (O QUÊ) */}
        <section id="servicos" className="py-32 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              tag="02. Nossas Verticais"
              title={<>A Stack de <span className="text-blue-500">Engenharia</span> <br/> da Nova Economia</>}
              subtitle="Não entregamos 'posts' ou 'campanhas'. Entregamos sistemas de alta disponibilidade que geram dados e vendas."
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Engenharia de Dados",
                  subtitle: "Atribuição Server-Side",
                  desc: "Blindamos seu rastreamento contra iOS14 e Cookies. GTM Server-Side, CAPI do Facebook, Google Enhanced Conversions e BigQuery.",
                  icon: Server,
                  color: "blue"
                },
                {
                  title: "BI & Dashboards",
                  subtitle: "Clareza de Lucro Real",
                  desc: "Criamos painéis no Looker Studio que conectam Marketing, CRM e Financeiro. Você verá o CAC, LTV e ROI sem filtros ou mentiras.",
                  icon: BarChart4,
                  color: "purple"
                },
                {
                  title: "Automação via IA",
                  subtitle: "Escala sem Equipe",
                  desc: "Implementamos infraestrutura n8n para automatizar processos. Qualificamos leads via IA e recuperamos vendas de forma autônoma.",
                  icon: Network,
                  color: "cyan"
                }
              ].map((s, i) => (
                <div key={i} className="glass-card p-12 rounded-[3.5rem] group relative overflow-hidden flex flex-col h-full">
                  <div className={`absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity`}>
                    <s.icon size={120} />
                  </div>
                  <s.icon size={48} className={`mb-8 ${s.color === 'blue' ? 'text-blue-500' : s.color === 'purple' ? 'text-purple-500' : 'text-cyan-500'}`} />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">{s.subtitle}</h4>
                  <h3 className="text-3xl font-bold mb-6 italic tracking-tighter">{s.title}</h3>
                  <p className="text-gray-400 font-light mb-10 leading-relaxed text-lg">{s.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-blue-500 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all cursor-pointer">
                    Saber Detalhes Técnicos <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 03: METODOLOGIA (O COMO) */}
        <section id="metodo" className="py-32 bg-zinc-950/60 border-y border-white/5 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <SectionHeader 
                  tag="03. Metodologia"
                  title={<>Arquitetura de <br/> <span className="text-blue-500">Implementação</span></>}
                />
                <div className="space-y-12">
                  {[
                    { step: "01", title: "Auditoria Técnica", desc: "Varredura total em pixels, tags e fluxos de CRM. Encontramos os 'furos no balde' de dados.", icon: Search },
                    { step: "02", title: "Desenho da Solução", desc: "Desenhamos o diagrama de dados e automação que sua escala exige.", icon: Target },
                    { step: "03", title: "Deploy e Setup", desc: "Implementamos a infraestrutura (n8n, CAPI, BI) no seu ambiente.", icon: Code2 },
                    { step: "04", title: "Governança", desc: "Monitoramento contínuo para garantir que os dados continuem limpos.", icon: ShieldCheck }
                  ].map((m, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="shrink-0 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 font-black text-xl border border-white/5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {m.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{m.title}</h4>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                 <div className="relative">
                    <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full"></div>
                    <div className="glass p-1 rounded-[4rem] border border-white/10 overflow-hidden">
                       <img 
                        src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop" 
                        alt="Data Analytics" 
                        className="w-full h-auto rounded-[3.8rem] opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                       />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 04: CONSULTORIA (O PRÓXIMO PASSO) */}
        <section id="diagnostico" className="py-40 relative scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="glass p-16 md:p-24 rounded-[4rem] border border-white/10 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
               
               <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] block mb-10">Agendamento de Diagnóstico</span>
               <h2 className="text-5xl md:text-9xl font-black mb-12 italic leading-[0.85] tracking-tighter uppercase">
                 Profissionalize <br/> sua <span className="gradient-text inline-block pr-12 pb-2">Operação</span>
               </h2>
               <p className="text-gray-400 text-xl md:text-3xl mb-16 font-light max-w-3xl mx-auto leading-relaxed">
                 O amadorismo técnico custa 3x mais caro do que a engenharia. Vamos auditar sua infraestrutura e blindar seu lucro.
               </p>
               
               <div className="flex flex-col items-center gap-10">
                  <a 
                   href={WHATSAPP_LINK} 
                   target="_blank"
                   className="group bg-white text-black px-16 py-9 rounded-full font-black text-2xl flex items-center gap-6 hover:bg-blue-600 hover:text-white transition-all shadow-2xl"
                 >
                   FALAR COM UM ENGENHEIRO
                   <ArrowRight size={36} className="group-hover:translate-x-2 transition-transform" />
                 </a>
                 <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                   <div className="flex items-center gap-2"><Lock size={14} className="text-blue-500" /> Ativos Próprios</div>
                   <div className="flex items-center gap-2"><Globe size={14} className="text-blue-500" /> Escala Global</div>
                   <div className="flex items-center gap-2"><MousePointer2 size={14} className="text-blue-500" /> Atribuição 100%</div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* FAQ - TÉCNICO E ESTRATÉGICO */}
        <section className="py-32 bg-black/20">
          <div className="max-w-3xl mx-auto px-6">
             <div className="text-center mb-16">
               <h2 className="text-4xl font-black italic mb-4">Perguntas de Consultoria</h2>
               <p className="text-gray-500 font-light italic">Tudo o que você precisa saber antes de iniciar a engenharia.</p>
             </div>
             <div className="glass p-8 rounded-[3rem] border border-white/5">
                {[
                  { q: "A LCAI é uma agência de tráfego?", a: "Não. Somos uma consultoria de engenharia de dados. Enquanto agências 'apertam botões', nós blindamos a infraestrutura para que qualquer agência ou equipe performe melhor com dados limpos." },
                  { q: "Quais ferramentas vocês utilizam?", a: "Trabalhamos com o ecossistema Google (GTM, GA4, BigQuery, Looker Studio), Meta CAPI, e infraestrutura própria de automação usando n8n (Self-Hosted)." },
                  { q: "Eu perco o acesso ao que for construído?", a: "Nunca. Construímos ativos que pertencem à sua empresa. Se nossa consultoria acabar amanhã, toda a infraestrutura de dados e automação continua rodando no seu ambiente." },
                  { q: "Como os dados ajudam na escala real?", a: "Com atribuição perfeita, você sabe exatamente qual anúncio está vendendo. Isso permite que os algoritmos do Facebook e Google otimizem sua conta com inteligência real, baixando seu CPA drasticamente." }
                ].map((item, i) => (
                  <AccordionItem key={i} question={item.q} answer={item.a} />
                ))}
             </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-md">
              <img src={LOGO_URL} alt="LCAI" className="h-14 w-auto mb-8" />
              <p className="text-gray-500 text-sm leading-relaxed font-light mb-8">
                LCAI - Automações Inteligentes. <br/>
                Especialistas em transformar caos em clareza através da engenharia de dados e automação avançada.
              </p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-blue-500 hover:text-white"><Globe size={18} /></div>
                 <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-blue-500 hover:text-white"><Network size={18} /></div>
              </div>
            </div>
            <div className="flex flex-col items-end text-right">
              <p className="text-white font-black text-xl mb-6 italic uppercase tracking-tighter">Otimizando o Presente, <br/> Automatizando o Futuro.</p>
              <nav className="flex gap-8 mb-12">
                 <a href="#inteligencia" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Dados</a>
                 <a href="#servicos" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Serviços</a>
                 <a href="#diagnostico" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Contato</a>
              </nav>
              <p className="text-gray-700 text-[10px] uppercase tracking-[0.3em] font-bold">
                © 2024 LCAI - Automações Inteligentes <br/> 
                Engenharia de Performance v6.0 | Single Page
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
