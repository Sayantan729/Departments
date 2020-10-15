export class AppUtility {
  static setSubscript(num: number): string {
    if (num / 10 != 1) {
      if (num % 10 == 1) return num + ' st';
      if (num % 10 == 2) return num + ' nd';
      if (num % 10 == 3) return num + ' rd';
      return num + ' th';
    }
    return num + ' th';
  }
}
