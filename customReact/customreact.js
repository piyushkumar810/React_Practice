
// Step 1: Create a React-like object (virtual DOM representation)
// This is NOT real React, but mimicking how React stores elements internally
const reactElement = {
    type: 'a',   // type of HTML tag we want to create (<a>)
    props: {     // attributes of the element
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google' // inner content of the tag
}

// Step 2: Select the root container from HTML where we will render our element
const mainContainer=document.querySelector('#root')


// Step 3: Create a custom render function
// This function converts our "React-like object" into a real DOM element
function customeRender(reactElement,container){
    // this is older way and bad because if you have more attributes you have to always add .setS+Attribute
    /*
    const domElement=document.createElement(reactElement.type)

    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    */


    // new version
    // Step 3.1: Create actual DOM element using type (e.g., 'a')
    const domElement = document.createElement(reactElement.type)

    // Step 3.2: Add inner content (text inside the tag)
    domElement.innerHTML = reactElement.children

    // Step 3.3: Loop through all props (attributes like href, target)
    for (const prop in reactElement.props) {

        // Skip 'children' if it appears inside props (good practice check)
        if (prop === 'children') continue;

        // Step 3.4: Set each attribute dynamically
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    // Step 3.5: Append the created element into the container (#root)
    container.appendChild(domElement)
}


// Step 4: Call the custom render function
// This will generate: <a href="https://google.com" target="_blank">click me...</a>
customeRender(reactElement, mainContainer)

