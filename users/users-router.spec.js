const server = require('../api/server.js');
const request = require('supertest');

describe('users-routing testing', () => {

    it('should be the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe(' GET /', () => {

        it('should return 200 ok', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        })


        it('should be json', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        })
    })
})