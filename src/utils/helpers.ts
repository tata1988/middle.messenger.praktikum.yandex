type Indexed<T = unknown> = {
  [key in string]: T;
};

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  const merged = {
    ...lhs,
    ...rhs,
  };
  for (const key of Object.keys(merged)) {
    if (typeof merged[key] === "object" && merged[key] !== null) {
      merged[key] = merge(lhs[key] as Indexed, rhs[key] as Indexed);
    }
  }

  return merged;
}

export function set(
  object: Indexed | unknown,
  path: string,
  value: unknown,
): Indexed | unknown {
  if (typeof object !== "object" || object === null) {
    return object;
  }

  if (typeof path !== "string") {
    throw new Error("path must be string");
  }

  const result = path.split(".").reduceRight<Indexed>(
    (acc, key) => ({
      [key]: acc,
    }),
    value as any,
  );

  return merge(object as Indexed, result);
}

function isEqual(a: any, b: any): boolean {
  const isObject = (object: any) => {
    return object != null && typeof object === "object";
  };

  if (a === null && b === null) {
    return true;
  }

  if (a === undefined && b === undefined) {
    return true;
  }

  const obj1 = Object.keys(a);
  const obj2 = Object.keys(b);

  if (obj1.length !== obj2.length) return false;

  for (const key of obj1) {
    const value1 = a[key];
    const value2 = b[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (
      (isObjects && !isEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
}

export default isEqual;
