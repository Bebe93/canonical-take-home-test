# Canonical take home test

This exercise is part of the hiring process for the position of Web Developer at Canonical.

The task is to reproduce a design showing three blog posts in cards.

The files in this repository are the result of the task made by Beatrice Rossi

## Requirements
- Use [Vanilla](vanillaframework.io/docs) framework  
- Pull the data from the [WordPress API](people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json) 

## Procedure
- I decided to work only on the frontend because I could fetch the API directly from there, without building a beckend part.
- I used Vanilla directly on App.js (adding it directly to the markup).
- I realise that if I created three different < li >, they would be displayed one next to the other (as columns of a grid), but I feel that using the map function was the right choice to show all the articles in the API. I wasn't able to inline the three cards.
- I assumed that I didn't have to use App.css or Bootstrap for this exercise.
- I commented on the code every decision that I felt that needed to be explained.
