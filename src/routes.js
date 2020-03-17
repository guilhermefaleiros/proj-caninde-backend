const cors = require('cors');
const express  = require('express');
const routes = express.Router();

const multer = require('multer');
const multerConfig = require('./config/multer');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const PostController = require('./app/controllers/PostController');

const authMiddleware = require('./app/middlewares/auth');

routes.use(cors());
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/posts', PostController.index );

routes.use(authMiddleware)

routes.post('/posts', multer(multerConfig).array("photos", 3), PostController.store );
routes.get('/posts/:id', PostController.show);
routes.delete('/posts/:id', PostController.delete);
routes.put('/posts', PostController.update);


module.exports = routes