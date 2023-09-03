import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy',{
            mounted(el,binding){
                //el 指令绑定的元素 img
                //指令的值 binding.value
                const {stop} = useIntersectionObserver(el,([{isIntersecting}])=>{
                    if(isIntersecting){
                        console.log(isIntersecting)
                        el.src = binding.value;
                        stop();
                    }
                })
            }
        })
    }
}