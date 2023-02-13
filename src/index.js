module.exports = function check(str, bracketsConfig) {
    const bracketsPair = new Map(bracketsConfig);
    const stack = [];
    for (const symbol of str) bracketsPair.get(stack.at(-1)) === symbol ? stack.pop() : stack.push(symbol);

    return stack.length === 0;
}

