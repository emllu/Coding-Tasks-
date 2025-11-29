Documentation for Coding Tasks 

1 Task Overview


Task 1: (Smart Text Analyzer)
Build a function that analyzes a text input and returns:
-Total word count
-Average word length (2 decimals)
-Longest word(s)
-Word frequency (case-insensitive)

Language chosen: Python


2.Research and Resources 

Stackoverflow:
https://stackoverflow.com/questions/18679576/find-longest-word-in-text

Official documentation visited:
Python re module: https://docs.python.org/3/library/re.html

Python collections.defaultdict: https://docs.python.org/3/library/collections.html#collections.defaultdict
 
3.thought process

Task 1
 approach chose: i used python programming language with re splititng words and defaultdict for frequency counting 
 Reason : instead of using split() and other builtin function might make works less simple but i used library to make the code robust,handles the puntuation and easier to maintain.
 
 
4.Solution Process
Task 1 
Input Handling: Read multi-line text input from user. Used strip() to check for empty input.

Word Splitting: Used re.findall(r'\b\w+\b', text.lower()) to extract words ignoring punctuation.

Output: Returned dictionary with required fields and printed nicely for user.

Calculations:

-Word count → counted unique words to avoid duplicates.

-Average word length → sum of word lengths divided by total words, rounded to 2 decimals.

-Longest word(s) → identified max length and collected all words of that length.
-Word frequency → incremented counts in defaultdict.

-Challenges faced: Handling punctuation and duplicates. Solved using re.findall and dict.fromkeys().

5 Why This Solution is Optimal

Task 1

Handles punctuation and multiple spaces robustly.

Correctly computes all requested metrics (count, average, longest words, frequency).

Uses built-in Python tools efficiently (re, defaultdict).

Code is readable, commented, and easily maintainable.
