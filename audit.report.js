export function generateAuditReport(findings, score) {
  return {
    findings,
    riskScore: score,
    status: score > 50 ? "high risk" : "acceptable risk",
    timestamp: Date.now()
  };
}
