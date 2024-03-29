export const createAIMPolicy = (resource, effect) => ({
  principalId: "test",
  policyDocument: {
    Version: '2012-10-17',
    Statement: [{
      Action: 'execute-api:Invoke',
      Effect: effect,
      Resource: resource
    }]
  },
});
