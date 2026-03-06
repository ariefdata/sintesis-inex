/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
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
  RefreshCcw
} from 'lucide-react';
import { 
  QUESTIONS, 
  GOALS, 
  Tendency, 
  ANALYSIS_DATA, 
  Tendency as TendencyType 
} from './constants';

type Step = 'home' | 'questions' | 'goals' | 'result';

export default function App() {
  const [step, setStep] = useState<Step>('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<TendencyType[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [customGoal, setCustomGoal] = useState<string>('');

  const handleStart = () => setStep('questions');

  const handleAnswer = (tendency: TendencyType) => {
    const newAnswers = [...answers, tendency];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < QUESTIONS.length - 1) {
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
    
    // Count tendencies
    const counts = answers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as Record<TendencyType, number>);

    // Find the dominant tendency
    let dominant = Tendency.EXECUTOR;
    let maxCount = 0;
    
    (Object.entries(counts) as [TendencyType, number][]).forEach(([key, count]) => {
      if (count > maxCount) {
        maxCount = count;
        dominant = key;
      }
    });

    const analysis = ANALYSIS_DATA[dominant];
    const finalGoal = selectedGoal === 'Lainnya' ? customGoal : selectedGoal;
    const context = analysis.goalContexts[finalGoal] || analysis.defaultContext;

    return {
      tendency: dominant,
      description: analysis.description,
      strengths: analysis.strengths,
      friction: context.friction,
      strategies: context.strategies,
      goal: finalGoal
    };
  }, [answers, selectedGoal, customGoal]);

  const reset = () => {
    setStep('home');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedGoal('');
    setCustomGoal('');
  };

  const getIconForTendency = (tendency: TendencyType) => {
    switch (tendency) {
      case Tendency.EXPLORER: return <Lightbulb className="w-8 h-8 text-amber-500" />;
      case Tendency.DEEP_THINKER: return <BookOpen className="w-8 h-8 text-blue-500" />;
      case Tendency.EXECUTOR: return <Zap className="w-8 h-8 text-emerald-500" />;
      case Tendency.CONNECTOR: return <Users className="w-8 h-8 text-purple-500" />;
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
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
                  Kenali Cara Kerjamu
                </h1>
                <p className="text-lg text-stone-600 leading-relaxed max-w-md mx-auto">
                  Aplikasi ini membantu kamu memahami cara kamu berpikir, belajar, dan bekerja. 
                  Setelah itu, sistem akan mencoba mencocokkannya dengan tujuan yang ingin kamu capai.
                </p>
              </div>
              <button
                onClick={handleStart}
                className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-stone-50 rounded-full font-medium hover:bg-stone-800 transition-colors group"
              >
                Mulai
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {step === 'questions' && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-medium text-stone-400 uppercase tracking-wider">
                    Pertanyaan {currentQuestionIndex + 1} dari {QUESTIONS.length}
                  </span>
                  <div className="h-1 w-32 bg-stone-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-stone-900 transition-all duration-300" 
                      style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-stone-900">
                  {QUESTIONS[currentQuestionIndex].text}
                </h2>
              </div>

              <div className="grid gap-3">
                {QUESTIONS[currentQuestionIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.tendency)}
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
            </motion.div>
          )}

          {step === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-12"
            >
              <header className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-sm border border-stone-100 mb-4">
                  {getIconForTendency(result.tendency)}
                </div>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-stone-400">
                  Hasil Analisis
                </h2>
                <h1 className="text-4xl font-bold text-stone-900">
                  {result.tendency}
                </h1>
              </header>

              <div className="space-y-12">
                {/* Section 1: Cara Kerja */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <div className="w-1 h-6 bg-stone-900 rounded-full" />
                    1. Cara Kerja Kamu
                  </h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    {result.description}
                  </p>
                </section>

                {/* Section 2: Kekuatan Alami */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <div className="w-1 h-6 bg-stone-900 rounded-full" />
                    2. Kekuatan Alami
                  </h3>
                  <div className="grid gap-3">
                    {result.strengths.map((strength, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="text-stone-700">{strength}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 3: Potensi Gesekan */}
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <div className="w-1 h-6 bg-stone-900 rounded-full" />
                    3. Potensi Gesekan dengan Tujuan
                  </h3>
                  <div className="p-6 bg-amber-50 border border-amber-100 rounded-2xl">
                    <p className="text-stone-700 leading-relaxed">
                      <span className="font-medium text-amber-900 block mb-2 italic">"{result.goal}"</span>
                      {result.friction}
                    </p>
                  </div>
                </section>

                {/* Section 4: Strategi yang Lebih Cocok */}
                <section className="p-8 bg-stone-900 text-stone-50 rounded-[2.5rem] space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Target className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold relative z-10">
                    4. Strategi yang Lebih Cocok
                  </h3>
                  <div className="space-y-4 relative z-10">
                    {result.strategies.map((strategy, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-stone-800 flex items-center justify-center shrink-0 mt-1 text-xs font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-lg text-stone-200 leading-relaxed">
                          {strategy}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="pt-8 flex flex-col items-center gap-4">
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-6 py-3 text-stone-500 hover:text-stone-900 transition-colors font-medium"
                >
                  <RefreshCcw className="w-4 h-4" />
                  Ulangi Refleksi
                </button>
                <p className="text-xs text-stone-400 text-center max-w-xs">
                  Aplikasi ini adalah alat bantu refleksi diri, bukan diagnosis psikologis. Gunakan hasilnya sebagai bahan pertimbangan strategis.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
