export default function<T = any, R = void>(fn: (e: T) => R, delay = 200){
    let timer: number | null = null;
    return function(){
        if(timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(fn, delay);
    };
}
