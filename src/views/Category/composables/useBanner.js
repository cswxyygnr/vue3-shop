import { getBanners } from '@/apis/Home.js'

 export function useBanner() {
    let bannerList = ref([]);

    const getBannerList = async () => {
        let res = await getBanners({ distributionSite: '2' });

        console.log(res);
        bannerList.value = res.data.result;
    }
    onMounted(()=>{
        getBannerList();
    });

    return {
        bannerList
    }
}