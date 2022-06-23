// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
 // baseUrl:'http://localhost:8080/todos',
  //usersBaseUrl:'http://localhost:8080/users',
  //contUserBaseUrl: 'http://localhost:8080/users/contador',
  //contTodoBaseUrl:'http://localhost:8080/todos/quantidadeServicos',
  //contEmpresaBaseUrl: 'http://localhost:8080/empresas/quantidadeEmpresa',
  //empresaBaseUrl:'http://localhost:8080/empresas',
  

  usersBaseUrl:'https://conectbe-api.herokuapp.com/users',
  baseUrl:'https://conectbe-api.herokuapp.com/todos',
  contUserBaseUrl: 'https://conectbe-api.herokuapp.com/contador',
  contEmpresaBaseUrl: 'https://conectbe-api.herokuapp.com/quantidadeEmpresa',
  empresaBaseUrl:'https://conectbe-api.herokuapp.com/empresas',
  contTodoBaseUrl:'https://conectbe-api.herokuapp.com/quantidadeServicos'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
