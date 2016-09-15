# simple-services

Dead simple service manager for node.

## Usage

Can be used as a singleton or initialized:

```
// As singleton:
const services = require('simple-services');

// Initialized
const services = require('simple-services').initialize();
```

Services may be registered, accessed directly, and cannot be replaced or reregistered:

```
services.register('greet', function() { console.log('hi'); });

services.greet(); // hi

try {
    services.greet = function() { console.log('bye'); };
} catch (err) {
    // TypeError: Cannot set property greet of #<Object> which has only a getter 
}
```
