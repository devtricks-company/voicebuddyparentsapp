export function sleep(milliseconds: number) {
  return new Promise(resolve => {
    setTimeout(() => resolve(Symbol()), milliseconds);
  });
}

export async function safeAsync<T>(param: () => Promise<T>) {
  try {
    const data = await param();
    return data;
  } catch (e) {
    return null;
  }
}
