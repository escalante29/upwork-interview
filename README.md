# Front-end Interview Task

## Problem Statement

For a given array of objects, where each of the objects represents an item from a multi-level menu, create a function that will console output the menu with the following rule:

1. Menu items should be ordered alphabetically in the level they belong to
2. Top-level menu item will be displayed with a single dot (.) and the name of the menu item following the dot. (Note: top-level menu items are the ones that have parentId: null)
3. Each child node will have 3 dots in front + the dots of the parent node. So a child node from the second level will have 1 dot from the parent node (since it is the top-level menu item) and 3 dots from its level, totaling 4 dots. Child node from the third level will have 1 dot from top-level, 3 dots from the second level, 3 dots from his level, totaling 7 dots.
4. Note that there is a field “isHidden” in each menu object, which if is set to “true”, that menu item should not be displayed (also its children should not be displayed)

- Bonus:
  - [x] Unit tests
  - [x] GUI with a JS framework (Vue preferable)

Example array of menu objects:

Input:

```
"const menuItems ="[
   {
      "id":1,
      "name":"Company",
      "parentId":null,
      "isHidden":false
   },
   {
      "id":2,
      "name":"About Us",
      "parentId":1,
      "isHidden":false
   },
   {
      "id":11,
      "name":"Contact",
      "parentId":1,
      "isHidden":false
   },
   {
      "id":3,
      "name":"Mission",
      "parentId":1,
      "isHidden":false
   },
   {
      "id":12,
      "name":"Goals",
      "parentId":3,
      "isHidden":false
   },
   {
      "id":13,
      "name":"2021",
      "parentId":12,
      "isHidden":false
   },
   {
      "id":4,
      "name":"Team",
      "parentId":2,
      "isHidden":false
   },
   {
      "id":5,
      "name":"Client 2",
      "parentId":10,
      "isHidden":false
   },
   {
      "id":6,
      "name":"Client 1",
      "parentId":10,
      "isHidden":false
   },
   {
      "id":7,
      "name":"Client 4",
      "parentId":10,
      "isHidden":true
   },
   {
      "id":8,
      "name":"Client 5",
      "parentId":20,
      "isHidden":false
   },
   {
      "id":10,
      "name":"References",
      "parentId":null,
      "isHidden":false
   },
   {
      "id":14,
      "name":"Prices",
      "parentId":null,
      "isHidden":false
   }
]";"
```

Output:

```
". Company"
".... About Us"
"....... Team"
".... Contact"
".... Mission"
"....... Goals"
".......... 2021"
". Prices"
". References"
".... Client 1"
".... Client 2"
```
