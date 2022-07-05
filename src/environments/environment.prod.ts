const apiUrl = 'https://nodejs-angular-ten.vercel.app/api'

export const environment = {
  production: true,
  apiUrl: 'https://nodejs-angular-ten.vercel.app/api',
  products: `${apiUrl}/books`,
  users: `${apiUrl}/users`,
  categories: `${apiUrl}/categories`,
  categoriesDetails: `${apiUrl}/categoriesDetails`,
  litmitBooks: `${apiUrl}/litmitBooks`,
  searchBooks: `${apiUrl}/searchBooks`,
  login: `${apiUrl}/signin`,
  register: `${apiUrl}/signup`,
  order:`${apiUrl}/order`,
  orderDetails:`${apiUrl}/orderDetails`,
  pagination:`${apiUrl}/booksPagination`
};
