export default class Team {
  constructor() {
    this.members = new Set();
  }

  [Symbol.iterator]() {
    const members = this.toArray();
    let index = -1;
    return {
      next() {
        if (index < members.length - 1) {
          index += 1;
          return {
            value: members[index],
            done: false,
          };
        }
        return {
          done: true,
        };
      },
    };
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    const arrayOfCharacters = [];
    for (const member of this.members) {
      arrayOfCharacters.push(member);
    }
    return arrayOfCharacters;
  }
}
