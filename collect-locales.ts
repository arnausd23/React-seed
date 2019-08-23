/* eslint-disable import/no-extraneous-dependencies */
const typescriptTransform = require('i18next-scanner-typescript');

module.exports = {
    options: {
        debug: true,
        // read strings from functions: IllegalMoveError('KEY') or t('KEY')
        func: {
            list: ['IllegalMoveError', 't'],
            extensions: ['.js'],
        },

        trans: false,

        // Create and update files `en.json`, `fr.json`, `es.json`
        lngs: ['en', 'fr', 'es'],

        ns: [
            // The namespace I use
            'translation',
        ],

        defaultLng: 'en',
        defaultNs: 'translation',

        // Put a blank string as initial translation
        // (useful for Weblate be marked as 'not yet translated', see later)
        defaultValue: (lng, ns, key) => '',

        // Location of translation files
        resource: {
            loadPath: 'src/engine/locales/.json',
            savePath: 'src/engine/locales/.json',
            jsonIndent: 4,
        },

        nsSeparator: ':',
        keySeparator: '.',
    },
    transform: typescriptTransform({ extensions: [".ts, .tsx"] }),
};