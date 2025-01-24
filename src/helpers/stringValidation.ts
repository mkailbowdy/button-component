export function betweenMinMax(str: string, min: number, max: number) {
  return str.length >= min && str.length <= max;
}

export function containsUppercase(str: string) {
  return /[A-Z]/.test(str);
}

export function containsLowercase(str: string) {
  return /[a-z]/.test(str);
}

export function containsNumber(str: string) {
  return /[0-9]/.test(str);
}

export function containsSpecialChars(str: string) {
  return /[!@#$%^&*]/.test(str);
}
