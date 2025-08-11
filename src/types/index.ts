// src/types/index.ts
export interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin';
  createdAt?: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image?: string;
  createdAt?: string;
}

export interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

export interface OrderItem {
  productId: Product;
  quantity: number;
  price: number;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export interface SignupData {
  username: string;
  email: string;
  password: string;
  role?: string;
  adminCode?: string;
}

// // src/types/index.ts

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: 'user' | 'admin';
// }

// export interface SignupData {
//   name: string;
//   email: string;
//   password: string;
// }

// export interface AuthContextType {
//   user: User | null;
//   login: (email: string, password: string) => Promise<void>;
//   signup: (data: SignupData) => Promise<void>;
//   logout: () => void;
//   loading: boolean;
// }
