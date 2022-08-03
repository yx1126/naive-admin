export default function(fn: (...values: any[]) => void, delay = 500, immediate = false){
    let timer: NodeJS.Timeout;
    let flag = true;
    return function(...args: any[]){
        if(timer) clearTimeout(timer);
        if(immediate && flag) {
            fn.call(null, ...args);
            flag = false;
        }
        timer = setTimeout(immediate ? () => flag = true : fn.bind(null, ...args), delay);
    };
}
