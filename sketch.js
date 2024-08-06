class Animal {
  constructor(petName = "") {
    this.petName = petName;
  }
  
  talk() {
    console.log('Hello, my name is', this.petName);
  }
}

let catGaramond = new Animal("Laila");
let catStripy = new Animal("Angel");

catGaramond.talk();
catStripy.talk();