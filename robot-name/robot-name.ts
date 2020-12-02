class RobotName {
    public name = '';
    private registry: Set<string>
    private alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    private numbers = '123456789'.split("");
  
    constructor() {
      this.registry = new Set();
      this.resetName();
    }
  
    resetName(): void {
      const name = this.generateName();
      const isTaken = this.registry.has(name);
      this.registry.add(name);
      if (isTaken) {
        return this.resetName();
      }
      this.name = name;
    }
  
    private generateName(): string {
     return ''.concat(
       this.sample(this.alphabet),
       this.sample(this.alphabet),
       this.sample(this.numbers),
       this.sample(this.numbers),
       this.sample(this.numbers),
     )
    }
  
    private sample = (list: string[]): string => {
      const length = list.length;
      const randomIndex = Math.floor(Math.random() * length);
      return list[randomIndex];
    }
  }
  
  export default RobotName;