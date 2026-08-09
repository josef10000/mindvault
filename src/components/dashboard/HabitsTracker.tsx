"use client";

import React, { useState } from "react";
import { 
  Layout, 
  BookOpen, 
  Dumbbell, 
  CheckSquare, 
  Star, 
  Check, 
  Flame
} from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  status: "Lendo" | "Lido" | "Quero Ler";
  rating: number;
  progress: number;
}

interface Workout {
  id: string;
  name: string;
  type: string;
  lastDone: string;
  status: "Concluído" | "Pendente";
}

interface HabitItem {
  id: string;
  title: string;
  streak: number;
  completedToday: boolean;
}

export default function HabitsTracker() {
  const [activeTab, setActiveTab] = useState<"books" | "workouts" | "habits">("books");

  // Books State
  const [books, setBooks] = useState<Book[]>([
    { id: "b1", title: "Essencialismo", author: "Greg McKeown", status: "Lido", rating: 5, progress: 100 },
    { id: "b2", title: "Hábitos Atômicos", author: "James Clear", status: "Lendo", rating: 5, progress: 72 },
    { id: "b3", title: "Deep Work (Trabalho Focado)", author: "Cal Newport", status: "Quero Ler", rating: 0, progress: 0 }
  ]);

  // Workouts State
  const [workouts, setWorkouts] = useState<Workout[]>([
    { id: "w1", name: "Treino A: Peito + Tríceps", type: "Hipertrofia", lastDone: "Hoje", status: "Concluído" },
    { id: "w2", name: "Treino B: Costas + BÍceps", type: "Hipertrofia", lastDone: "Ontem", status: "Concluído" },
    { id: "w3", name: "Treino C: Pernas + Ombros", type: "Força", lastDone: "Amanhã", status: "Pendente" }
  ]);

  // Daily Habits State
  const [habits, setHabits] = useState<HabitItem[]>([
    { id: "h1", title: "Beber 3L de água", streak: 12, completedToday: true },
    { id: "h2", title: "Ler 20 páginas de livro", streak: 8, completedToday: true },
    { id: "h3", title: "Meditação / Clareza (10 min)", streak: 5, completedToday: false },
    { id: "h4", title: "Treino do dia realizado", streak: 14, completedToday: true }
  ]);

  const toggleHabit = (id: string) => {
    setHabits(habits.map(h => {
      if (h.id === id) {
        return {
          ...h,
          completedToday: !h.completedToday,
          streak: !h.completedToday ? h.streak + 1 : Math.max(0, h.streak - 1)
        };
      }
      return h;
    }));
  };

  return (
    <div className="space-y-6 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Layout className="w-5 h-5 text-white" />
            <span>Registros do Vault: Leituras, Treinos & Hábitos</span>
          </h2>
          <p className="text-xs text-neutral-400">
            Acompanhe o desenvolvimento de rotinas, leituras ativas e fichas de exercícios em um painel unificado.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="glass-panel p-1 rounded-xl flex border border-neutral-800 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("books")}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 border ${
              activeTab === "books" ? "bg-white text-black border-white font-bold" : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Livros & Leituras</span>
          </button>

          <button
            onClick={() => setActiveTab("workouts")}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 border ${
              activeTab === "workouts" ? "bg-white text-black border-white font-bold" : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
            }`}
          >
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Treinos & Saúde</span>
          </button>

          <button
            onClick={() => setActiveTab("habits")}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 border ${
              activeTab === "habits" ? "bg-white text-black border-white font-bold" : "bg-black text-neutral-400 border-neutral-800 hover:text-white"
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Hábitos Diários</span>
          </button>
        </div>
      </div>

      {/* Main Database Content Table */}
      <div className="glass-panel rounded-2xl border border-neutral-800 p-5 space-y-4">
        
        {/* Tab 1: Books Database View */}
        {activeTab === "books" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Acervo de Leituras</span>
              <span className="text-xs text-neutral-400 font-mono">{books.length} Livros Registrados</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-neutral-800 text-neutral-400 font-medium pb-2">
                    <th className="pb-3 font-semibold">Livro & Autor</th>
                    <th className="pb-3 font-semibold">Status</th>
                    <th className="pb-3 font-semibold">Progresso</th>
                    <th className="pb-3 font-semibold text-right">Avaliação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {books.map(b => (
                    <tr key={b.id} className="hover:bg-neutral-900/50 transition">
                      <td className="py-3 font-medium text-white">
                        <div>{b.title}</div>
                        <div className="text-[10px] text-neutral-500 font-mono">{b.author}</div>
                      </td>
                      <td className="py-3">
                        <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold border ${
                          b.status === "Lido" ? "bg-white text-black border-white" :
                          b.status === "Lendo" ? "bg-neutral-900 text-white border-neutral-700" :
                          "bg-black text-neutral-500 border-neutral-800"
                        }`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="py-3 w-40">
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-black border border-neutral-800 rounded-full h-1.5">
                            <div className="bg-white h-full rounded-full" style={{ width: `${b.progress}%` }} />
                          </div>
                          <span className="text-[10px] font-mono text-neutral-400">{b.progress}%</span>
                        </div>
                      </td>
                      <td className="py-3 text-right">
                        <div className="flex items-center justify-end gap-1 text-white">
                          {b.rating > 0 ? (
                            <>
                              <Star className="w-3.5 h-3.5 fill-white" />
                              <span className="font-bold text-white font-mono">{b.rating}.0</span>
                            </>
                          ) : (
                            <span className="text-neutral-600 text-[10px]">-</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Workouts View */}
        {activeTab === "workouts" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Fichas de Treino Semanal</span>
              <span className="text-xs text-neutral-400 font-mono">Foco: Hipertrofia & Força</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {workouts.map(w => (
                <div key={w.id} className="bg-black p-4 rounded-xl border border-neutral-800 hover:border-neutral-700 transition space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 text-white border border-neutral-800 font-mono">{w.type}</span>
                    <span className={`text-[10px] font-bold ${w.status === "Concluído" ? "text-white" : "text-neutral-400"}`}>
                      {w.status}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{w.name}</h4>
                    <span className="text-[10px] text-neutral-500">Última execução: {w.lastDone}</span>
                  </div>
                  <button className="w-full text-xs py-1.5 rounded-lg bg-neutral-900 hover:bg-white text-neutral-300 hover:text-black transition font-bold border border-neutral-800">
                    Iniciar Ficha de Treino
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Habits Check-in */}
        {activeTab === "habits" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Check-in de Hábitos de Hoje</span>
              <span className="text-xs text-white font-mono font-bold">14 dias de sequência máxima</span>
            </div>

            <div className="space-y-2">
              {habits.map(h => (
                <div 
                  key={h.id}
                  onClick={() => toggleHabit(h.id)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    h.completedToday 
                      ? "bg-neutral-900 border-white text-white" 
                      : "bg-black border-neutral-800 text-neutral-400 hover:border-neutral-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
                      h.completedToday ? "bg-white border-white text-black" : "border-neutral-700"
                    }`}>
                      {h.completedToday && <Check className="w-3.5 h-3.5 font-bold" />}
                    </div>
                    <span className="text-xs font-medium">{h.title}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white">
                    <Flame className="w-3.5 h-3.5 text-white" />
                    <span>{h.streak} dias</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
