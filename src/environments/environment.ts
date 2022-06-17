// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiUrl = 'http://localhost:3001/api'

export const environment = {
  production: false,
  products: `${apiUrl}/books`,
  users: `${apiUrl}/users`,
  categories: `${apiUrl}/categories`,
  categoriesDetails: `${apiUrl}/categoriesDetails`,
  contact: `${apiUrl}/contact`,
  litmitBooks: `${apiUrl}/litmitBooks`,
  searchBooks: `${apiUrl}/searchBooks`,
  login: `${apiUrl}/signin`,
  register: `${apiUrl}/signup`,
  order:`${apiUrl}/order`,
  orderDetails:`${apiUrl}/orderDetails`,
  pagination:`${apiUrl}/booksPagination`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
