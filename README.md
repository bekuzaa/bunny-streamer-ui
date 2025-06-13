# Bunny Streamer-UI

The user interface of the Bunny Streamer for the connection to the [datarhei Core](https://github.com/datarhei/core) application.

- React
- Material-UI (MUI)

## Development

### For the Bunny Streamer interface:

```bash
$ git clone github.com/datarhei/bunny-streamer-ui
$ cd bunny-streamer-ui
$ yarn install
$ npm run start
```

Connect the UI with a [datarhei Core](https://github.com/datarhei/core):
http://localhost:3000?address=http://core-ip:core-port

### To add/fix translations:
Locales are located in `src/locals`
```
$ npm run i18n-extract:clean
$ npm run i18n-compile
```

## License
See the [LICENSE](./LICENSE) file for licensing information.
