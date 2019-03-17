add = (a, b) => (a + b)

if (typeof window === 'undefined') {
    module.exports = {
        add
    }
}