export default class Pangram {

    alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split('');
    constructor(private sentence: string) {}
  
    isPangram(): boolean {
      return this.alphabet.every(letter =>
          this.sentence.indexOf(letter) >= 0 || this.sentence.indexOf(letter.toUpperCase()) >= 0
      );
    }
}