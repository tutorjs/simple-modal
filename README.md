# Simple Modal

[![GitHub issues](https://img.shields.io/github/issues/tutorjs/simple-modal.svg?style=flat-square)](https://github.com/tutorjs/simple-modal/issues)
[![GitHub forks](https://img.shields.io/github/forks/tutorjs/simple-modal.svg?style=flat-square)](https://github.com/tutorjs/simple-modal/network)
[![GitHub stars](https://img.shields.io/github/stars/tutorjs/simple-modal.svg?style=flat-square)](https://github.com/tutorjs/simple-modal/stargazers)

## Getting Started

### Install

With CDN.

### Production

```
// CSS
https://cdn.rawgit.com/tutorjs/simple-modal/c5274140/src/css/simple-modal.css

// Javascript
https://cdn.rawgit.com/tutorjs/simple-modal/c5274140/src/js/simple-modal.js

```

### Development

```
// CSS
https://rawgit.com/tutorjs/simple-modal/master/src/css/simple-modal.css

// Javascript
https://rawgit.com/tutorjs/simple-modal/master/src/js/simple-modal.js

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