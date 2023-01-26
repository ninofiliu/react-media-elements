# React Media Elements

Support for media attributes in `<audio>` and `<video>`

## Installation

Pick your favorite

```sh
npm install react-media-elements
pnpm add react-media-elements
yarn add react-media-elements
```

## Getting started

React does not, and will never, support these:

```tsx
const MyComponent = () => (<>
  <video playbackRate={2}>
</>)
```

> There are tons of \[properties like `srcObject`\]. It doesn't make sense to me to support just this one and not others. And adding more properties to the whitelist will significantly increase the bundle size of React which is a no-go.
>
> The workaround is straightforward: use refs and assign properties with DOM API directly. If you want, wrap this logic in a custom component and then it'll be an implementation detail.
>
> https://github.com/facebook/react/pull/9146#issuecomment-355584767

And this is exactly what this small package does! Usage is as follow:

```tsx
import { MediaVideo } from "react-media-elements";

const MyComponent = () => (<>
  <MediaVideo playbackRate={2}>
</>)
```

Types are built-in :wink:

![image](https://user-images.githubusercontent.com/29477588/214721391-0ddf2fe2-10e7-405c-960a-588d0efe55ee.png)

---

Written with [typescript](https://www.typescriptlang.org/), [vite](https://vitejs.dev/), and \<3 by [Nino Filiu](https://twitter.com/ninofiliu)
