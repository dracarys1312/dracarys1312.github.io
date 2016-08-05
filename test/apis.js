var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
    it('should return 200 OK', function(done) {
        request(app)
        .get('/')
        .expect(200, done);
    });
});
describe('POST /', function() {
    it('should create a product', function(done) {
        request(app)
        .post('/api/v1/products/create')
        .field('name', 'test')
        .field('description', 'test')
        .expect(200, done);
    });
});
// describe('PUT /', function() {
//     it('should update a user', function(done) {
//         request(app)
//         .put('/api/v1/users/update/57a488a6635b747e14afb600')
//         .set({"Authorization":"Bearer ZZnASLjD1fCN5J+JTopSQM7S4xAGF1ziCWUMwHfevLIsR1f7a/FHTED6ZdFA7vZVgfQ7WStsXnnJ3TFGmB5sRg=="})
//         .field('username', 'testupdate')
//         .field('password', 'test1312')
//         .field('email', 'test1312@gmail.com')
//         .expect(200, done);
//     });
// });
