module.exports = {
    rules: [
        [/^(c|color)-(\d+|\w+)$/, ([,,d]) => /\d/g.test(d) ? ({ color: `#${d}` }) : void 0],
        [/^(c|color)-(\d+|\w+)-(\d+)$/, ([,,d, n]) => ({ color: /\d/g.test(d) ? `#${d}` : d, opacity: n / 1000 })],
        [/^(w|width)-(\d+)p$/, ([,,d]) => ({ width: `${d}%` })],
        [/^(h|height)-(\d+)p$/, ([,,d]) => ({ height: `${d}%` })],
    ],
};
