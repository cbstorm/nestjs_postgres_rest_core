import moduleGenerator from './__generator/module.generator.mjs';
import routeGenerator from './__generator/router.generator.mjs';
const generate = (plop) => {
    routeGenerator(plop);
    moduleGenerator(plop);
    plop.setHelper('Case', function (text) {
        return text[0].toUpperCase() + text.slice(1);
    });
};

export default generate;
