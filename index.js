console.clear();

function protoFunc (obj) {

    while (obj !== null) {
        console.log(obj);
        obj = obj.__proto__;
    }

}

const randomObject = {};

protoFunc(randomObject);