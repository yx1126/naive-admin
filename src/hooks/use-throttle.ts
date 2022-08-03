export default function(fn: (...values: any[]) => void, delay = 200, immediate = false){
    let timer: NodeJS.Timeout;
    let flag = true;
    return function(...args: any[]){
        if(flag) {
            flag = false;
            if(immediate) fn.call(null, ...args);
            timer = setTimeout(() => {
                if(!immediate) fn.call(null, ...args);
                clearTimeout(timer);
                flag = true;
            }, delay);
        }
    };
}
