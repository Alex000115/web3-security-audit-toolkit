export function calculateRiskScore(findings) {
  let score = 0;

  findings.forEach((f) => {
    if (f.severity === "high") score += 50;
    if (f.severity === "medium") score += 25;
    if (f.severity === "low") score += 10;
  });

  return score;
}
