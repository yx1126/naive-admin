import mitt from "mitt";

type Events = {
    "load:start"?: undefined;
    "load:finish"?: undefined;
    "load:error"?: undefined;
};

const emitter = mitt<Events>();

export default () => {
    return emitter;
};
