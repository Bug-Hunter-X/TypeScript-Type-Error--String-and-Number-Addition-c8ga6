# TypeScript Type Error: String and Number Addition

This example demonstrates a common type error in TypeScript where a function expecting numbers is called with a string and a number.  While TypeScript's type system helps prevent many errors, this specific scenario might not always be caught at compile time, leading to runtime errors.

## The Bug

The `add` function is designed to add two numbers. However, the code calls `add` with a string ("1") and a number (2).  In JavaScript, this results in string concatenation instead of numerical addition, producing an unexpected result.

## The Solution

The solution involves using type guards or input validation to ensure the arguments are numbers before performing the addition. This prevents the runtime error and provides a more robust function.