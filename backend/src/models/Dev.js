const { Schema, model } = require('mongoose'); // {} Importar dependências dentro de um objeto.

const DevSchema = new  Schema({
    name: {
        type: String,
        required: true, 
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId, // Formato de id do Mongo
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true, // CreatedAt = cria a data de criação e UpdatedAt = data da ultima modificação
}); 

module.exports = model('Dev', DevSchema);

