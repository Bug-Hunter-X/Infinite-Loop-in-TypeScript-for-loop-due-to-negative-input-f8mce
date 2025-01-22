# TypeScript For Loop Infinite Loop Bug

This repository demonstrates a subtle bug in TypeScript where a simple `for` loop can lead to an infinite loop if the input value is negative.  The bug arises from not properly handling negative input values in the loop condition.

## Bug Description

The `printNumbers` function is designed to print numbers from 1 to n. However, if `n` is negative, the loop condition `i <= n` will always be true, resulting in an infinite loop. TypeScript does not detect this potential issue at compile time.

## Solution

The solution involves adding an explicit check to ensure that `n` is non-negative before entering the loop.  This check prevents the loop from starting in the case of negative input. 