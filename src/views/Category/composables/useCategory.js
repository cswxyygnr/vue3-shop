import { getBread } from '@/apis/Category'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
    let categoryData = ref({});
    let route = useRoute();
    const getData = async (id) => {
        let res = await getBread(id);
        categoryData.value = res.data.result;
    }

    onMounted(()=>{
        getData(route.params.id);
    });

    //在分类页点击导航时路由发生变化，重新发送请求；
    onBeforeRouteUpdate((to) => {
        //在此处需要获取最新路由信息；
        getData(to.params.id);
    })

    return {
        categoryData
    }
}