module.exports = () => {
    return (req, res, next) => {
        const time = new Date().toISOString();
        console.log(`Time: ${time}, Method: ${req.method}, URL: ${req.url}`);
        next();
    };
};