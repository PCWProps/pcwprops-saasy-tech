const executeMock = (routingDecision) => ({
  requestId: routingDecision.requestId,
  status: "success",
  output: {
    message: "mock execution completed",
    handler: routingDecision.target.handler,
  },
  completedAt: new Date().toISOString(),
});

module.exports = {
  executeMock,
};
