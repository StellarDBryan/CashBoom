import { UsersAnswered } from "./api/data";

const STORAGE_KEY = 'userAnswers';

const getStoredData = (): UsersAnswered => {
  if (typeof window === 'undefined') return { questionnaires: [], challenges: [], savedBlogPost: [] };

  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { questionnaires: [], challenges: [], savedBlogPost: [] };
};

const saveData = (data: UsersAnswered) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getUserAnswers = (): UsersAnswered => {
  return getStoredData();
};

export const saveCorrectAnswers = (questionnaireId: number, correctCount: number) => {
  const data = getStoredData();

  const existing = data.questionnaires.find(q => q.questionnaireId === questionnaireId);

  if (existing) {
    if (correctCount > existing.answeredCorrectly) {
      existing.answeredCorrectly = correctCount;
    }
  } else {
    data.questionnaires.push({ questionnaireId, answeredCorrectly: correctCount });
  }

  saveData(data);
};

export const clearUserProgress = () => {
  localStorage.removeItem(STORAGE_KEY);
};