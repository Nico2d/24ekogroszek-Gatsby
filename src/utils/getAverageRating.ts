export const getAverageRating = (list: Array<{ points: number }>): number => {
  if (list.length === 0) return 0;

  const sum = list.reduce((sum, { points }) => sum + points, 0);
  const average = sum / list.length;
  return +average.toFixed(0);
};
