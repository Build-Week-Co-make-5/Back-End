const express = require('express');
const request = require('supertest');

describe('server.js', () => {
    test('should be the testing env', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
});