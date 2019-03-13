import VeLib from './src/index';

VeLib.install = function(Vue) {
    Vue.component(VeLib.name, VeLib);
};

const install = function(Vue) {
    VeLib.install(Vue);
};

export { install, VeLib };

export default {
    install
};
