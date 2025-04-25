import { useContext } from 'react';
import { CartContext } from '@/utils/contexts/CartContext';

export const useCart = () => useContext(CartContext)
