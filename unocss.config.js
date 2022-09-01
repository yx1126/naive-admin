module.exports = {
    rules: [
        [/^(c|color)-(\d+)$/, ([,,d]) => ({ color: `#${d}` })],
    ],
};
