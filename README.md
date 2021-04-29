## Links

<https://andreas-kornblum.herokuapp.com>;
<https://kornavol.github.io/portfolio/>

## Description

### Version

The main problem with this version that Chrom gets a wrong height of the element. Probably it happens because of timing (chrome is slower than other browsers). 
the measure of the element which over viewport occurs in coupla steps. 
First transfering a height of the window and after in some time real height. In order to get the right value state of the app suppose to be updated AFTER the final step but in chrome it happens BEFORE

- UseRef as a reference to an element which is measuring
- height of element which transfers through redux from the current page to App
- Wrong height of an element only in chrome


