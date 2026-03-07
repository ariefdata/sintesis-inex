/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2, 
  Target, 
  Lightbulb, 
  Zap, 
  Users, 
  BookOpen,
  RefreshCcw,
  Shield,
  Search
} from 'lucide-react';
import { 
  QUESTIONS_BANK, 
  GOALS, 
  Dimension, 
  ANALYSIS_DATA, 
  Archetype,
  ARCHETYPE_MAP,
  Question,
  Option
} from './constants';

type Step = 'home' | 'questions' | 'goals' | 'result';

export default function App() {
  const [step, setStep] = useState<Step>('home');
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<Dimension, number>>[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [customGoal, setCustomGoal] = useState<string>('');

  // Initialize session questions: 4 random from each dimension
  useEffect(() => {
    if (step === 'questions' && sessionQuestions.length === 0) {
      const dimensions = Object.values(Dimension);
      const selected: Question[] = [];
      
      dimensions.forEach(dim => {
        const dimQuestions = QUESTIONS_BANK.filter(q => q.dimension === dim);
        const shuffled = [...dimQuestions].sort(() => 0.5 - Math.random());
        selected.push(...shuffled.slice(0, 4));
      });
      
      // Final shuffle of the 20 questions
      setSessionQuestions(selected.sort(() => 0.5 - Math.random()));
    }
  }, [step, sessionQuestions.length]);

  const handleStart = () => {
    setSessionQuestions([]);
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setStep('questions');
  };

  const handleAnswer = (option: Option) => {
    const newAnswers = [...answers, option.scores];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < sessionQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('goals');
    }
  };

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
    if (goal !== 'Lainnya') {
      setStep('result');
    }
  };

  const handleCustomGoalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customGoal.trim()) {
      setSelectedGoal(customGoal);
      setStep('result');
    }
  };

  const result = useMemo(() => {
    if (answers.length === 0) return null;
    
    // Calculate total scores for each dimension
    const totalScores: Record<Dimension, number> = {
      [Dimension.EXPLORATION]: 0,
      [Dimension.ANALYSIS]: 0,
      [Dimension.EXECUTION]: 0,
      [Dimension.RESILIENCE]: 0,
      [Dimension.COLLABORATION]: 0,
    };

    answers.forEach(answer => {
      (Object.entries(answer) as [Dimension, number][]).forEach(([dim, score]) => {
        totalScores[dim] += score;
      });
    });

    // Find the dominant dimension
    const sortedDimensions = (Object.entries(totalScores) as [Dimension, number][])
      .sort((a, b) => b[1] - a[1]);
    
    const dominantDim = sortedDimensions[0][0];
    const secondaryDim = sortedDimensions[1][0];

    const archetype = ARCHETYPE_MAP[dominantDim];
    const secondaryArchetype = ARCHETYPE_MAP[secondaryDim];
    
    const analysis = ANALYSIS_DATA[archetype];
    const finalGoal = selectedGoal === 'Lainnya' ? customGoal : selectedGoal;
    const context = analysis.goalContexts[finalGoal] || analysis.defaultContext;

    // Normalize scales (0-10)
    const getScale = (dim: Dimension) => {
      // Assuming max possible score per dimension is ~12-16 based on 4 questions * 4 points
      return Math.min(10, Math.round((totalScores[dim] / 12) * 10));
    };
    
    const scales = {
      [Dimension.EXPLORATION]: getScale(Dimension.EXPLORATION),
      [Dimension.ANALYSIS]: getScale(Dimension.ANALYSIS),
      [Dimension.EXECUTION]: getScale(Dimension.EXECUTION),
      [Dimension.RESILIENCE]: getScale(Dimension.RESILIENCE),
      [Dimension.COLLABORATION]: getScale(Dimension.COLLABORATION),
    };

    // Calculate confidence level (simple consistency check)
    // Higher variance means lower confidence
    const scores = Object.values(totalScores);
    const mean = scores.reduce((a, b) => a + b) / scores.length;
    const variance = scores.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / scores.length;
    const confidence = Math.max(50, Math.min(95, Math.round(100 - (variance * 2))));

    return {
      archetype,
      secondaryArchetype: archetype !== secondaryArchetype ? secondaryArchetype : null,
      description: analysis.description,
      strengths: analysis.strengths,
      friction: context.friction,
      strategies: context.strategies,
      concretePaths: context.concretePaths,
      reflectionQuestions: context.reflectionQuestions,
      smallStep: context.smallStep,
      goal: finalGoal,
      scales,
      confidence
    };
  }, [answers, selectedGoal, customGoal]);

  const reset = () => {
    setStep('home');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedGoal('');
    setCustomGoal('');
    setSessionQuestions([]);
  };

  const tryAnotherGoal = () => {
    setStep('goals');
    setSelectedGoal('');
    setCustomGoal('');
  };

  const getIconForArchetype = (archetype: Archetype) => {
    switch (archetype) {
      case Archetype.EXPLORER: return <Lightbulb className="w-8 h-8 text-amber-500" />;
      case Archetype.DEEP_THINKER: return <BookOpen className="w-8 h-8 text-blue-500" />;
      case Archetype.EXECUTOR: return <Zap className="w-8 h-8 text-emerald-500" />;
      case Archetype.CONNECTOR: return <Users className="w-8 h-8 text-purple-500" />;
      case Archetype.STRATEGIST: return <Shield className="w-8 h-8 text-rose-500" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200">
      <main className="max-w-2xl mx-auto px-6 py-12 md:py-24">
        <AnimatePresence mode="wait">
          {step === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900">
                  Kompas Cara Kerja
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed max-w-md mx-auto">
                  Temukan cara kerjamu, lalu lihat strategi yang lebih cocok untuk tujuanmu.
                </p>
              </div>
              <button
                onClick={handleStart}
                className="inline-flex items-center gap-2 px-10 py-5 bg-stone-900 text-stone-50 rounded-full font-bold text-lg hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-stone-200 group"
              >
                Mulai
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {step === 'questions' && sessionQuestions.length > 0 && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">
                      Dimensi: {sessionQuestions[currentQuestionIndex].dimension}
                    </span>
                    <span className="text-sm font-medium text-stone-500">
                      Pertanyaan {currentQuestionIndex + 1} dari {sessionQuestions.length}
                    </span>
                  </div>
                  <div className="h-1.5 w-32 bg-stone-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-stone-900 transition-all duration-300" 
                      style={{ width: `${((currentQuestionIndex + 1) / sessionQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>
                
                <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl text-sm text-amber-800 italic">
                  "Pilih jawaban yang paling mendekati kebiasaanmu, bukan yang paling ideal."
                </div>

                <h2 className="text-2xl font-bold text-stone-900 leading-tight">
                  {sessionQuestions[currentQuestionIndex].text}
                </h2>
              </div>

              <div className="grid gap-3">
                {sessionQuestions[currentQuestionIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-5 rounded-2xl border border-stone-200 bg-white hover:border-stone-400 hover:bg-stone-50 transition-all group flex items-center justify-between"
                  >
                    <span className="text-lg text-stone-700 group-hover:text-stone-900">
                      {option.text}
                    </span>
                    <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-stone-900 opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex(currentQuestionIndex - 1);
                    setAnswers(answers.slice(0, -1));
                  } else {
                    setStep('home');
                  }
                }}
                className="flex items-center gap-2 text-stone-400 hover:text-stone-600 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali
              </button>
            </motion.div>
          )}

          {step === 'goals' && (
            <motion.div
              key="goals"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-stone-900">
                  Apa tujuan utamamu saat ini?
                </h2>
                <p className="text-stone-500">
                  Pilih satu yang paling menggambarkan fokusmu sekarang.
                </p>
              </div>

              <div className="grid gap-3">
                {GOALS.map((goal, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleGoalSelect(goal)}
                    className="w-full text-left p-5 rounded-2xl border border-stone-200 bg-white hover:border-stone-400 hover:bg-stone-50 transition-all flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                      <Target className="w-5 h-5" />
                    </div>
                    <span className="text-lg text-stone-700">{goal}</span>
                  </button>
                ))}
                
                <button
                  onClick={() => handleGoalSelect('Lainnya')}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center gap-4 ${
                    selectedGoal === 'Lainnya' 
                      ? 'border-stone-900 bg-stone-900 text-stone-50' 
                      : 'border-stone-200 bg-white hover:border-stone-400'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedGoal === 'Lainnya' ? 'bg-stone-800 text-stone-50' : 'bg-stone-100 text-stone-400'
                  }`}>
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Lainnya</span>
                </button>
              </div>

              {selectedGoal === 'Lainnya' && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  onSubmit={handleCustomGoalSubmit}
                  className="space-y-4 pt-4"
                >
                  <input
                    autoFocus
                    type="text"
                    placeholder="Tuliskan tujuanmu di sini..."
                    value={customGoal}
                    onChange={(e) => setCustomGoal(e.target.value)}
                    className="w-full p-4 rounded-xl border border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!customGoal.trim()}
                    className="w-full py-4 bg-stone-900 text-stone-50 rounded-xl font-medium disabled:opacity-50"
                  >
                    Lihat Hasil
                  </button>
                </motion.form>
              )}

              {answers.length > 0 && (
                <button
                  onClick={() => setStep('questions')}
                  className="flex items-center gap-2 text-stone-400 hover:text-stone-600 transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Kembali ke Pertanyaan
                </button>
              )}
            </motion.div>
          )}

          {step === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-16 pb-24"
            >
              <header className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2.5rem] bg-white shadow-xl shadow-stone-200 border border-stone-100 mb-6">
                  {getIconForArchetype(result.archetype)}
                </div>
                <div className="space-y-1">
                  <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-stone-400">
                    Archetype Utama
                  </h2>
                  <h1 className="text-5xl font-black text-stone-900">
                    {result.archetype}
                  </h1>
                  {result.secondaryArchetype && (
                    <p className="text-lg text-stone-500 pt-2">
                      Kecenderungan Kedua: <span className="font-bold text-stone-700">{result.secondaryArchetype}</span>
                    </p>
                  )}
                  <p className="text-sm text-stone-400 pt-4">
                    Tingkat Keyakinan Analisis: {result.confidence}%
                  </p>
                </div>
              </header>

              <div className="space-y-16">
                {/* 1. Cara Kerja Kamu */}
                <section className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-stone-900 rounded-full" />
                    1. Cara Kerja Kamu
                  </h3>
                  <p className="text-xl text-stone-600 leading-relaxed">
                    {result.description}
                  </p>
                </section>

                {/* 2. Profil Cara Kerja (Skala) */}
                <section className="space-y-6">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-stone-900 rounded-full" />
                    2. Profil Cara Kerja
                  </h3>
                  <div className="space-y-6 bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
                    {(Object.entries(result.scales) as [string, number][]).map(([dim, value], idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between text-sm font-bold text-stone-500 uppercase tracking-wider">
                          <span>{dim}</span>
                          <span>{value * 10}%</span>
                        </div>
                        <div className="h-3 bg-stone-100 rounded-full overflow-hidden flex">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div 
                              key={i}
                              className={`flex-1 border-r border-white last:border-0 transition-all duration-1000`}
                              style={{ 
                                backgroundColor: i < value ? '#1c1917' : '#f5f5f4',
                                opacity: i < value ? 1 : 0.3
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 3. Kekuatan Alami */}
                <section className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-stone-900 rounded-full" />
                    3. Kekuatan Alami
                  </h3>
                  <div className="grid gap-4">
                    {result.strengths.map((strength, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-stone-100 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        </div>
                        <span className="text-lg text-stone-700 font-medium">{strength}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 4. Potensi Gesekan */}
                <section className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-stone-900 rounded-full" />
                    4. Potensi Gesekan dengan Tujuan
                  </h3>
                  <div className="p-8 bg-amber-50 border border-amber-100 rounded-3xl">
                    <p className="text-xl text-stone-700 leading-relaxed">
                      <span className="font-bold text-amber-900 block mb-3 italic">"{result.goal}"</span>
                      {result.friction}
                    </p>
                  </div>
                </section>

                {/* 5. Strategi yang Lebih Cocok */}
                <section className="p-10 bg-stone-900 text-stone-50 rounded-[3rem] space-y-8 relative overflow-hidden shadow-2xl shadow-stone-300">
                  <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Target className="w-48 h-48" />
                  </div>
                  <h3 className="text-3xl font-black relative z-10">
                    5. Strategi yang Lebih Cocok
                  </h3>
                  <div className="space-y-6 relative z-10">
                    {result.strategies.map((strategy, idx) => (
                      <div key={idx} className="flex gap-6 items-start">
                        <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center shrink-0 mt-1 text-sm font-black border border-stone-700">
                          {idx + 1}
                        </div>
                        <p className="text-xl text-stone-200 leading-relaxed">
                          {strategy}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 6. Contoh Jalur yang Bisa Dicoba */}
                <section className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-stone-900 rounded-full" />
                    6. Contoh Jalur yang Bisa Dicoba
                  </h3>
                  <div className="grid gap-3">
                    {result.concretePaths.map((path, idx) => (
                      <div key={idx} className="p-5 bg-white rounded-2xl border border-stone-200 flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-stone-900" />
                        <span className="text-lg text-stone-700">{path}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 7. Pertanyaan Refleksi */}
                <section className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-stone-900 rounded-full" />
                    7. Pertanyaan Refleksi
                  </h3>
                  <div className="space-y-4">
                    {result.reflectionQuestions.map((q, idx) => (
                      <div key={idx} className="p-6 bg-stone-100 rounded-2xl border-l-4 border-stone-900">
                        <p className="text-lg text-stone-800 font-medium italic">"{q}"</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 8. Langkah Kecil */}
                <section className="space-y-4">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-stone-900 rounded-full" />
                    8. Langkah Kecil yang Bisa Dicoba
                  </h3>
                  <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-3xl flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0 text-white shadow-lg shadow-emerald-200">
                      <Zap className="w-6 h-6" />
                    </div>
                    <p className="text-xl text-emerald-900 font-medium leading-relaxed">
                      {result.smallStep}
                    </p>
                  </div>
                </section>
              </div>

              <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={tryAnotherGoal}
                  className="w-full sm:w-auto px-8 py-4 bg-stone-200 text-stone-900 rounded-2xl font-bold hover:bg-stone-300 transition-all flex items-center justify-center gap-2"
                >
                  <Target className="w-5 h-5" />
                  Coba Tujuan Lain
                </button>
                <button
                  onClick={reset}
                  className="w-full sm:w-auto px-8 py-4 bg-white border border-stone-200 text-stone-500 rounded-2xl font-bold hover:text-stone-900 hover:border-stone-900 transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCcw className="w-5 h-5" />
                  Ulangi Refleksi
                </button>
              </div>
              
              <p className="text-sm text-stone-400 text-center max-w-md mx-auto">
                Aplikasi ini adalah alat bantu refleksi diri untuk membantumu menemukan strategi yang lebih cocok. Gunakan hasilnya sebagai bahan pertimbangan strategis.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
