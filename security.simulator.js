import { scanVulnerabilities } from "./vulnerability.scanner.js";
import { calculateRiskScore } from "./risk.scorer.js";
import { generateAuditReport } from "./audit.report.js";
import { CONTRACT_ADDRESS } from "./network.config.js";

export function runSecuritySimulation() {
  console.log("Running security audit simulation...");

  const findings = scanVulnerabilities(CONTRACT_ADDRESS);
  const score = calculateRiskScore(findings);
  const report = generateAuditReport(findings, score);

  console.log("Audit Report:", report);
}
