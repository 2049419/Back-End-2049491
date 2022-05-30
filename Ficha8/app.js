// importar o express
//https://codesandbox.io/s/oqo0ylv8oy?file=/src/controllers/sample.controller.js

const { request, response, query } = require('express');
const express = require('express');
const mysql = require('mysql');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Ficha 7 API",
            description: "Ficha 7 API Information",
            contact: {
                name: "TPSI-DWB"
            },
            servers: ["http://localhost:3000"],
        },
        definitions: {
            "Person": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        
                        "x-primary-key": true
                    },
                    "firstname": {
                        "type": "string"                        
                    },
                    "lastname": {
                        "type": "string"                        
                    },
                    "profession": {
                        "type": "string"                        
                    },                 
                    "age": {
                        "type": "integer",
                        "format": "int64"
                    }
                },
                "xml": {
                    "name": "Person"
                }
            }
        }
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// instanciar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

// funções middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});

/**
 * @swagger
 * /persons:
 *    get:
 *      tags:
 *        - Person
 *      summary: Gets a list of persons
 *      description: Returns a list of persons
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *                $ref: '#/definitions/Person'
 */
app.get('/persons', (request, response) => {
    connection.query('SELECT * FROM persons' ,function(err,rows,fields){
        response.send(rows);
    })
});

/**
 * @swagger
 * /persons:
 *    post:
 *      tags:
 *        - Person
 *      summary: Creates and stores a person
 *      description: Returns the id of the created person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Model
 *            description: Sample person
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              description: Successfully created
 */
app.post('/persons', (request, response) => {
    var person = request.body;
    connection.query('INSERT INTO persons SET ?', [person] ,function(err,rows,fields){
        response.send("Person insert with id: " + rows.insertId);
    })
});

/**
 * @swagger
 * /persons/:
 *    delete:
 *      tags:
 *        - Person
 *      summary: Deletes a person by id
 *      description: Deletes a single sperson by id
 *      produces:
 *          - application/json
 *      parameters:
 *       - name: id
 *         description: Person's id
 *         in: body
 *         required: true
 *         type: string
 *      responses:
 *          200:
 *              description: Successfully deleted
 */
app.delete('/persons', (request, response) => {
    var id = request.body.id;
    connection.query('SELECT * FROM persons id ?', [id], function(err,rows,fields){
        response.send("Person deleted with id: " + rows.deleteId);
    })
});

/**
 * @swagger
 * /persons/{id}:
 *    delete:
 *      tags:
 *        - Person
 *      summary: Deletes a person by id
 *      description: Deletes a single sperson by id
 *      produces:
 *          - application/json
 *      parameters:
 *       - name: id
 *         description: Person's id
 *         in: path
 *         required: true
 *         type: string
 *      responses:
 *          200:
 *              description: Successfully deleted
 */
app.delete('/persons/:id', (request, response) => {
    var id = request.params.id;
    connection.query('SELECT * FROM persons id ?', [id], function(err,rows,fields){
        response.send("Person deleted with id: " + rows.deleteId);
    })
});


/**
 * @swagger
 * /persons/{id}:
 *    get:
 *      tags:
 *        - Person
 *      summary: Reads a single person by id
 *      description: Returns a single person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            description: Person's id
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: A single person
 *              schema:
 *                $ref: '#/definitions/Person'
 */
app.get('/persons/:id', (request, response) => {
    var id = request.params.id;
    connection.query('SELECT * FROM persons WHERE id ?', [id] ,function(err,rows,fields){
        response.send(rows);
    })
});

/**
 * @swagger
 * /persons/{age}/{profession}:
 *    get:
 *      tags:
 *        - Person
 *      summary: Reads a single person by age and profession
 *      description: Returns a single person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: age
 *            description: Person's age
 *            in: path
 *            required: true
 *            type: string
 *          - name: profession
 *            description: Person's profession
 *            in: path
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: A single person
 *              schema:
 *                $ref: '#/definitions/Person'
 */
app.get('/persons/:age/:profession', (request, response) => {
    var age = request.params.age;
    var prof = request.params.profession;
    connection.query('UPDATE * FROM persons WHERE age ? AND prof ?', [age, prof], function(err,rows,fields){
        response.send(rows);
    })
});


/**
 * @swagger
 * /persons{id}:
 *    put:
 *      tags:
 *        - Person
 *      summary: Updates and stores a person
 *      description: Returns the id of the updated person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Id
 *            description: Person's id
 *            in: path
 *            required: true
 *          - name: Model
 *            description: Sample person
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              description: Successfully created
 */
app.put('/persons/:id', (request, response) => {
    var id = request.params.id;
    var person = request.body;
    connection.query('UPDATE persons set ? WHERE id = ?', [person, id], function(err,rows,fields){
        response.send("Chnaged: " + rows.changedRows);
    })
});


// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});



