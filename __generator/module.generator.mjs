export default function generate(plop) {
    plop.setGenerator('module', {
        description: 'Generate GraphQL module',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the module?',
            },
            {
                type: 'input',
                name: 'type',
                message: 'Which type will extend?',
            },
            {
                type: 'input',
                name: 'modelName',
                message: 'What is the Vietnamese model name of module?',
            },
        ],
        actions: function (data) {
            const actions = [
                {
                    type: 'add',
                    path: 'src/GraphQL/modules/{{Case name}}/{{name}}.model.ts',
                    templateFile: '__generator/__templates/module/model.hbs',
                },
                {
                    type: 'add',
                    path: 'src/GraphQL/modules/{{Case name}}/{{name}}.dto.ts',
                    templateFile: '__generator/__templates/module/dto.hbs',
                },
                {
                    type: 'add',
                    path: 'src/GraphQL/modules/{{Case name}}/{{name}}.controller.ts',
                    templateFile:
                        '__generator/__templates/module/controller.hbs',
                },
                {
                    type: 'add',
                    path: 'src/GraphQL/modules/{{Case name}}/{{name}}.service.ts',
                    templateFile: '__generator/__templates/module/service.hbs',
                },
                {
                    type: 'add',
                    path: 'src/GraphQL/modules/{{Case name}}/{{name}}.repository.ts',
                    templateFile:
                        '__generator/__templates/module/repository.hbs',
                },
                {
                    type: 'append',
                    path: 'src/Statics/Permission/permission.json',
                    pattern: /{ "append": "here" }/g,
                    separator: ',',
                    templateFile:
                        '__generator/__templates/module/permission.hbs',
                },
            ];
            return actions;
        },
    });
}
