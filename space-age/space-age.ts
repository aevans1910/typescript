const round = (x: number): number => Math.round(100 * x) / 100;

export default class SpaceAge {
  seconds: number;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  private onEarthUnrounded(): number {
    const secondsPerYear = 60 * 60 * 24 * 365.25;
    return this.seconds / secondsPerYear;
  }

  private otherPlanet(periodEarthYears: number): number {
    return round(this.onEarthUnrounded() / periodEarthYears);
  }

  onEarth = () => round(this.onEarthUnrounded());
  onMercury = () => this.otherPlanet(0.2408467);
  onVenus = () => this.otherPlanet(0.61519726);
  onMars = () => this.otherPlanet(1.8808158);
  onJupiter = () => this.otherPlanet(11.862615);
  onSaturn = () => this.otherPlanet(29.447498);
  onUranus = () => this.otherPlanet(84.016846);
  onNeptune = () => this.otherPlanet(164.79132);
}