### not need css module

## Place next in parent Component

#### `const [page, setPage] = useState(1);`

#### Insert page handler function

```js
function handlePage(page) {
  console.log(page); // just for checking
  setPage(page);
}
```

#### Call component and put the props of your need:

- page - current page
- pages count,
- size in px,
- fontSize in px,
- backgroundColor (bgColor),
- selected
- border color (brColor),
- border radius (brRadius) in px
- handlePage
- count per page

#### Do not include unneeded props

```js
<Paginator />
```
