"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Vault, 
  Sparkles, 
  Brain, 
  Compass, 
  Layout, 
  ArrowRight, 
  Lock, 
  Mail, 
  BookOpen, 
  Dumbbell, 
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu
} from "lucide-react";

export default function AuthShowcase() {
  const router = useRouter();
  const [activeFeature, setActiveFeature] = useState<"matrix" | "nexus" | "registers" | "extensions">("matrix");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 500);
  };

  const handleDemoAccess = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 300);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between p-4 md:p-8 max-w-7xl mx-auto text-white">
      {/* Top Header */}
      <header className="flex items-center justify-between py-4 border-b border-neutral-800 mb-8">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-white text-black font-bold">
            <Vault className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              MindVault <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800 font-mono">2.0 B&W</span>
            </h1>
            <p className="text-xs text-neutral-400">Sistema Operacional de Vida & Centro de Clareza Mental</p>
          </div>
        </div>

        <button 
          onClick={handleDemoAccess}
          className="hidden md:flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-white text-neutral-300 hover:text-white transition"
        >
          <span>Entrar no modo Demo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </header>

      {/* Main Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch my-auto">
        
        {/* Left Side (7 Cols): Interactive Tour */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium px-3 py-1 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800 mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>ARQUITETURA DE CLAREZA AUTORAL</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Sua mente com clareza absoluta. <br />
              <span className="text-neutral-400 font-normal">Sem ruídos. Sem distrações.</span>
            </h2>

            <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">
              O **MindVault** integra a sua visão de vida, nexo de conhecimento, leitura, hábitos e rotina de treino em um ecossistema monocromático de alta definição.
            </p>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="glass-panel rounded-2xl p-5 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 overflow-x-auto gap-2">
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider px-1">Conheça o sistema:</span>
              
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveFeature("matrix")}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 border ${
                    activeFeature === "matrix" 
                      ? "bg-white text-black border-white font-bold" 
                      : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Matriz de Vida</span>
                </button>

                <button
                  onClick={() => setActiveFeature("nexus")}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 border ${
                    activeFeature === "nexus" 
                      ? "bg-white text-black border-white font-bold" 
                      : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Nexo Radar</span>
                </button>

                <button
                  onClick={() => setActiveFeature("registers")}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 border ${
                    activeFeature === "registers" 
                      ? "bg-white text-black border-white font-bold" 
                      : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
                  }`}
                >
                  <Layout className="w-3.5 h-3.5" />
                  <span>Registros</span>
                </button>

                <button
                  onClick={() => setActiveFeature("extensions")}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 border ${
                    activeFeature === "extensions" 
                      ? "bg-white text-black border-white font-bold" 
                      : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Extensões</span>
                </button>
              </div>
            </div>

            {/* Feature Content Demo Box */}
            <div className="bg-black rounded-xl p-4 border border-neutral-800 min-h-[190px] flex flex-col justify-between">
              {activeFeature === "matrix" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-neutral-400" /> Módulo 1: Matriz de Vida & Foco
                    </span>
                    <span className="text-[11px] text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 font-mono">Clareza: 85%</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Acompanhamento visual em tempo real das 5 áreas da sua vida. Saiba exatamente quais metas demandam sua atenção hoje.
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-xs pt-1">
                    <div className="bg-neutral-950 p-2 rounded-lg border border-neutral-800">
                      <span className="text-neutral-500 block text-[10px]">Saúde & Treinos</span>
                      <span className="font-semibold text-white">4/5 Semanal</span>
                    </div>
                    <div className="bg-neutral-950 p-2 rounded-lg border border-neutral-800">
                      <span className="text-neutral-500 block text-[10px]">Leitura Ativa</span>
                      <span className="font-semibold text-white">Capítulo 7</span>
                    </div>
                    <div className="bg-neutral-950 p-2 rounded-lg border border-neutral-800">
                      <span className="text-neutral-500 block text-[10px]">Projetos Ativos</span>
                      <span className="font-semibold text-white">3 Focados</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === "nexus" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-neutral-400" /> Módulo 2: Nexo por Radar de Conhecimento
                    </span>
                    <span className="text-[11px] text-white bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 font-mono">42 Órbitas Conectadas</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Conecte pensamentos e projetos com associações inteligentes <code className="text-white bg-neutral-900 px-1 py-0.5 rounded border border-neutral-800">#Associação</code>. Linhas de órbita conectam suas ideias sem caixas fechadas.
                  </p>
                  <div className="bg-neutral-950 rounded-lg p-3 border border-neutral-800 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <span className="text-white">Ideia: Arquitetura MindVault 2.0</span>
                    </div>
                    <span className="text-[11px] text-neutral-400">Linha de órbita → #DesignMonocromatico</span>
                  </div>
                </div>
              )}

              {activeFeature === "registers" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <Layout className="w-4 h-4 text-neutral-400" /> Módulo 3: Registros do Vault (Livros & Hábitos)
                    </span>
                    <span className="text-[11px] text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Registros Integrados</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Organize seus livros lidos, fichas de treino e check-in diário de hábitos em um painel limpo e direto ao ponto.
                  </p>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between bg-neutral-950 p-2 rounded border border-neutral-800">
                      <span className="flex items-center gap-2 text-white">
                        <BookOpen className="w-3.5 h-3.5 text-neutral-400" /> Essencialismo (Greg McKeown)
                      </span>
                      <span className="text-[11px] text-white font-semibold">Lido ★ 5.0</span>
                    </div>
                    <div className="flex items-center justify-between bg-neutral-950 p-2 rounded border border-neutral-800">
                      <span className="flex items-center gap-2 text-white">
                        <Dumbbell className="w-3.5 h-3.5 text-neutral-400" /> Ficha de Treino A
                      </span>
                      <span className="text-[11px] text-neutral-400">Executado hoje</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === "extensions" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-neutral-400" /> Módulo 4: Extensões Autorais
                    </span>
                    <span className="text-[11px] text-white bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">Sistema Extensível</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Ative reprodutores de som silencioso, sintetizadores de IA e backups automáticos para o seu repositório pessoal no GitHub.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-neutral-300 pt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Arquitetura modular aberta para desenvolvimento de extensões</span>
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-500 border-t border-neutral-800">
                <span>Clique acima para testar os 4 módulos</span>
                <span className="text-white font-medium cursor-pointer hover:underline" onClick={handleDemoAccess}>
                  Acessar Demonstração Grátis →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (5 Cols): Authentication Form */}
        <div className="lg:col-span-5">
          <div className="glass-panel rounded-2xl p-6 md:p-8 border border-neutral-800 space-y-6 shadow-2xl relative">
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold text-white">
                {isRegistering ? "Criar sua conta no MindVault" : "Acessar seu MindVault"}
              </h3>
              <p className="text-xs text-neutral-400">
                {isRegistering 
                  ? "Comece agora a organizar seu conhecimento e vida" 
                  : "Seu centro de clareza mental e foco te espera"}
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">E-mail pessoal</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full bg-black border border-neutral-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">Senha secreta</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-3 text-neutral-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-black border border-neutral-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white hover:bg-neutral-200 text-black text-xs font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{isRegistering ? "Criar meu Vault Pessoal" : "Entrar no MindVault"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-neutral-800 w-full" />
              <span className="bg-black px-3 text-[11px] text-neutral-500 uppercase tracking-wider absolute">ou</span>
            </div>

            <button
              onClick={handleDemoAccess}
              type="button"
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium py-2.5 rounded-xl border border-neutral-800 transition flex items-center justify-center gap-2"
            >
              <Brain className="w-4 h-4 text-neutral-300" />
              <span>Experimentar em Modo Demonstração</span>
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-xs text-neutral-400 hover:text-white transition"
              >
                {isRegistering ? "Já tem uma conta? Clique aqui para entrar" : "Primeira vez? Crie sua conta grátis"}
              </button>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-neutral-500">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>Segurança e criptografia end-to-end</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="pt-8 border-t border-neutral-800 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <span>© {new Date().getFullYear()} MindVault - Sistema Operacional de Vida (Pure B&W)</span>
        <div className="flex items-center gap-4">
          <span className="hover:text-white cursor-pointer">Privacidade</span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer">Documentação</span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer">API Extensões</span>
        </div>
      </footer>
    </div>
  );
}
