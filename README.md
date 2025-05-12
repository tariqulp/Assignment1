What are some differences between interfaces and types in TypeScript?
In the typescript interface, the type is used to define an Object's structure. But there is a difference between them,
Implementing/Extending
Interface:

1. Interface can be extended using the keyword extend, which means that from one interface to another interface, the property can be inherited.
2. In the middle of the class contract can be implemented.
   Example:
   interface Animal {
   name: string;
   }
   interface Dog extends Animal {
   breed: string;
   }
   Type:
   1)Type can be extended using the “&” operator.
   2)Type can be flexible also, which means complex combinations (Union, intersection, etc) can be used.
   Example:
   type Animal = {
   name: string;
   };
   type Dog = Animal & {
   breed: string;
   };

Declaration Merging:
Interface:
If any interface is declared multiple times, TypeScript merges them into one interface.
Type:
Merging can not be possible in type, which means if the same name is declared, there will be an error.

Explain the difference between any, unknown, and never types in TypeScript.
Any:
Any type is more flexible in TypeScript. Here, there is no type checking, any value can be assigned.
There is also a Drawback, which is a safety issue. That's why there is a chance for a runtime error.
Unknown:
Unknown type, more like any type, but it's safer than any type. Any value can be assigned, but before using the value need to check the type.
There is safety if an unknown is used, so before using, the value needs to be checked first.
Never:
The 'never' type indicates no returned value. It is used for functions that either never return, throw an error, or enter an infinite loop.
