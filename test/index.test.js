const request = require('supertest');
const app = require('../index');
const assert = require('assert');

describe('API Test Suite', () => {
    it('should return data from the root endpoint', async () => {
        const response = await request(app).get('/');
        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.text, 'Hello, open source contributor!');
    });

    it('should return JSON data from /data endpoint', async () => {
        const response = await request(app).get('/data');
        assert.strictEqual(response.status, 200);
        // Ensure the response is in JSON format and has the expected message
        assert.strictEqual(response.headers['content-type'].includes('json'), true);
        assert.strictEqual(response.body.message, 'This is some sample data for beginners!');
    });
});