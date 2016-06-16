
'use strict';

(() => {

    /**
     * firstEntityValue
     *
     * Usefull to extract first entity match
     * @see Wit.ai quickstart for source
     */
    const firstEntityValue = (entities, entity) => {
        const val = entities && entities[entity] &&
            Array.isArray(entities[entity]) &&
            entities[entity].length > 0 &&
            entities[entity][0].value
        ;
        if (!val) {
            return null;
        }
        return typeof val === 'object' ? val.value : val;
    };

    module.exports = firstEntityValue;

})();
