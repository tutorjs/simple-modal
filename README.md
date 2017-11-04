# Simple Modal

## Getting Started

### Install

With CDN.

```
// CSS
https://cdn.rawgit.com/tutorjs/simple-modal/master/src/css/simple-modal.css

// Javascript
https://cdn.rawgit.com/tutorjs/simple-modal/master/src/js/simple-modal.js

```

### HTML

```html

  // Button Trigger
  <button class="your-trigger-selector">Show Modal</button>

  // Modal
  <div class="your-modal-selector">
    <div class="your-modal-content-selector">
      <h1> Hello World </h1>
    </div>
  </div>

```

### Javascript

```javascript

  new SimpleModal({
    modal: '.your-modal-selector', // root class selector
    content: '.your-modal-content-selector', // children of modal
    trigger: '.your-trigger-selector' // button action
  })

```


Thanks.