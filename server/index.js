import { Server } from 'socket.io';

import Connection from './database/db.js';

import { getDocument, updateDocument } from './controller/documentController.js'

const PORT = process.env.PORT || 9000;

Connection();

const io = new Server(PORT , {

    cors: {  //cors is a security error so we will bypass here
        origin: 'http://localhost:3000',
        methods: ['GET','POST']

    }
});

io.on('connection', socket => {
    socket.on('get-document', async documentId => {
        const document = await getDocument(documentId);
        socket.join(documentId);
        socket.emit('load-document', document.data);

        socket.on('send-changes', delta => {
            socket.broadcast.to(documentId).emit('receive-changes', delta);
    
        }) 
        
        socket.on('save-document', async data => {
            await updateDocument(documentId , data );
        })
    })
});


