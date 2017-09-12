const func = function (funcName) {
    return function(item) {
        return item[funcName]();
    }
};

const setHTML = function(el, instances) {
    instances.map(item => {
        let div = document.createElement('div');
        div.innerHTML = item.text;
        el.appendChild(div)
    });
};

export {func, setHTML};