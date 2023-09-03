import { defineStore, storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useUser } from './user.js'
import { insertCartAPI, findNewCartListAPI, delCartAPI, mergeCartAPI } from '@/apis/cart.js'

export const useCart = defineStore('cart', () => {
    const userStore = useUser();
    const isLogin = computed(() => userStore.userInfo.value.token)


    let obj = JSON.parse(localStorage.getItem('cart')) || []
    const cartList = ref(obj)

    const addCart = async (goods) => {
        let { skuId, count } = goods
        if (isLogin) {
            let res = await insertCartAPI({ skuId, count })
            let res1 = await findNewCartListAPI();
            // console.log(res1, 'res1')
            cartList.value = res1.data.result;
        } else {
            const item = cartList.value.find(item => item.skuId === goods.skuId)

            if (item) {
                item.count = item.count + goods.count;
            } else {
                cartList.value.push(goods);
            }

            localStorage.setItem('cart', JSON.stringify(cartList.value))
        }

    }


    const delCart = async (skuId) => {
        if (isLogin) {
            delCartAPI(skuId);
            let res = await findNewCartListAPI();
            cartList.value = res.data.result;
        } else {
            cartList.value = cartList.value.filter(item => item.skuId != skuId);

            localStorage.setItem('cart', JSON.stringify(cartList.value))
        }

    }

    const updateCartList = async () =>{
        let res = await findNewCartListAPI();
        cartList.value = res.data.result;
    }
    const singleCheck = (skuId, selected) => {
        const good = cartList.value.find(item => item.skuId == skuId)
        if (good) good.selected = selected;
    }

    const allCheck = (selected) => {
        cartList.value = cartList.value.map(item => {
            item.selected = selected
            return item;
        })
    }

    const allCount = computed(() => {
        return cartList.value.reduce((a, b) => {
            return a + b.count
        }, 0)
    })
    const sum = computed(() => {
        return cartList.value.reduce((a, b) => {
            return a + b.count * b.price
        }, 0)
    })
    const isAll = computed(() => {
        return cartList.value.every(item => item.selected)
    })
    const selectedPrice = computed(() => {
        return cartList.value.reduce((a, b) => {
            return a + b.selected * b.price * b.count
        }, 0)
    })
    const selectedCount = computed(() => {
        return cartList.value.reduce((a, b) => {
            return a + b.selected * b.count
        }, 0)
    })
    return {
        selectedPrice,
        selectedCount,
        allCount,
        sum,
        cartList,
        addCart,
        delCart,
        singleCheck,
        allCheck,
        updateCartList,
        isAll
    }
})