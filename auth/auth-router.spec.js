const authRouter = require('./auth-router.js');
const request = require('supertest');

describe('auth-router.js', () =>{

    test('should be the testing environment', () =>{
        expect(process.env.DB_ENV).toBe('testing');
    })


});