import { createClient } from "redis"

const client = await createClient().on('error', err => console.log('Error connecting to Redis')).connect()
const result = await client.get('user:3')
const results = await client.mGet('user:1', 'user:2', 'user:3')
console.log('results->', results)
console.log('result->', result)