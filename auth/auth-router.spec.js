const request = require('supertest');
const server = require('../api/server.js');

const db = require('../data/db.config.js');



describe('auth-router.js testing', () =>{

    describe('registering a user', () => {
        it('should return 201 OK', () => {
            return db('users')
            .then( () => {
                return request(server)
                .post('api/auth/register')
                .send({ email: 'TestEmail@gmail.com', password: 'test'});
            })
            .then( res => {
                expect(res.status).toBe(201);
            });
        });
    })


});