const root = document.getElementById('root');

const func = function (funcName) {
    return function(item) {
        return item[funcName]();
    }
};

["div", "input", "label"].map(tag => {
    window[tag] = function (content, attr, childrens) {
        let el = document.createElement(tag);
        if(content) {
            el.innerHTML = content;
        }

        if(attr) {
            if(attr.hasOwnProperty('className')) {
                el.classList.add(attr.className);
            }
        }

        if(childrens) {
            childrens.map(item => {
                el.appendChild(item);
            });
        }
        return el;
    }
});

const setHTML = function(root, instances) {
    instances.map(instance => {
        root.appendChild(
            div('', {className: 'question'}, [label(instance.text), input()])
        )
    });
};

class Question {
    constructor(source) {
        this.text = source.text;
        this.status = source.status;
    }

    changeStatus(status) {
        this.status = status;
    }
}


function createQuestions(texts) {
    return texts.map(text => new Question({text: text, status: "edit"}))
}

const questions = createQuestions(['test1', 'test2', 'test3', 'test4', 'test5']);

setHTML(root, questions);