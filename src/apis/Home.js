import httpInstance from '@/utils/http.js'

export function getBanners(params = {}){

    const {distributionSite = '1'} = params
    return httpInstance({
        url:'/home/banner',
        params:{
            distributionSite
        }

    })
}

export function getNew(){
    return httpInstance({
        url:'/home/new'
    })
}

export function getProduct(){
    return httpInstance({
        url:'/home/goods'
    })
}