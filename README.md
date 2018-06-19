# Hash0ABA75
An HTML Theme written in JavaScript! The main advantage of using this theme is that you don't have to write the navigation bar, or footer far all of your pages, since it will automatically be added by the scripts.
# Who made it?
Infinitytec did most of the work on the actual them style, but I (chexbox) converted it for easy use. This theme was originally made for use in AlgCalc.
# How do I use it?
- Add this to the `<head>` of the file:
```html
<script src="main.js"></script>
<link rel="stylesheet" type="text/css" href="style.css" />
```
- And this to the end of `<body>`:
```html
<script>
  var theme = { 
    "name": "Example Page", 
    "nav": [["first", "firstlink"], 
       ["second","secondlink"]], 
    "footercontent":"n"
  };
  show();
</script>
```
More details on `theme` json below.
- The content of the page __must__ be inside `<main id="main">` tags.
- Sections are seperated with `<div class="card">` tags.
- A half card can be made by adding the card to the `half` class.
# theme variable
```javascript
theme.name = "the Name You Want In The Bar At Top";
theme.footercontent = "the content of the footer";
theme.nav = [["navigation title", "url"],["title","url"], ...]
```
