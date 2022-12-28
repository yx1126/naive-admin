export default function<T>(value: T, delay = 200) {
    let timer: number | null = null;
    return customRef<T>((track, trigger) => {
        return {
            get() {
                track();
                return value;
            },
            set(newValue) {
                if(timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                timer = setTimeout(() => {
                    value = newValue;
                    trigger();
                }, delay);
            },
        };
    });
}
