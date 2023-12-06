![Clipboard01](https://github.com/yuchormanski/ComponentsLibrary/assets/693307/8cccd0ab-d342-4d26-9185-239a67bc8d65)

### not need css module

## Place next in parent Component

#### Define state

#### import hook

```js
const [currentPage, setCurrentPage] = useState({});
const [dataReceived, setDataReceived] = useState([]);
const [length, setLength] = useState(0);
const [page, setPage] = useState(1);
```

#### Use the provided HOOK

```js
const path = "URL to data";
const itemPerPage = 2; // count of the items on page
const data = usePagination(path);
const dataArray = [];
```

#### Split received data to chunks

```js
useEffect(
  function () {
    if (dataReceived.length > 0) {
      for (let i = 0; i < dataReceived.length; i += itemPerPage) {
        const chunk = dataReceived.slice(i, i + itemPerPage);
        dataArray.push(chunk);
      }
      setCurrentPage(dataArray[page - 1]);
    }
  },
  [page]
);
```

#### Insert page handler function

```js
function handlePage(page) {
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

- On the other side are set default values. If you pass new, they will be overwrite

```js
<Paginator
  page={page}
  pages={length}
  countOnPage={itemPerPage}
  // size={24}
  // fontSize={1.6}
  // bgColor=""
  // brColor=""
  // handlePage={handlePage}
  // selected="red"
/>
```
