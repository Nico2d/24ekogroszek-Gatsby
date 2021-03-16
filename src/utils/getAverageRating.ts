export const getAverageRating = (list: Array<{ points: number }>): number => {
  const sum = list.reduce((sum, { points }) => sum + points, 0);
  const average = sum / list.length;

  return +average.toFixed(0);
};
