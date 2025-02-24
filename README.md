# Sabre Node.js SDK

Node.js library for the Sabre API (SOAP).

## Install

```bash
npm install sabre-legacy-client
```

## Setup

First, you need to get an username, password and pcc which is available in the [DEV STUDIO - Applications](https://developer.sabre.com/my-account/applications).

```js
import { SabreLegacy } from 'sabre-legacy-client';
const sabre = new SabreLegacy({
  username: '773400', 
  password: 'PASSWORD_GOES_HERE',
  organization: '7TZA', // pcc
});
```

## Documentation

See http://developer.sabre.com

## License

MIT License