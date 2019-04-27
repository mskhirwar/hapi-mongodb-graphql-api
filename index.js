const hapi = require('hapi')
const mongoose = require('mongoose')
const {graphqlHapi, graphiqlHapi} = require('apollo-server-hapi')
const Inert = require('inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')

const Pack = require('./package')
const Painting = require('./models/Painting')
const schema = require('./graphql/schema')


// Mongo DB connect

mongoose.connect('mongodb://mskhirwar:3214mohan@ds147946.mlab.com:47946/sample-rest-api')

mongoose.connection.once('open', () => {
    console.log('connected to database')
})

const server = hapi.server({
    port: 4000,
    host: 'localhost'
})

const init = async () => {

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: {
                info: {
                    title: 'Paintings API Documentation',
                    version: Pack.version
                }
            }
        }
    ])

    await server.register({
		plugin: graphqlHapi,
		options: {
			path: '/graphql',
			graphqlOptions: {
				schema
			},
			route: {
				cors: true
			}
		}
	})

    await server.register({
		plugin: graphiqlHapi,
		options: {
			path: '/graphiql',
			graphiqlOptions: {
				endpointURL: '/graphql'
			},
			route: {
				cors: true
			}
		}
	})

    server.route([
        {
            method: 'GET',
            path: '/',
            handler: (request, reply) => {
                return `<h1>Sample Rest API</h1>`
            }
        },
        {
            method: 'GET',
            path: '/api/v1/paintings',
            config: {
                description: 'Get all the paintings',
                tags: ['api', 'v1', 'painting']
            },
            handler: (request, reply) => {
                return Painting.find()
            }
        },
        {
            method: 'POST',
            path: '/api/v1/paintings',
            config: {
                description: 'Get a specific painting by ID',
                tags: ['api', 'v1', 'painting']
            },
            handler: (request, reply) => {
                const {name, url, technique} = request.payload
                const painting = new Painting({
                    name,
                    url,
                    technique
                })

                return painting.save()
            }
        }
    ])

    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

process.on('unHandledRejection', (err) => {
	if (err) {
		console.log(err)
		process.exit(1)
	}
})

init()
