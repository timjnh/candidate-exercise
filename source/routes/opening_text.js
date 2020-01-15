const Joi = require('@hapi/joi'),
    Boom = require('@hapi/boom'),
    documentRepository = require('../document_repository');

module.exports = {
    method: 'GET',
    path: '/document/{documentId}/openingText',
    options: {
        tags: ['api'],
        validate: {
            params: {
                documentId: Joi.number().required().description('The Id of a document'),
            }
        }
    },
    handler: async (request) => {
        let document = documentRepository.getDocument(request.params.documentId);
        if(!document) {
            return Boom.notFound();
        }
        return document.openingText;
    }
};
