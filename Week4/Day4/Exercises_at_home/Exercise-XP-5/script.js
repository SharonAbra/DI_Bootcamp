class Dog {
    constructor(name) {
      this.name = name;
    }
  };

  // this is the right option:

  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };