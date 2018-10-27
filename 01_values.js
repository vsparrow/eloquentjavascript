******* README *****************
This should be review, BUT when you describe JS can you use the terminology used below?
STUDY THIS!!! FOR THE TERMINOLOGY.
The one thing we are lacking is TECHNICAL COMMUNCATION.
When something is capitalized that means emphisis
something that starts with //Q means its a instant quiz 
********************************

Bits : any kind of two-valued things, zeros and ones.
"weight of a digit": value of the digit told by its order
bit     1101
weight  8421

values: chunks of bits that represent pieces of information
To create a value, INVOKE its name

ATOMIC ELEMENTS of JavaScript programs, simple value types and operators that act on such values.
OVERFLOW  when value did not fit into the given number of bits
OPERATORS: SYMBOLS like + * that act on values. Some operators are words like "typeof"
Operators that use two values are BINARY OPERATORS,  those that take one are called UNARY OPERATORS
minus operator is both binary and unary //10 - 2 // -(10 + 2)
PRECEDENCE of operators. Order in which they are applied
% is called REMAINDER, MOD, or MODULO

SPECIAL NUMBERS: considered numbers but arent normal numbers
Infinity , -Infinity, NaN  “not a number”,
NaN is the only value in JS not equal to itself

STRINGS are used to represent text. Written by enclosing their content in QUOTES.
SINGLE quotes, DOUBLE quotes, or BACKTICKS ``
backticks are also called TEMPLATE LITERALS, because the can EMBED other values
Newlines can be added by using ESCAPING
backslash \ inside QUOTED TEXT indicates the character hasa special meaning
It does not end the string but rather is part of it
strings: you can CONCAT or CONCATENATE a string, ie: add them together "con" + "cat"
EXPRESSION is any valid set of literals, variables, operators, and expressions that evaluates to a single value.

PRODUCE boolean values  by COMPARING values (3 > 2) // true
//Q // what type of operator is > // its binary,
LOGICAL OPERATORS and, or, not :: used to "REASON about booleans" // use reasoning to deduct a bool
//Q What type of operator is ! // unary operator that "FLIPS the value given to it"
|| has a lower PRECEDENCE then && which is lower than COMPARISON operators >, ==
logical operators work on LEFT HAND and RIGHT HAND values
left hand and right hand can also be INITIAL value and REPLACEMENT value if working on default values
DEFAULT VALUE of logical operators is the right hand value that you fall back upon if initial value is empty or false
SHORT CURCUIT EVALUATION used in logical operators such that the right hand value is never operated upon
//example:   true || 2 == 3 , false && true
CONDITIONAL operator aka TERNARY operator (true ? 1 : 2)


EMPTY VALUES: null, undefined "used to denote the absence of a meaningful value"
"They are themselves values, but they carry no information."
ok to treat them as interchangeable in most cases

AUTOMATIC TYPE CONVERSION : js uses COERCION when operators are applied to the rong type of value
//Q    8 * null // 0
//Q    "5" - 1 // 5
//Q    "5" + 1 // 51  //remmeber concat
//      What are these called?  // expressions
