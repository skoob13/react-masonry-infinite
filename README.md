# React Masonry Infinite

[![npm](https://img.shields.io/npm/dy/localeval.svg)](https://npmjs.com/react-masonry-infinite)

Very simple React.js component for masonry grid. Based on [Bricks.js](https://github.com/callmecavs/bricks.js), [React Infinite Scroller](https://github.com/CassetteRocks/react-infinite-scroller) and [React Masonry Layout](https://github.com/scarletsky/react-masonry-layout).

Component is mostly suitable for static data, but can be used with dynamic with instance methods.

### Demo
[Demo page](https://skoob13.github.io/react-masonry-infinite)

### Features
- Masonry layout
- Perfomance of Bricks.js ([Bricks.js homepage](http://callmecavs.com/bricks.js/))
- Infinite scroll from a box

### Instalation

Using `NPM`

```sh
  npm install --save react-masonry-infinite 
```

Using `yarn`

```sh
  yarn add react-masonry-infinite 
```

### Basic example
```js
import MasonryInfiniteScroller from 'react-masonry-infinite';

...
<MasonryInfiniteScroller
    hasMore={this.state.hasMore}
    loadMore={() => this.setState({ elements: this.state.elements.push("Element") })}
>
    {
        this.state.elements.map(id =>
            <div key={id} />
        )
    }
</MasonryInfiniteScroller>
...
```

### Props

|Props|Type|Default|Description|
|:-:|:-:|:--|:--|
|        className          |       String      |        `''`      | CSS className for root element           |
|      pack        |       Boolean      |    `false`   | Flag to force pack on every update |
|      packed        |       String      |    `data-packed`   | An attribute added to the grid items after they're positioned within the grid. If the attribute is not prefixed with `data-`, it will be added. See [Bricks.js](https://github.com/callmecavs/bricks.js) |
|       sizes         |       Array       |    `[{ columns: 1, gutter: 20 }, { mq: '768px', columns: 2, gutter: 20 }, { mq: '1024px', columns: 3, gutter: 20 }]` | An array of objects describing the grid's properties at different breakpoints. When defining your sizes, note the rules of [Bricks.js](https://github.com/callmecavs/bricks.js) |
|       position        |       Boolean      |         `true`       | A Boolean indicating that the grid items should be positioned using the `top` and `left` CSS properties. |
|       style        |       Object      |         `{}`       | The inline style |

And other [React Infinite Scroller](https://github.com/CassetteRocks/react-infinite-scroller) props.

### Methods

|Method|Description|
|:-:|:--|
|forcePack|Packs Bricks.js instance (usefull when data is dynamic)|
|forceUpdate|Updates Bricks.js instance|
|createNewInstance|Recreates Bricks.js instance. E.g. when you need to dynamically handle amount of columns.|

### License
MIT
