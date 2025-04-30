export default async function transform(content) {
  if (this.loadModule === undefined) {
    throw new Error("loadModule is undefined");
  }
  return content;
}
