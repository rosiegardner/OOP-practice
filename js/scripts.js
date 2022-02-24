// Business Logic of DrinkMenu
function DrinkMenu() {
  this.drink = {};
  this.drinkId = 0;
}

DrinkMenu.prototype.addDrink = function(drinks) {
  drinks.id = this.drinkId()
  this.drink[drinks.id] = drinks; 
};

DrinkMenu.prototype.drinkId = function() {
  this.drinkId += 1;
  return this.drinkId;
};

DrinkMenu.prototype.findDrink = function(id) {
    if (this.drinks[id] != undefined) {
        return this.drinks[id];
    }
    return false;
};

//Business Logic for Drinks
function Drinks(drinkSpirit, drinkName, drinkRecipe) {
  this.drinkSpirit = drinkSpirit;
  this.drinkName = drinkName;
  this.drinkRecipe = drinkRecipe; 
}

Drinks.prototype.cockTail = function() {
  return this.drinkSpirit + " " + this.drinkName;
};

let drinkMenu = new DrinkMenu();
let drink = new Drinks("Whiskey", "Old Fashion", "Recipe");
let drink2 = new Drinks("Vodka", "Martini", "Recipe");
drinkMenu.addDrink(drink);
drinkMenu.addDrink(drink2);



// let whiskey = {
//   name: "Old Fashion",
//   ingredients: ["Whiskey", "Bitters", "Sugar", "Cherry Juice"],
//   garnish: ["Orange Slice"],
//   price: 12,
// };



//User interface Logic


