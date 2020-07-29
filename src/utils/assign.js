/* 合并对象
 * @param {Object} target  目标
 * @param {Array} sources  对象
 * @param {Array} keys     字段
 */
export function assignKeysA(target, sources, keys) {
    for (let i = 0; i < sources.length; i++) {
        assignKeys(target, sources[i], keys);
    }
    return target;
}

export function delKeys(target, keys) {
    for (let i = 0; i < keys.length; i++) {
        delete target[keys[i]];
    }
}
export function assignKeys(target = {}, source, keys) {
    if (source != undefined) {
        let key, value;
        for (let i = 0; i < keys.length; i++) {
            key = keys[i];
            value = source[key];
            if (value !== undefined) {
                target[key] = value;
            }
        }
    }
    return target;
}