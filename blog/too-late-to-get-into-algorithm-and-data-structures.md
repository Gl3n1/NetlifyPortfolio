---
path: blog
date: 2019-01-20T13:11:19.888Z
title: Too late to get into Algorithm and Data Structures?
---
So recently, i got shortlisted and was asked to solve 2 algorithm questions in 2 hours and i wasn't even able to complete 1. I had this delusional persona that thought that i had this down, don't get me wrong but I've been doing challenges that I THOUGHT were difficult but after that terrible reality check, feels like a seasoned programmers pre warm up challenge. So i figured that i needed to put in extra time in algorithms and data structures if i wanted to ace that next opportunity.\
\
Today, i was going through this challenge and it took me ages to solve to find out my solution had the worst possible performance because I was solving it by brute force, my particular solution had a O(n^2) time complexity. After having realized that, i quickly looked for the best possible solution, which solved it by the greedy algorithm method. I sat at the coffee shop spending 2 hours trying to understand what the solution was trying to show because I've never really thought of solving problems that way before. 

Question: Given an array of integers and a target sum, find all pairs that add up to the target sum. Write a function twoSum that solves this.



const arr = \[7, 0, -4, 5, 2, 3];



twoSum(arr, 5); // \[[0, 5], \[2, 3]]

![](/assets/answer1.png)

I had a moment of enlightenment when I finally understood what was happening here, basically, all that was happening was that we had to do was loop the array and record the difference between our target and sum and set that as keys in the object.  The value is the actual element at that point.

Thanks for reading this post. Hopefully i've be able to give a better overview the next time around.
