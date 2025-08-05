export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const endpoints = {
  product: {
    list: "/products", 
    details: (id: number) => `/products/${id}`,
  },
  categories:{
    list:'/categories'
  }
};


