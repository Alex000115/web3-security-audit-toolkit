export function createAuditModel(contract, report) {
  return {
    contract,
    report,
    createdAt: Date.now()
  };
}
