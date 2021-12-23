var born = prompt( "Please enter what year you were born in:");

if (born !== null) {
    var year = parseInt (born) ;
    var x = (year - 4) % 12 ;
    var y = "Your Chinese Zodiac is "
    switch(x) {
        case 0:
         alert(y + "Rat");
        break;
        case 1:
         alert(y + "Ox");
        break;
        case 2:
         alert(y + "Tiger");
        break;
        case 3:
         alert(y + "Rabbit");
        break;
        case 4:
         alert(y + "Dragon");
        break;
        case 5:
         alert(y + "Snake");
        break;
        case 6:
         alert(y + "Horse");
        break;
        case 7:
         alert(y + "Goat");
        break;
        case 8:
         alert(y + "Monkey");
        break;
        case 9:
         alert(y + "Rooster");
        break;
        case 10:
         alert(y + "Dog");
        break;
        case 11:
         alert(y + "Pig");
        break;
    }
} else {
        alert("Please try again")
}