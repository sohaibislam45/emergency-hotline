1---> What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById: it selects a single element based on its id attribute
getElementsByClassName:it selects all elements that have same class names.
querySelector / querySelectorAll: it select the first element that matches the CSS selector string. On the other hand, querySelectorAll select the all elements that matches the CSS selector string


2---> How do you create and insert a new element into the DOM?
Ans: At first we create a new HTML element by using document.createElement(). Then we can add content, attributes, and styles to this new element. After that we can inserting the Element into the DOM using appendChild().


3---> What is Event Bubbling and how does it work?
Ans: Event bubbling is a browser funtionality where, when an event occurs on an element, the event climbs upwards through its parent elements-> grandparent elements-> and so on, up to the root.
First event triggered --> then target the element, also handle the element --> then climbing Up --> after that reaching the root



4---> What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is a design pattern where a single event listener is attached to a common parent element to manage events for all of its descendant child elements.
It useful because-
 Improves performance and reduces memory usage;
  Handles dynamically added elements;
   Creates cleaner, more maintainable code


5---> What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault(): This method is used to stop the browser from reloading the page when we click the button inside the forms.
stopPropagation(): This method prevents the event from propagating up the DOM tree during the bubbling