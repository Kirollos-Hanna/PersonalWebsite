---
path: "/blog/add-two-numbers"
date: 2021-01-24T17:12:33.962Z
title: "Add Two Numbers"
tags: ["Competitive Programming", "Leetcode"]
---

# Objective

We want to write a function called addTwoNumbers that accepts two non-empty linked lists representing two non-negative integers as parameters.

&emsp;

What we know about those lists is that the digits inside of them are stored in reverse order and for each node the number is always going to be less than 10.

&emsp;

The output of the function will be a linked list similar in structure to the linked lists provided with the content being the sum of the numbers of the two parameters.

&emsp;

# The Code

First off, let's look at the structure of the linked lists provided for us.

    /**
    * Definition for singly-linked list.
    * struct ListNode {
    *     int val;
    *     ListNode *next;
    *     ListNode() : val(0), next(nullptr) {}
    *     ListNode(int x) : val(x), next(nullptr) {}
    *     ListNode(int x, ListNode *next) : val(x), next(next) {}
    * };
    */

&emsp;

We can gleam a bunch of information from this structure. First, we can access the value of the current node in the list by using <code>list->value</code> and in order to access the next node we use <code>list->next</code>.

&emsp;

To append a value to the list, we create a new node and pass it the value like so <code>list->next = new ListNode(value)</code>

&emsp;

The boilerplate code provided to us is the same as usual.

    class Solution {
    public:
        ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
            
        }
    };

&emsp;

We'll first start by creating a new linked list that we'll use to store our answer inside

    ListNode *ans = new ListNode(0);

&emsp;

Next, we'll store the first node of the linked list in it's own variable to return it when we're done calculating the answer.

    ListNode *anshead=ans;

&emsp;

Our last variable declaration will be an integer number where we'll store our carry number (if there is any) through to the next node.

    int carry = 0;

&emsp;

We'll now open a while loop that keeps running as long as l1 or l2 are not empty.

    while(l1||l2){

&emsp;

Let's check to see if l1 is not empty and if it's not we'll add its value to the carry variable. and move l1 to its next value

    if(l1){
        carry+= l1->val;
        l1 = l1->next;
    }
&emsp;

We'll do the exact same thing for l2.

     if(l2){
        carry+= l2->val;
        l2 = l2->next;
    }

&emsp;

Then, the carry value will be added to our current list node value and we'll use mod 10 on it to make sure our number is a single digit. 

    ans->val = carry % 10;
    carry /= 10;

Let's also divide the carry by 10. The reason this works in this case is because carry is an integer variable and the maximum number it can reach in each cycle is 10. If it's any other single digit number carry will default to 0 and if it's 10 it will be equal to 1 which is the number that will be carried through to the next list node.
&emsp;

One last check within the loop will be an if statement that sees if l1, l2 or carry still have a value (in the case of carry, if it's equal to 0, it will be false).

    if(l1||l2||carry){
        ans->next = new ListNode(carry);
        ans = ans->next;
    }

if they do have a value, we create a new list node and add carry's value to it.

&emsp;

That's all for the for loop and the addition logic. We'll add the closing bracket for the loop.

    }

&emsp;

And return the head node of the 'ans' linked list.

    return anshead;

&emsp;


Our final product will look like this

&emsp;

    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
       ListNode *ans = new ListNode(0);
       ListNode *anshead=ans;
       int carry=0;
       while(l1||l2){
           if(l1){
               carry+= l1->val;
                l1 = l1->next;
           }
           if(l2){
               carry+= l2->val;
                l2 = l2->next;
           }
           ans->val = carry % 10;
           carry /= 10;
           if(l1||l2||carry){
               ans->next = new ListNode(carry);
               ans = ans->next;
           }
       }
       return anshead;
    }


If you want to me solve a particular problem and explain it. tweet me @kiromoth or send me an email through the contact form.