# HTML/CSS Resume for Print

## Key Findings

+ Without special UA or polyfills :
  + Broswers do understand `@page { margin }` and `element {break-after}` and `break-before` props. Its possible to remove the default header/footer by setting `@page {margin:0}`.
  + It's possible to add a header/footer to the pages by hacking around (look at the link in the Interesting Resources section)
  + However, browser consistently fail at generated components. It's not possible to have Page Numbers for instance work properly. It's not possible either to generate section titles.
+ At the moment of writing, broswer support is not good enough to make print edition viable. Either a special UA or a polyfill is required.

## Interesting Resources

+ One of the most complete articles, A Guide To The State Of Print Stylesheets In 2018 by Rachel Andrews [[article](https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/)]
+ Priting for the web by Michael Perrin [[article](http://blog.michaelperrin.fr/2019/11/04/printing-the-web-part-2-html-and-css-for-printing-books/)]. But this does not work in browsers without polyfills. This is more likelyto be compatible with special UAs
+ Making header/footer for print in vanilla HTML/CSS [[demo](https://plnkr.co/edit/lWk6Yd?preview)]|[[article](https://medium.com/@Idan_Co/the-ultimate-print-html-template-with-header-footer-568f415f6d2a)]

## Libraries/resources

+ [Prince](https://www.princexml.com/). Requires purchasing an (expensive) license but is likely to be the UA with the most complete API.
+ [wkhtmltopdf](https://wkhtmltopdf.org/) : free, avilable as cli, also has a [npm wrapper](https://wkhtmltopdf.org/docs.html). Downsides : doesn't use standard CSS api for page dimensions
+ [WeasyPrint](https://weasyprint.org/) : free, looks like it strives on implementing the standard CSS api for print. 
+ [PagesJS](https://www.pagedjs.org) : a free browser polyfill for the standard CSS print API. Downside : creates a shitton of classes and stuffs that complexify simple code
