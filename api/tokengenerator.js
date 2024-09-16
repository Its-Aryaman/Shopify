import jwt from 'jsonwebtoken'


const generatedToken = (id) => {
    return jwt.sign({ id },
         process.env.JWT_Secret,
         { expiresIn: '1h' });
}

export default generatedToken