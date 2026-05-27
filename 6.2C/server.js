const express = require('express');
const app = express();

//Middleware
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//Function to calculate the average marks & validate input
function calculateAverage(marks) {
    if (!Array.isArray(marks) || marks.length === 0) {
        throw new Error('Marks must be a non-empty array');
    }

    const invalidMark = marks.some(mark => typeof mark !== 'number' || mark < 0 || mark > 100);

    if (invalidMark) {
        throw new Error('Marks must be numbers between 0 and 100');
    }

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

//REST api endpoint to check server running
app.get('/api/status', (req, res) => {
    res.status(200).json({
        statusCode: 200,
        message: 'Grade Calculator API is running'
    });
});

// REST api endpoint to calculate average
app.post('/api/average', (req, res) => {
    try {
        const average = calculateAverage(req.body.marks);

        res.status(200).json({
            statusCode: 200,
            average: average
        });
    } catch (error) {
        res.status(400).json({
            statusCode: 400,
            error: error.message
        });
    }
});

if (require.main === module) {
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

//Export app and function for testing
module.exports = { app, calculateAverage };