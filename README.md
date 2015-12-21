# Accordion v.0.1.0

jQuery helper plugin, opens accrodion container.

**Requirements:**

* jQuery

**How to use:**

``` HTML
<div class="js-accordion">
  <a href="#container" class="accordion-opener">Open button</a>
  <div id="container" class="accordion-container">Container</div>
</div>
```

``` JavaScript
if ($.fn.scrolltoSetup) {
  $('.js-accordion').scrolltoSetup({
    openClass: 'is-open',
    buttonClass: '.accordion-opener',
    containerClass: '.accordion-container',
    onlyOnMobile: false
	});
}
```

Copyright 2015 Michał Pacek

Licensed under the Apache License, Version 2.0.
