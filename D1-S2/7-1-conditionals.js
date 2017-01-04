/**
 * Created by moksha on 01/01/17.
 */

/*

 ldpi (low) ~120dpi
 mdpi (medium) ~160dpi
 hdpi (high) ~240dpi
 xhdpi (extra-high) ~320dpi
 xxhdpi (extra-extra-high) ~480dpi
 xxxhdpi (extra-extra-extra-high) ~640dpi

 */
var resolution = 250;

if (resolution < 18) {
    document.writeln('<h1>Good Day!!!</h1>');
}


if (resolution < 18) {
    document.writeln('<h1>Good Day!!!</h1>');
} else {
    document.writeln('<h1>Good Evening!!!</h1>');
}

if (resolution < 10) {
    document.writeln('<h1>Good Morning</h1>');
} else if (hourOfTheDay < 20) {
    document.writeln('<h1>Good Day</h1>');
} else {
    document.writeln('<h1>Good Evening</h1>');
}