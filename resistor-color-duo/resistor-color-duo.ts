export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw "At least two colors need to be present"
    }

    this.colors = colors;
  }
  value = (): number => {
    const str: string = this.colors.map((color: string) => {
      switch(color) {
        case 'black':
          return 0
        case 'brown':
            return 1;
        case 'red':
          return 2
        case 'orange': 
          return 3
        case 'yellow':
          return 4
        case 'green':
          return 5
        case 'blue':
          return 6
        case 'violet':
          return 7
        case 'grey':
          return 8
        case 'white':
          return 9
      }
    }).join('').slice(0, 2)
    return parseInt(str)
  };
}
