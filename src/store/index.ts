import { createPinia } from 'pinia';
import useTabbarStore from './modules/tabbar';

const pinia = createPinia();

export { useTabbarStore };
export default pinia;
