export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface Class {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  instructor: string;
  style: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  price: number;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ClassesResponse {
  classes: Class[];
  pagination: Pagination;
}