# vue-pinia-store

## Install

```bash
npm install --save vue-pinia-store
```

## Usage

```js
import { createPinia } from "pinia";
import createPiniaStore from "vue-pinia-store";

const pinia = createPinia();

pinia.use(createPiniaStore());

export default pinia;
```

## Examples

### with customize storage parameters

```js
import { createPinia } from "pinia";
import createPiniaStore from "vue-pinia-store";

const pinia = createPinia();

pinia.use(
    createPiniaStore({
        reducer: (state) => {
            return {
                menu: {
                    count: state.menu?.count,
                    menu: state.menu?.menu,
                },
                user: {
                    info: state.user?.info,
                    count: state.user?.count,
                },
            };
        },
    })
);

// menu.js
const useMenuStore = defineStore({
    id: "menu",
    state: () => ({
        menu: [],
        count: 0,
    }),
});

// user.js
const useUserStore = defineStore({
    id: "user",
    state: () => ({
        info: null,
        count: 0,
    }),
});
```

### customize Storage

```js
import { createPinia } from "pinia";
import createPiniaStore from "vue-pinia-store";

const pinia = createPinia();

pinia.use(
    createPiniaStore({
        storage: window.sessionStorage,
    })
);

// or custom

pinia.use(
    createPiniaStore({
        storage: {
            getItem: (key) => {
                return window.sessionStorage.getItem(key);
            },
            setItem: (key, value) => {
                window.sessionStorage.setItem(key, value);
            },
        },
    })
);
```

### with typescript

```ts
import { createPinia } from "pinia";
import createPiniaStore from "vue-pinia-store";

const pinia = createPinia();

interface MenuState {
    menu: Menu[];
    count: number;
}

const useMenuStore = defineStore({
    id: "menu",
    state: (): MenuState => ({
        menu: [],
        count: 0,
    }),
});

interface UserState {
    info: any;
    count: number;
}

const useUserStore = defineStore({
    id: "user",
    state: (): UserState => ({
        info: null,
        count: 0,
    }),
});

interface RootState {
    menu: MenuState;
    set: SetState;
    user: UserState;
}

pinia.use(
    createPiniaStore<RootState>({
        storage: window.sessionStorage,
    })
);
```

## API

| parameter           |      default |                                                                                |
| ------------------- | -----------: | -----------------------------------------------------------------------------: |
| `key<String>`       |    vue-pinia |                                     The key to store the persisted state under |
| `separate<Boolean>` |        false | Whether to save the state separately, if true, save the state as key+module ID |
| `stroage<Object>`   | localStorage |                                                             How to store state |
| `reducer<Function>` |              |                                          Decide which states need to be stored |

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
