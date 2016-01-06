var demo_object = {
    one: 1,
    two: 2,
    three: 3
}
var one = "three"

demo_object['two'] // ??
demo_object[one] // ??

var state_capitals = {
    California: 'Sacramento',
    Texas: 'Austin'
}

var place = 'California'

state_capitals['place'] // ??
state_capitals.place   // ??
state_capitals[place] // ??

state_capitals['California'] // ??
state_capitals.California   // ??
state_capitals[California] // ??