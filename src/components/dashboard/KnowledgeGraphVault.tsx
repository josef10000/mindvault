"use client";

import React, { useState } from "react";
import { 
  Orbit, 
  FileText, 
  Plus, 
  Search, 
  Hash, 
  Sun,
  Star,
  Globe,
  Radio,
  Sparkles,
  Maximize2
} from "lucide-react";

interface PlanetNote {
  id: string;
  title: string;
  system: "Conhecimento" | "Vitalidade" | "Carreira" | "Finanças";
  starName: string;
  starColor: "gold" | "purple" | "cyan" | "emerald";
  content: string;
  associations: string[];
  updatedAt: string;
  orbitDistance: number; // 1 to 3
}

export default function KnowledgeGraphVault() {
  const [nodes, setNodes] = useState<PlanetNote[]>([
    {
      id: "p1",
      title: "Arquitetura MindVault Cosmos",
      system: "Carreira",
      starName: "Estrela Alfa MindVault",
      starColor: "cyan",
      content: "O Nexo Cósmico utiliza Sistemas Celestes com Estrelas Pulsantes. Conectado com #DesignCosmico e #NextJS15.",
      associations: ["DesignCosmico", "NextJS15"],
      updatedAt: "Hoje, 14:30",
      orbitDistance: 1
    },
    {
      id: "p2",
      title: "Design de Estrelas & Órbitas",
      system: "Conhecimento",
      starName: "Estrela Névoa de Estudo",
      starColor: "purple",
      content: "Uso de estrelas pulsantes com auras de luz (Dourado, Roxo, Cyan, Esmeralda) em fundo espaço profundo. Associação: #ArquiteturaCosmos.",
      associations: ["ArquiteturaCosmos"],
      updatedAt: "Ontem",
      orbitDistance: 1
    },
    {
      id: "p3",
      title: "Fichamento Essencialismo",
      system: "Conhecimento",
      starName: "Estrela Névoa de Estudo",
      starColor: "purple",
      content: "Eliminação do desnecessário para clareza absoluta. Associação: #OrbiatVitalidade.",
      associations: ["OrbiatVitalidade"],
      updatedAt: "04 Ago",
      orbitDistance: 2
    },
    {
      id: "p4",
      title: "Rotina de Treino Orbital",
      system: "Vitalidade",
      starName: "Estrela Solar de Saúde",
      starColor: "gold",
      content: "Hipertrofia 4x na semana focada em consistência e clareza física.",
      associations: ["OrbiatVitalidade"],
      updatedAt: "01 Ago",
      orbitDistance: 1
    }
  ]);

  const [activeNodeId, setActiveNodeId] = useState<string>("p1");
  const [selectedSystem, setSelectedSystem] = useState<string>("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[0];

  const handleContentChange = (newContent: string) => {
    const extractedTags = Array.from(newContent.matchAll(/#([a-zA-Z0-9_]+)/g)).map(match => match[1]);
    setNodes(nodes.map(n => n.id === activeNode.id ? { ...n, content: newContent, associations: extractedTags } : n));
  };

  const handleCreateNode = () => {
    const newNode: PlanetNote = {
      id: Date.now().toString(),
      title: "Novo Planeta de Conhecimento",
      system: "Conhecimento",
      starName: "Estrela Névoa de Estudo",
      starColor: "purple",
      content: "Escreva suas ideias aqui... Conecte com #Associação",
      associations: [],
      updatedAt: "Agora",
      orbitDistance: 2
    };
    setNodes([newNode, ...nodes]);
    setActiveNodeId(newNode.id);
  };

  const getStarColorClasses = (color: string) => {
    switch (color) {
      case "gold": return "bg-amber-400 text-amber-300 border-amber-500/40 star-glow-gold";
      case "purple": return "bg-purple-400 text-purple-300 border-purple-500/40 star-glow-purple";
      case "cyan": return "bg-sky-400 text-sky-300 border-sky-500/40 star-glow-cyan";
      default: return "bg-emerald-400 text-emerald-300 border-emerald-500/40 star-glow-emerald";
    }
  };

  return (
    <div className="space-y-6 text-white">
      {/* Top Bar Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Orbit className="w-5 h-5 text-purple-400" />
            <span>Nexo Cósmico (Sistemas, Estrelas Pulsantes & Planetas Orbitando)</span>
          </h2>
          <p className="text-xs text-slate-400">
            Navegue pelos seus Sistemas Celestes. Cada Estrela Mestre possui brilho pulsante e atrai notas orbitais com <code className="text-amber-300 bg-space-950 px-1 py-0.5 rounded border border-slate-800 font-mono">#Associação</code>.
          </p>
        </div>

        <button
          onClick={handleCreateNode}
          className="bg-amber-500 hover:bg-amber-400 text-black text-xs px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-amber-500/20 transition self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Criar Planeta de Nota</span>
        </button>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side (7 Cols): Notes List + Active Note Editor */}
        <div className="lg:col-span-7 glass-panel rounded-2xl border border-slate-800 p-4 space-y-4">
          
          {/* Note Selection & Search Bar */}
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar planeta ou #associação..."
                className="w-full bg-space-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-500"
              />
            </div>
            <span className="text-[11px] text-slate-400 font-mono">{nodes.length} planetas em órbita</span>
          </div>

          {/* System Filters & Notes Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {nodes
              .filter(n => n.title.toLowerCase().includes(searchTerm.toLowerCase()) || n.content.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(n => (
                <button
                  key={n.id}
                  onClick={() => setActiveNodeId(n.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition flex items-center gap-1.5 border ${
                    activeNodeId === n.id
                      ? "bg-purple-600 text-white border-purple-400 font-bold shadow-md shadow-purple-500/30"
                      : "bg-space-900 text-slate-400 border-slate-800 hover:text-white"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-purple-300" />
                  <span>{n.title}</span>
                </button>
              ))}
          </div>

          {/* Active Note Title & Content Editor */}
          <div className="space-y-3 pt-2">
            <input
              type="text"
              value={activeNode.title}
              onChange={(e) => setNodes(nodes.map(n => n.id === activeNode.id ? { ...n, title: e.target.value } : n))}
              className="text-lg font-bold text-white bg-transparent border-b border-slate-800 pb-1 w-full focus:outline-none focus:border-purple-400"
            />

            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
              <span className="px-2 py-0.5 rounded bg-space-900 border border-slate-800 text-amber-300 flex items-center gap-1">
                <Sun className="w-3 h-3 text-amber-400" /> {activeNode.starName}
              </span>
              <span>• {activeNode.updatedAt}</span>
              {activeNode.associations.length > 0 && (
                <span className="text-purple-300 flex items-center gap-1 ml-auto font-semibold">
                  <Hash className="w-3 h-3 text-purple-400" /> {activeNode.associations.length} conexões
                </span>
              )}
            </div>

            <textarea
              rows={8}
              value={activeNode.content}
              onChange={(e) => handleContentChange(e.target.value)}
              className="w-full bg-space-950 border border-slate-800 rounded-xl p-3.5 text-xs text-white font-mono leading-relaxed focus:outline-none focus:border-purple-500/80 resize-none"
            />
          </div>
        </div>

        {/* Right Side (5 Cols): Starlight Pulsing Orbit Viewer */}
        <div className="lg:col-span-5 glass-panel rounded-2xl border border-purple-500/20 p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-white flex items-center gap-2">
              <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Visualizador de Estrelas & Planetas</span>
            </h3>
            <span className="text-[10px] text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 font-mono">Órbitas Celestes</span>
          </div>

          {/* Starlight Orbit Radar Canvas */}
          <div className="bg-space-950 rounded-xl p-4 border border-slate-800 min-h-[290px] flex flex-col justify-between relative overflow-hidden">
            {/* Orbital Rings Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-64 h-64 border border-purple-400 rounded-full" />
              <div className="w-44 h-44 border border-amber-400 rounded-full absolute" />
              <div className="w-24 h-24 border border-sky-400 rounded-full absolute" />
            </div>

            <div className="relative z-10 space-y-3">
              <span className="text-[11px] text-slate-400 font-mono block">Estrelas Mestre & Planetas Ativos:</span>

              <div className="space-y-2">
                {nodes.map(n => {
                  const isSelected = activeNodeId === n.id;
                  return (
                    <div
                      key={n.id}
                      onClick={() => setActiveNodeId(n.id)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition flex items-center justify-between ${
                        isSelected 
                          ? "bg-space-900 border-purple-400 text-white shadow-lg shadow-purple-500/20"
                          : "bg-space-950 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3.5 h-3.5 rounded-full animate-pulse ${getStarColorClasses(n.starColor)}`} />
                        <div>
                          <h4 className="font-semibold text-xs text-white">{n.title}</h4>
                          <span className="text-[10px] text-slate-400 block font-mono">Orbitando {n.starName}</span>
                        </div>
                      </div>

                      {n.associations.length > 0 && (
                        <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                          #{n.associations[0]}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Use #Tags para conectar órbitas</span>
              <span className="text-amber-400 font-medium cursor-pointer hover:underline flex items-center gap-1">
                <Maximize2 className="w-3 h-3" /> Ampliar Cosmos
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
