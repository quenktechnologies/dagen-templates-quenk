import { assert } from '@quenk/test/lib/assert';

import { Record, forEach } from '@quenk/noni/lib/data/record';
import { interp } from '@quenk/noni/lib/data/string';
import {
    doFuture,
    parallel,
    voidPure
} from '@quenk/noni/lib/control/monad/future';
import { exec } from '@quenk/noni/lib/platform/node/cli';
import { makeDir, readTextFile, writeFile } from '@quenk/noni/lib/io/file';

interface TestData {

    schemas: string[],

    cmd: string,

}

const tests: Record<Record<TestData>> = {

    'data-types': {

        'type.nunjucks': {

            schemas: ['post', 'user'],

            cmd: `./node_modules/.bin/dagen --template data-types/type.nunjucks \
                  --plugin ./node_modules/@quenk/dagen-commons/lib/plugins/imports \
                  ${__dirname}/schema/{schema}.json`,

        }

    },

    'data-validators': {

        'type.nunjucks': {

            schemas: ['post', 'user'],

            cmd: `./node_modules/.bin/dagen --templates $(pwd)/data-validators \
                --template type.nunjucks \
                --plugin ./node_modules/@quenk/dagen-commons/lib/plugins/imports \
                --plugin ./node_modules/@quenk/dagen-commons/lib/plugins/validators \
                --namespace validators \
                ${__dirname}/schema/{schema}.json`

        },

        'test.nunjucks': {

            schemas: ['post', 'user'],

            cmd: `./node_modules/.bin/dagen --templates $(pwd)/data-validators \
                  --template test.nunjucks \
                  --namespace validators \
                  ${__dirname}/schema/{schema}.json`


        },

        'index.nunjucks': {

            schemas: ['schemaNames'],

            cmd: `./node_modules/.bin/dagen --templates $(pwd)/data-validators \
                  --template index.nunjucks \
                  --namespace validators \
                 ${__dirname}/schema/{schema}.json`

        }

    },

    'data-checks': {

        'type.nunjucks': {

            schemas: ['post', 'user'],

            cmd: `./node_modules/.bin/dagen --templates $(pwd)/data-checks \
                --template type.nunjucks \
                --plugin ./node_modules/@quenk/dagen-commons/lib/plugins/imports \
                --plugin ./node_modules/@quenk/dagen-commons/lib/plugins/checks \
                --namespace checks \
                --namespace validators \
                ${__dirname}/schema/{schema}.json`

        },

        'test.nunjucks': {

            schemas: ['post', 'user'],

            cmd: `./node_modules/.bin/dagen --templates $(pwd)/data-checks \
                  --template test.nunjucks \
                  --namespace checks \
                  ${__dirname}/schema/{schema}.json`


        },

        'index.nunjucks': {

            schemas: ['schemaNames'],

            cmd: `./node_modules/.bin/dagen --templates $(pwd)/data-checks \
                  --template index.nunjucks \
                  --namespace checks \
                 ${__dirname}/schema/{schema}.json`

        }

    },

    'mongodb-models': {

        'model.nunjucks': {

            schemas: ['post', 'user'],

            cmd: `./node_modules/.bin/dagen --templates $(pwd)/mongodb-models \
                --template model.nunjucks \
                --plugin ./node_modules/@quenk/dagen-commons/lib/plugins/imports \
                --namespace models \
                ${__dirname}/schema/{schema}.json`

        },

        'index.nunjucks': {

            schemas: ['schemaNames'],

            cmd: `./node_modules/.bin/dagen --templates $(pwd)/mongodb-models \
                  --template index.nunjucks \
                  --namespace models \
                 ${__dirname}/schema/{schema}.json`

        }

    },

    'mongodb-search-filters': {

        'model.nunjucks': {

            schemas: ['post', 'user'],

            cmd: `./node_modules/.bin/dagen --templates $(pwd)/mongodb-search-filters \
                --template collection.nunjucks \
                --plugin ./node_modules/@quenk/dagen-commons/lib/plugins/imports \
                --namespace filters \
                ${__dirname}/schema/{schema}.json`

        },

        'index.nunjucks': {

            schemas: ['schemaNames'],

            cmd: `./node_modules/.bin/dagen --templates $(pwd)/mongodb-search-filters \
                  --template index.nunjucks \
                  --namespace filters \
                 ${__dirname}/schema/{schema}.json`

        }

    }


}

forEach(tests, (suite, submod) => {

    // dynamically generate a describe() block for each template module
    // configured.
    describe(submod, () => {

        // dynamically generate an it() block for each template.
        forEach(suite, (test, template) => {

            it(template, () => doFuture(function*() {

                let outDir = `${__dirname}/expected/${submod}`;

                if (process.env.GENERATE) yield makeDir(outDir);

                yield parallel(test.schemas.map(schema =>
                    doFuture(function*() {

                        let target = `${outDir}/${schema}_${template}.ts`;

                        let [result] =
                            yield exec(interp(test.cmd, { schema }));

                        if (process.env.GENERATE) {

                            yield writeFile(target, result);

                        } else {

                            let expected = yield readTextFile(target);

                            assert(result).equal(expected);

                        }

                        return voidPure;

                    })));

                return voidPure;

            }))
        })
    });
})
