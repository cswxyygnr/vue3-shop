import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategory } from '@/apis/Layout.js'

export const useCategoryStore = defineStore('Category', () => {
    const ulList = ref([]);

    const getHeaderUl = async () => {
        const res = await getCategory()
        ulList.value = res.data.result;
    }

    return {ulList,getHeaderUl}
})