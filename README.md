# node-js-web-to-image

Convert Web (url) to image or html file to image using html-convert node module

Render a webpage and get the image as a stream.

Install html-convert by using below command:

# npm install html-convert

It uses a pool of phantom processes so it doesn't need to spawn a new process for each website. New requests are added to the pool member with the shortest queue length.

This module depends on the phantomjs-prebuilt module, which will install PhantomJS for you if you don't already have it.

https://phantomjs.org/
