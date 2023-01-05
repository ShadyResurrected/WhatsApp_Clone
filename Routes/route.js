import express from 'express';

import { newConversation, getConversation } from '../Controller/conversationController.js';
import { addUser, getUsers } from '../Controller/userController.js';
import { newMessage, getMessages }from '../Controller/messageController.js';
import { uploadImage, getImage } from '../Controller/imageController.js';

import upload from '../utils/upload.js';

const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessages);

route.post('/file/upload', upload.single('file'), uploadImage);
route.get('/file/:filename', getImage);


export default route;