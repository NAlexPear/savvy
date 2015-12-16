//type the following directly into your REPL, see what they evaluate to

!true
!false
!!false
!!true
!!"type coercion"
!!"all strings are 'truthy' except for..."
!!""
true && true
true && false
false && true
false && false
true || true
true || false
false || true
false || false
true && "what does this evalute to?"
false && "and this?"
true || "sigh, i'm not needed"
false || "default value"

// [SHIFT + ENTER] let's you type multiple lines into a single console input.

if ( !name || !email || !phone ) {
   form_message = "Please enter all required fields"
 } else {
   form_message = "Form accepted, thank you!"
}
