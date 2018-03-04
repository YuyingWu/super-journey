export const LeanCloudResParser = result => {
  const { attributes, id, createdAt } = result;

  return {
    ...attributes,
    id,
    createdAt
  }
}