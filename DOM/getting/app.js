// 1. Select the anchor tag
const anchor = document.querySelector("a");
// 2. Use getAttribute(attrName) to check the attribute.
console.log(anchor.getAttribute("href"));

// 3. Select a-two & set "href" attribute
const two = document.querySelector(".a-two");
// setAttribute(attrName, value)
console.log(two.setAttribute("href", "www.youtube.com"));
