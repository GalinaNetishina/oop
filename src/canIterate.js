export default function canIterate(testedObject){
    if (testedObject == null) return false
    return (typeof testedObject[Symbol.iterator] === 'function')
}