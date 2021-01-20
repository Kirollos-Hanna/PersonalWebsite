---
path: "/blog/two-sum"
date: 2021-01-18T17:12:33.962Z
title: "Two Sum"
tags: ["Competitive Programming", "Leetcode"]
---

# Introduction

Two sum is the first and probably the easiest problem on Leetcode. It's also something that many people may consider as a gateway between genius programmers who work at google and facebook and mediocare no-name code monkeys.

&emsp;

All of this is obviously completely not true. But the simple fact that I have to state that is a problem that I don't consider myself qualified to address.<strong style="font-size: 12px;"> Nor do I want to </strong>

&emsp;

I'll do my best to explain how to solve this problem in the most efficient way possible as explained in the problem's editorial using C++.

&emsp;

Without further ado, let's get into it...

&emsp;

# Objective

We want to write a function called twoSum that accepts an array of numbers and a target number as parameters.

&emsp;

The output of the function will be the index of two numbers within the array that both sum up to the target number parameter that was provided.

&emsp;

# The Code

Leetcode helps us with giving us some starter code so that we only have to worry about the logic of the function we are trying to implement.

&emsp;

    class Solution {
    public:
        vector<int> twoSum(vector<int>& nums, int target) {
            
        }
    };

from here on, the code we write will be inside the twoSum function.

&emsp;

first, we define an unordered map that has both values as integers.

&emsp;

    unorder_map<int,int> table;

This variable will store the index of the number as well as the number itself.

&emsp;

We'll then loop through the array

&emsp;

    for(int i = 0; i < nums.size(); i++){

and create a variable for the complement of the target number inside the array.

&emsp;

    int complement = target - nums[i];

Let's now check if the complement we've created is inside the table variable.

&emsp;

    if(table.count(complement))){

You might be wondering why we are checking if the complement is inside the table when we know that the table is empty at the start.

&emsp;

The reason is that as we're looping through the nums array. The table will be filled with values that we'll run the same code through again.

&emsp;

If the table contains the complement then we'll return the index of both the complement inside the table as well as the current index.

&emsp;

    return {table[complement], i};


We'll then close the if statement

&emsp;

    }

After, we'll insert the current value in the array as well as its index inside the table.

&emsp;

    table.insert(nums[i], i);

We'll then close the for loop. As we're done with the main logic of function.

&emsp;

    }

The last thing we'll do is return a default value in case we don't find a complement inside the nums array.

&emsp;

    return {0,0};

Our final product will look like this

&emsp;

    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> table = {};
        for(int i = 0; i < nums.size(); i++){
            int complement = target - nums[i];
            
            if(table.count(complement)){
                return {table[complement], i};
            }
            
            table.insert({nums[i], i});
        }
        return {0,0};
    };