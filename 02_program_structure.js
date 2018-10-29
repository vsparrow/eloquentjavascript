//capitalization doesnt nessiarily mean its a JS variable
//rather its something to take note of, as it is an important word

EXPRESSION : fragment of code that produces a value
STATEMENT: corresponds to a full sentence if expression is a sentence fragment
// use a SEMICOLON ; to make a statement
//1; the simplest of statements
SIDE EFFECTS : when statement leaves impression on the "world"
Showing a dialog box or writing text to the screen is a side effect.
KEYWORD: a special word  , like let var const
BINDINGS or VARIABLES : hold values
//let     caught    =         5 * 5
//keyword binding   operator  expression
After a binding has been defined, its name can be used as an expression.
//let ten = 10;  console.log(ten * ten);
A binding is not tied to a value forever.
the = operator can be used on existing bindings to DISCONNECT then from their current values
and have the binding POINT to a new one

ENVIRONMENT The collection of bindings and their values that exist at a given time
FUNCTION a piece of program wrapped in a value.
Such values can be applied in order to run the wrapped program.
Executing a function is called INVOKING, CALLING, or APPLYING it.
call a function by putting parentheses after an expression that produces a function value.
directly use the name of the binding that holds the function.
values given to functions are called ARGUMENTS

binding names cannot contain period characters
console.log isn’t a simple binding, so it has a period.
It is actually an expression that retrieves the log property from the value held by the console binding.
some functions produce side effects, some produce values (return values)

CONDITIONAL EXECUTION program takes a branch based on the situation at hand
these are ALTERNATIVE EXECUTION PATHS
BLOCK when {} braces used to group any number of statements into a single statement, or WRAPPED STATEMENT

looping is a form of CONTROL FLOW
Looping control flow allows us to go back to some point in the program where we were before and repeat it with our current program state.
a while loop is a CONTROL STRUCTURE
keyword while is followed by an expression in a parentheses and then a statement
The loop keeps entering that statement as long as the expression
  produces a value that gives true when converted to Boolean.
a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution

for loop: a test expression that checks whether the counter has reached its end value.
The part before the first semicolon initializes the loop, usually by defining a binding
The second part is the expression that checks whether the loop must continue.
The final part updates the state of the loop after every iteration.

COMMENT is a piece of text that is part of a program but is completely ignored by the computer
