import { createPinia } from "pinia";

// pinia创建的store不需要写modules属性，因为它的每个module都是由defineStore创建出来的
const pinia = createPinia();

export default pinia;
