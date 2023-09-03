import {loginAPI} from '@/apis/user.js'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import {mergeCartAPI} from '@/apis/cart.js'
import {useCart} from './cart'

export const useUser = defineStore('user',()=>{
    const router = useRouter();
    const cartStore = useCart();

    let obj = JSON.parse(localStorage.getItem('userInfo')) || {}
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let userInfo = ref(obj)

    const getUserInfo = async ({account,password}) => {
        // console.log(account,password);
        let res = await loginAPI({account,password});
        userInfo.value = res.data.result;
        userInfo.value.password = password;

        mergeCartAPI(cart.map(item=>{
            return{
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }));
        cartStore.updateCartList();

        localStorage.setItem('userInfo', JSON.stringify(userInfo.value));
    }

    const clearUserInfo = () => {
        userInfo.value = {};
        localStorage.removeItem('userInfo');
        localStorage.removeItem('cart');
    }
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
})