# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

We're cuttingthe array into 3 smaller pieces through recurssion. The basecase for $T(n)$ would be $T(1)=1$ if the array had one element and just returned that value because
the array can't be divided. So, when $n$ can be divided into 3 subarrays you get $T(n/3)$ to show the array being split. Then you would multiply by 3 for each recursive call and add 1 for the constant to show the value.
$3T(n/3)+1$. If you have your basecase met at $k=log_3n$ because when you divide the array into 3 parts at each reccursive step the depth of the recurrsion tree is proportional to $log_3$ of the array length $n$. The  reccurance relation is $3^kT(n/3^k) + \sum_{i=0}^{k} 3^{k}$. Solving this with with the depth of the recurssion tree $k$ you see that the work done at eacch level of reccursion is proportional to $n$ so the time complexity is $\Theta(n)$.


divideAndConquerSum([1, 2, 3, 4, 5, 6, 7, 8, 9])
    ├── divideAndConquerSum([1, 2, 3])
    │   ├── divideAndConquerSum([1])
    │   ├── divideAndConquerSum([2])
    │   └── divideAndConquerSum([3])
    ├── divideAndConquerSum([4, 5, 6])
    │   ├── divideAndConquerSum([4])
    │   ├── divideAndConquerSum([5])
    │   └── divideAndConquerSum([6])
    └── divideAndConquerSum([7, 8, 9])
        ├── divideAndConquerSum([7])
        ├── divideAndConquerSum([8])
        └── divideAndConquerSum([9])




I used my repo from last semester but tried to have my explanation more concise. 
https://github.com/COSC3020/divide-and-conquer-sum-Hrics12
I had chatgpt make the recursion tree so I could visualize it better

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
