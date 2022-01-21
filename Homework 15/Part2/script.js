let animal = {
  name: prompt("Please enter name"),
  kind: prompt("Please enter kind"),
  animalSays: function () {
    return animal.name + " says: HI!";
  },
};
console.log(animal.animalSays());
