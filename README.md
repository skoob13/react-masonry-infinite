# React Masonry Infinite

Very simple React.js component for masonry grid. Based on [Bricks.js](https://github.com/callmecavs/bricks.js), [React Infinite Scroller](https://github.com/CassetteRocks/react-infinite-scroller) and [React Masonry Layout](https://github.com/scarletsky/react-masonry-layout).

### Demo
[Demo page](https://skoob13.github.io/react-masonry-infinite)

### Features
- Masonry layout
- Perfomance of Bricks.js ([Bricks.js homepage](http://callmecavs.com/bricks.js/))
- Infinite scroll from box

### Instalation
```sh
  npm install react-masonry-infinite --save
```

### Basic example
```js
import MasonryInfiniteScroller from 'react-masonry-infinite';

...
<MasonryInfiniteScroller hasMore={this.state.hasMore} loadMore={() => this.setState({ elements: this.state.elements.push("Element") })}>
    {
        this.state.elements.map((el, index) =>
            <div key={index}/>
        )
    }
</MasonryInfiniteScroller>
...
```

### Props

|       Props        |        Type       |       Default      |     Description    |
|--------------------|-------------------|--------------------|--------------------|
|        className          |       string      |        `''`      | CSS className for root element           |
|      packed        |       string      |    `data-packed`   | An attribute added to the grid items after they're positioned within the grid. If the attribute is not prefixed with `data-`, it will be added. See [Bricks.js](https://github.com/callmecavs/bricks.js) |
|       sizes         |       array       |    `[{ columns: 1, gutter: 20 }, { mq: '768px', columns: 2, gutter: 20 }, { mq: '1024px', columns: 3, gutter: 20 }]` | An array of objects describing the grid's properties at different breakpoints. When defining your sizes, note the rules of [Bricks.js](https://github.com/callmecavs/bricks.js) |
|       position        |       bool      |         `true`       | A boolean indicating that the grid items should be positioned using the `top` and `left` CSS properties. |
|       style        |       object      |         `{}`       | The inline style |
|  pageStart    |      number     |      `0`    | The page number corresponding to the initial `items`, defaults to `0` which means that for the first loading, loadMore will be called with `1` |
|  loadMore    |      function     |      `(pageToLoad) => {}`    | This function is called when the user scrolls down and we need to load items |
|  hasMore    |      bool     |      `true`    | Boolean stating whether there are more items to be loaded. Event listeners are removed if `false` |
|  loader    |      DOMNode     |      `null`    | Loader element to be displayed while loading items |
|  threshold    |      number     |      `250`    | The distance between the bottom of the page and the bottom of the window's viewport that triggers the loading of new items |
|  useWindow    |      DOMNode     |      `null`    | Boolean stating whether to add listeners to the window, or else, the DOMNode |

### License
MIT
