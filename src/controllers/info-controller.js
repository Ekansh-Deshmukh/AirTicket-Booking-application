const info = (req, res) => {
    return res.json({
        success: true,
        message: "ok"
    });
};
module.exports = {
    info
}