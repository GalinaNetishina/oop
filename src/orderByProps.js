export default function orderByProps(anyObject, props) {
    let keys = Object.keys(anyObject);
    keys.sort();
    const orderedProps = [];
    for (let prop of props) {
        if (prop in anyObject){
            orderedProps.push({key: prop, value: anyObject[prop]});
            keys.splice(keys.indexOf(prop), 1);
        }
    }
    for (let prop of keys) {
        orderedProps.push({key: prop, value: anyObject[prop]});
    }
    return orderedProps;    
}
