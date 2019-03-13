import { VeLib } from './components/VeLib';

const install = function(Vue) {
    VeLib.install(Vue);
};

export { install, VeLib };

export default {
    install
};
