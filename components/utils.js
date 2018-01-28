export const LeanCloudResParser = result => {
  const { attributes, id } = result;

  return {
    ...attributes,
    id
  }
}