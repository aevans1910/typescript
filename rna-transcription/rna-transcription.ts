class Transcriptor {
    static dnaToRna = new Map([
        ['G', 'C'],
        ['C', 'G'],
        ['T', 'A'],
        ['A', 'U']
    ]);

    toRna( dna: string): string {
        let result = (dna: string) => {
            let dnaToRna = Transcriptor.dnaToRna;
            if (dnaToRna.has(dna)) {
                return dnaToRna.get(dna)
            }
            else {
                throw "Invalid input DNA."
            }
        }
        return dna.split('').map(result).join('')
    }
}

export default Transcriptor