const GREETINGS = [
    "You're Whalecome!",
    "All hands on deck!",
    "Charting the course ahead!",
    "I am farmer, hear me plow!",
    "DevOps, here I come!"
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};