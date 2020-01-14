'use strict';

function getDocument(documentId) {
    for(let type in documents) {
        for(let doc of documents[type]) {
            if(doc.documentId === documentId) {
                return doc;
            }
        }
    }
}

const documents = {
    news: [
        { documentId: 1, url: 'http://www.google.com/doc1', openingText: 'This is document #1' },
        { documentId: 2, url: 'http://www.google.com/doc2', openingText: 'This is document #2' },
    ],
    social: [
        { documentId: 3, url: 'http://www.google.com/doc3', openingText: 'This is document #3' }
    ]
}

module.exports = { getDocument };