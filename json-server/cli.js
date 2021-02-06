const argv = yargs
    .config('config')
    .usage('$0 [options] <source>')
    .options({


        foreignKeySuffix: {
            alias: 'fks',
            description: 'Set foreign key suffix (e.g. _id as in post_id)',
            default: 'Id',
        }
    }