/**
* Simple Modal
* Author adiatma9024@gmail.com
*/

;(function(root, factory) {
  root.SimpleModal = factory();
})(this, function () {

  /**
  * write with es2015
  */

  function el(selector) {
    return document.querySelector(selector);
  }

  function findChildren(element, selector) {
    return element.querySelectorAll(selector);
  }

  function createModalContentElement() {
    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    return modalContent;
  }

  function createSpanCloseElement() {
    var spanClose = document.createElement('span');
    spanClose.classList.add('close');
    spanClose.innerHTML = '&times;';
    return spanClose;
  }

  function createClearElement() {
    var clear = document.createElement('div');
    clear.classList.add('clear');
    return clear;
  }

  function configModal(options) {
    
    // Get all options
    this.options = Object.assign({}, options);

    // Get width options
    this.width = this.options.width || 400;

    // Get background options
    this.background = this.options.background || '#FFF';

    this.wrapModalContent = this.wrapModalContent.bind(this);
  
    // render modal
    this.renderModal();
  
  };

  configModal.prototype.renderModal = function renderModal() {
    
    // Add class modal
    var modal = el(this.options.modal);
    modal.classList.add('modal');
    
    // Add modal content
    var content = findChildren(modal, this.options.content);
    var modalContent = this.wrapModalContent(content);

    // Add action close 
    var close = findChildren(modalContent, '.close')[0];
    close.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    // Add trigger action
    var trigger = el(this.options.trigger);
    trigger.addEventListener('click', function() {
      modal.style.display = 'block';
    }); 

    modal.appendChild(modalContent);
  
  }

  configModal.prototype.wrapModalContent = function wrapModalContent(children) {
    var fragmentModalContent = document.createDocumentFragment();
    var modalContent = createModalContentElement();

    // Styling
    modalContent.style.width = this.width + 'px';
    modalContent.style.background = this.background;

    Array.prototype.forEach.call(children, function(e) {  
      modalContent.appendChild(createSpanCloseElement());
      modalContent.appendChild(createClearElement());
      modalContent.appendChild(e);
      fragmentModalContent.appendChild(modalContent);
    });

    return fragmentModalContent;
  }

  return configModal;

});