import { createContext } from 'react';
import { context as contextType } from './interface';

const Context = createContext<contextType | null>(null);

export default Context;
