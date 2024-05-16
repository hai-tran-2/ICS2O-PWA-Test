// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
* this function find product of two number
*/

function calculteProductOfTwoNumber() {
 // input
 let firstNumber = parseFloat(document.getElementById("first-number").value)
 let secondNumber = parseFloat(document.getElementById("second-number").value)
 let productOfNumbers = 0
 let counter = 0

 // process
 while (counter < secondNumber) {
   productOfNumbers = productOfNumbers + firstNumber
   counter++
   // output
   document.getElementById("result").innerHTML =
     "The product of two number is " + productOfNumbers
 }
}
