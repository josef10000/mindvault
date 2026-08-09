"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Vault, 
  Compass, 
  Cpu, 
  Layout, 
  Brain, 
  Sparkles, 
  LogOut
} from "lucide-react";

import LifeOverview from "@/components/dashboard/LifeOverview";
import KnowledgeGraphVault from "@/components/dashboard/KnowledgeGraphVault";
import HabitsTracker from "@/components/dashboard/HabitsTracker";
import FocusJournal from "@/components/dashboard/FocusJournal";
import PluginsManager from "@/components/dashboard/PluginsManager";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"life" | "graph" | "databases" | "focus" | "plugins">("life");

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      
      {/* Top Main Navigation Bar */}
      <header className="border-b border-neutral-800 bg-black/90 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white text-black font-bold cursor-pointer" onClick={() => setActiveTab("life")}>
              <Vault className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                MindVault <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800 font-mono">Workspace 2.0</span>
              </h1>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 glass-panel p-1 rounded-xl border border-neutral-800">
            <button
              onClick={() => setActiveTab("life")}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 border ${
                activeTab === "life" ? "bg-white text-black border-white font-bold" : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Matriz de Vida</span>
            </button>

            <button
              onClick={() => setActiveTab("graph")}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 border ${
                activeTab === "graph" ? "bg-white text-black border-white font-bold" : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Nexo Radar</span>
            </button>

            <button
              onClick={() => setActiveTab("databases")}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 border ${
                activeTab === "databases" ? "bg-white text-black border-white font-bold" : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Registros</span>
            </button>

            <button
              onClick={() => setActiveTab("focus")}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 border ${
                activeTab === "focus" ? "bg-white text-black border-white font-bold" : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Câmara de Foco</span>
            </button>

            <button
              onClick={() => setActiveTab("plugins")}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 border ${
                activeTab === "plugins" ? "bg-white text-black border-white font-bold" : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Extensões</span>
            </button>
          </nav>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 p-1.5 rounded-xl">
              <div className="w-6 h-6 rounded-lg bg-white text-black flex items-center justify-center font-bold text-xs">
                U
              </div>
              <span className="text-xs font-medium text-neutral-300 hidden md:inline">Usuário MindVault</span>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 transition"
              title="Sair do MindVault"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="lg:hidden flex items-center justify-between overflow-x-auto gap-1 pt-3 border-t border-neutral-800 mt-2 font-mono">
          <button onClick={() => setActiveTab("life")} className={`text-[11px] px-2 py-1 rounded ${activeTab === 'life' ? 'bg-white text-black font-bold' : 'text-neutral-400'}`}>Matriz</button>
          <button onClick={() => setActiveTab("graph")} className={`text-[11px] px-2 py-1 rounded ${activeTab === 'graph' ? 'bg-white text-black font-bold' : 'text-neutral-400'}`}>Nexo</button>
          <button onClick={() => setActiveTab("databases")} className={`text-[11px] px-2 py-1 rounded ${activeTab === 'databases' ? 'bg-white text-black font-bold' : 'text-neutral-400'}`}>Registros</button>
          <button onClick={() => setActiveTab("focus")} className={`text-[11px] px-2 py-1 rounded ${activeTab === 'focus' ? 'bg-white text-black font-bold' : 'text-neutral-400'}`}>Foco</button>
          <button onClick={() => setActiveTab("plugins")} className={`text-[11px] px-2 py-1 rounded ${activeTab === 'plugins' ? 'bg-white text-black font-bold' : 'text-neutral-400'}`}>Extensões</button>
        </div>
      </header>

      {/* Main Workspace Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
        {activeTab === "life" && <LifeOverview />}
        {activeTab === "graph" && <KnowledgeGraphVault />}
        {activeTab === "databases" && <HabitsTracker />}
        {activeTab === "focus" && <FocusJournal />}
        {activeTab === "plugins" && <PluginsManager />}
      </main>

    </div>
  );
}
