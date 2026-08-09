"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  FileText, 
  Plus, 
  Search, 
  Hash, 
  Share2, 
  Compass,
  Radio,
  Sliders,
  Maximize2
} from "lucide-react";

interface NexusNode {
  id: string;
  title: string;
  category: string;
  content: string;
  associations: string[];
  updatedAt: string;
  orbitRadius: number; // 1 to 3
}

export default function KnowledgeGraphVault() {
  const [nodes, setNodes] = useState<NexusNode[]>([
    {
      id: "n1",
      title: "Arquitetura MindVault 2.0",
      category: "Projetos",
      content: "O MindVault utiliza o Nexo por Radar monocromático. Conectado com #DesignMonocromatico e #NextJS15.",
      associations: ["DesignMonocromatico", "NextJS15"],
      updatedAt: "Hoje, 14:30",
      orbitRadius: 1
    },
    {
      id: "n2",
      title: "Design Monocromático",
      category: "Estética",
      content: "Uso de Preto Absoluto (#000000) e Branco Puro (#FFFFFF) com linhas minimalistas de alto contraste. Associação: #ArquiteturaMindVault.",
      associations: ["ArquiteturaMindVault"],
      updatedAt: "Ontem",
      orbitRadius: 1
    },
    {
      id: "n3",
      title: "Fichamento Essencialismo",
      category: "Leitura",
      content: "Eliminação do desnecessário para clareza absoluta. Associação: #MatrizDeVida2026.",
      associations: ["MatrizDeVida2026"],
      updatedAt: "04 Ago",
      orbitRadius: 2
    },
    {
      id: "n4",
      title: "Rotina de Treinos",
      category: "Saúde",
      content: "Hipertrofia 4x na semana focada em consistência e clareza física.",
      associations: ["MatrizDeVida2026"],
      updatedAt: "01 Ago",
      orbitRadius: 3
    }
  ]);

  const [activeNodeId, setActiveNodeId] = useState<string>("n1");
  const [searchTerm, setSearchTerm] = useState("");
  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[0];

  const handleContentChange = (newContent: string) => {
    const extractedTags = Array.from(newContent.matchAll(/#([a-zA-Z0-9_]+)/g)).map(match => match[1]);
    setNodes(nodes.map(n => n.id === activeNode.id ? { ...n, content: newContent, associations: extractedTags } : n));
  };

  const handleCreateNode = () => {
    const newNode: NexusNode = {
      id: Date.now().toString(),
      title: "Novo Bloco de Conhecimento",
      category: "Geral",
      content: "Escreva suas ideias aqui... Conecte com #Associação",
      associations: [],
      updatedAt: "Agora",
      orbitRadius: 2
    };
    setNodes([newNode, ...nodes]);
    setActiveNodeId(newNode.id);
  };

  return (
    <div className="space-y-6 text-white">
      {/* Top Bar Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-white" />
            <span>Nexo de Conhecimento (Radar de Órbitas & Conexões)</span>
          </h2>
          <p className="text-xs text-neutral-400">
            Escreva em texto livre e associe suas ideias com marcadores <code className="text-white bg-neutral-900 px-1 py-0.5 rounded border border-neutral-800 font-mono">#Associação</code>.
          </p>
        </div>

        <button
          onClick={handleCreateNode}
          className="bg-white hover:bg-neutral-200 text-black text-xs px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 transition self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Criar Bloco</span>
        </button>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side (7 Cols): Notes List + Active Note Editor */}
        <div className="lg:col-span-7 glass-panel rounded-2xl border border-neutral-800 p-4 space-y-4">
          
          {/* Note Selection & Search Bar */}
          <div className="flex items-center gap-2 pb-3 border-b border-neutral-800">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-neutral-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar bloco ou #associação..."
                className="w-full bg-black border border-neutral-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-white"
              />
            </div>
            <span className="text-[11px] text-neutral-500 font-mono">{nodes.length} blocos no acervo</span>
          </div>

          {/* Notes Pills Selector */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {nodes
              .filter(n => n.title.toLowerCase().includes(searchTerm.toLowerCase()) || n.content.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(n => (
                <button
                  key={n.id}
                  onClick={() => setActiveNodeId(n.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition flex items-center gap-1.5 border ${
                    activeNodeId === n.id
                      ? "bg-white text-black border-white font-bold"
                      : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
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
              className="text-lg font-bold text-white bg-transparent border-b border-neutral-800 pb-1 w-full focus:outline-none focus:border-white"
            />

            <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
              <span className="px-2 py-0.5 rounded bg-black border border-neutral-800 text-white">
                {activeNode.category}
              </span>
              <span>• {activeNode.updatedAt}</span>
              {activeNode.associations.length > 0 && (
                <span className="text-white flex items-center gap-1 ml-auto font-semibold">
                  <Hash className="w-3 h-3 text-neutral-400" /> {activeNode.associations.length} associações
                </span>
              )}
            </div>

            <textarea
              rows={8}
              value={activeNode.content}
              onChange={(e) => handleContentChange(e.target.value)}
              className="w-full bg-black border border-neutral-800 rounded-xl p-3.5 text-xs text-white font-mono leading-relaxed focus:outline-none focus:border-white resize-none"
            />
          </div>
        </div>

        {/* Right Side (5 Cols): Monochromatic Radar Nexus */}
        <div className="lg:col-span-5 glass-panel rounded-2xl border border-neutral-800 p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-white flex items-center gap-2">
              <Radio className="w-4 h-4 text-white" />
              <span>Radar de Conhecimento Monocromático</span>
            </h3>
            <span className="text-[10px] text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 font-mono">Órbitas 1-3</span>
          </div>

          {/* Interactive Radar Visual Simulation */}
          <div className="bg-black rounded-xl p-4 border border-neutral-800 min-h-[290px] flex flex-col justify-between relative overflow-hidden">
            {/* Radar Grid Lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-64 h-64 border border-white rounded-full" />
              <div className="w-44 h-44 border border-white rounded-full absolute" />
              <div className="w-24 h-24 border border-white rounded-full absolute" />
            </div>
            
            <div className="relative z-10 space-y-3">
              <span className="text-[11px] text-neutral-500 font-mono block">Órbitas ativas em frequência:</span>

              <div className="space-y-2">
                {nodes.map(n => (
                  <div
                    key={n.id}
                    onClick={() => setActiveNodeId(n.id)}
                    className={`p-2.5 rounded-lg border text-xs cursor-pointer transition ${
                      activeNodeId === n.id 
                        ? "bg-white text-black border-white font-bold shadow-lg"
                        : "bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] truncate">{n.title}</span>
                      <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded border ${
                        activeNodeId === n.id ? "bg-black text-white border-black" : "bg-neutral-900 text-neutral-400 border-neutral-800"
                      }`}>
                        Órbita {n.orbitRadius}
                      </span>
                    </div>
                    {n.associations.length > 0 && (
                      <span className={`text-[10px] font-mono block truncate ${activeNodeId === n.id ? "text-neutral-700" : "text-neutral-500"}`}>
                        # {n.associations.join(", #")}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500">
              <span>Use #Tags para criar pontes de órbita</span>
              <span className="text-white font-medium cursor-pointer hover:underline flex items-center gap-1">
                <Maximize2 className="w-3 h-3" /> Ampliar Radar
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
