https://mockend.com/bochen2014/json-server-test/graphql

```js
query myQuery {
  comments(limit: 10, where: {body: {eq: "hxgDTePOAh"}}) {
    id
    body
    post {
      title
      id
    }
  }
}
```



```js
const argv = yargs.config('config').usage('$0 [options] <source>').options({
    port: {
      alias: 'p',
      description: 'Set port',
      default: 3000
    },
    host: {
      alias: 'H',
      description: 'Set host',
      default: 'localhost'
    },
    watch: {
      alias: 'w',
      description: 'Watch file(s)'
    },
    routes: {
      alias: 'r',
      description: 'Path to routes file'
    },
    middlewares: {
      alias: 'm',
      array: true,
      description: 'Paths to middleware files'
    },
    static: {
      alias: 's',
      description: 'Set static files directory'
    },
    'read-only': {
      alias: 'ro',
      description: 'Allow only GET requests'
    },
    'no-cors': {
      alias: 'nc',
      description: 'Disable Cross-Origin Resource Sharing'
    },
    'no-gzip': {
      alias: 'ng',
      description: 'Disable GZIP Content-Encoding'
    },
    snapshots: {
      alias: 'S',
      description: 'Set snapshots directory',
      default: '.'
    },
    delay: {
      alias: 'd',
      description: 'Add delay to responses (ms)'
    },
    id: {
      alias: 'i',
      description: 'Set database id property (e.g. _id)',
      default: 'id'
    },
    foreignKeySuffix: {
      alias: 'fks',
      description: 'Set foreign key suffix (e.g. _id as in post_id)',
      default: 'Id'
    },
    quiet: {
      alias: 'q',
      description: 'Suppress log messages from output'
    },
    config: {
      alias: 'c',
      description: 'Path to config file',
      default: 'json-server.json'
    }
  }).boolean('watch').boolean('read-only').boolean('quiet').boolean('no-cors').boolean('no-gzip').help('help').alias('help', 'h')

  ```

A single hyphen can be followed by multiple single-character flags. A double hyphen prefixes a single, multicharacter option.

Consider this example:

`tar -xfz`
In this example, -xfz specifies three single-character flags: x, f, and z.


  1. `yarn json-server --fks _id  --w db.json` (if you do `-kfs`, it will be interpreted as `-k -f -s`)
  1. `const singularResource = pluralize.singular(name)` there is a name change implied here;
