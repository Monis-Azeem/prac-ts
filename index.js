import crypto from 'crypto'

// const hash = crypto.createHash('sha256').update('596138').digest('hex')

// console.log(hash)

function checkHash(prefix){
    let input = 1
    while(true){
        const hash = crypto.createHash('sha256').update(prefix + input.toString()).digest('hex')
        if(hash.startsWith('00000'))
            return {number: input}
            input++
    }
}

const nonce = checkHash('100xDevs')
console.log('nonce', nonce)