const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, calculateAverage } = require('../server');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Task 6.2C Testing', () => {

    it('should return API status successfully', (done) => {
        chai.request(app)
            .get('/api/status')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.statusCode).to.equal(200);
                expect(res.body.message).to.equal('Grade Calculator API is running');
                done();
            });
    });

    it('should calculate the average of valid marks', () => {
        const result = calculateAverage([80, 90, 100]);
        expect(result).to.equal(90);
    });

    it('should handle edge case with minimum and maximum marks', () => {
        const result = calculateAverage([0, 100]);
        expect(result).to.equal(50);
    });

    it('should throw an error for an empty marks array', () => {
        expect(() => calculateAverage([])).to.throw('Marks must be a non-empty array');
    });

    it('should throw an error for invalid marks', () => {
        expect(() => calculateAverage([75, -5, 110])).to.throw('Marks must be numbers between 0 and 100');
    });

});