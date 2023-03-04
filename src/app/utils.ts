export const toHash = <T extends { id: number }>(array: T[]): Record<string, T> =>
  array.reduce<Record<string, T>>((acc, current) => {
    acc[current.id] = current;

    return acc;
  }, {});

export const toList = <T extends {}>(hash: T): string[] => Object.keys(hash);
