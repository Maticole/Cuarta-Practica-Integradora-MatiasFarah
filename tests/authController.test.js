const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 

chai.use(chaiHttp);
const expect = chai.expect;

describe('Router de Sessions', () => {
  describe('POST /api/login', () => {
    it('debe iniciar sesión como usuario con credenciales válidas', (done) => {
      
      chai.request(app)
        .post('/api/login')
        .send({ email: 'correo@example.com', password: 'contraseña' }) 
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          
          done();
        });
    });
  });

 
});