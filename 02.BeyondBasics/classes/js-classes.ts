abstract class Melon {
  public weight: number;
  public melonSort: string;
  public abstract element: string;

  constructor(weight: number, melonSort: string) {
    this.weight = weight;
    this.melonSort = melonSort;
  }

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString(): string {
    return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
  }
}

class Watermelon extends Melon {
  public element: string = "Water";
}

class Firemelon extends Melon {
  public element: string = "Fire";
}

class Earthmelon extends Melon {
  public element: string = "Earth";
}

class Airmelon extends Melon {
  public element: string = "Air";
}

class Melolemonmelon extends Watermelon {
  private _elements: string[] = ["Water", "Fire", "Earth", "Air"];
  private currentIndex = 0;

  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
    this.element = this._elements[this.currentIndex];
  }

  morph(): void {
    this.currentIndex = (this.currentIndex + 1) % this._elements.length;
    this.element = this._elements[this.currentIndex];
  }
}

const watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

const melolemonmelon = new Melolemonmelon(15, "Bigmelon");
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());

// if you get accessors error for ES version run with this command: 'tsc --target es6 yourFileName.ts'
