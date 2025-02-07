# React useEffect Cleanup Function Inconsistency

This repository demonstrates a potential issue with the React `useEffect` hook's cleanup function. The cleanup function is not always called as expected, leading to potential memory leaks or unexpected behavior.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The `useEffect` hook in `bug.js` is intended to log a message on each render and a cleanup message when the component unmounts or rerenders. However, under certain circumstances, the cleanup message is not always logged, suggesting an inconsistency in the cleanup function's execution.

## Solution

The solution in `bugSolution.js` addresses this by ensuring the cleanup function is reliably called.  Further investigation is needed to determine the exact cause of the original inconsistency, but this revised code is a safer approach.