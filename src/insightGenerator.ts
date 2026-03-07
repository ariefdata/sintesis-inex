import { Dimension, ANALYSIS_DATA, ARCHETYPE_MAP } from './constants';

export interface DynamicInsight {
  description: string;
  scoreCombination: string;
  strengths: string[];
  challenges: string[];
  friction: string;
  strategies: string[];
  concretePaths: string[];
  reflectionQuestions: string[];
  smallStep: string;
}

export function generateDynamicInsight(totalScores: Record<Dimension, number>, goal: string): DynamicInsight {
  const sorted = (Object.entries(totalScores) as [Dimension, number][])
    .sort((a, b) => b[1] - a[1]);

  const high = sorted[0][0];
  const archetype = ARCHETYPE_MAP[high];
  const analysis = ANALYSIS_DATA[archetype];

  const goalContext = analysis.goalContexts[goal] || analysis.defaultContext;

  return {
    description: analysis.description,
    scoreCombination: analysis.scoreCombination,
    strengths: analysis.strengths,
    challenges: analysis.challenges,
    friction: goalContext.friction,
    strategies: goalContext.strategies,
    concretePaths: goalContext.concretePaths,
    reflectionQuestions: goalContext.reflectionQuestions,
    smallStep: goalContext.smallStep,
  };
}
