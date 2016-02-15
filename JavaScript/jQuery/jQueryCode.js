//$ == a function
//() == invoke a function
// (find whatever in here)  ex... ('.working')('div')('li')
$('div').addClass('red')
$().toggleClass()   //toggle on and off
$().remove()   // removes element
$().val()   // Can use for getter or setter checkbox has text & value
$().html() // You can insert html, just like the css
$().show()
$().hide()
$().closest() //Closest child that matches the first element
$().find() // find all of something. all deep
$().childred() // only goes 1 level deep

//Chaining...

$('ul').closest('span').toggleClass('red')

$('li').prepend('<li>Hi</li>')     //add element to screen first
$('li').append('<li>Bye</li>')     //add element to end of list

// Don't use hyphens in jQuery. Use camelCase.

$('ul').css({
  backgroundColor: 'Blue',
  display: 'inline-block'
})

var text = $('input').text()
$('input').text("you say hi now")

$('ul>li').replaceWith('<h3>')

$('ul>li').offset(10,30)    //fancy absolute positioning . (x,y) pixels


//eventListener   --- .on

todoAddItemButton.on('click', function(event)) {
  handleAddItem();
}
