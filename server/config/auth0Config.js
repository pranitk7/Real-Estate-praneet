import {auth} from 'express-oauth2-jwt-bearer'

const jwtcheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-k2okkt0fl8ep1k7q.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtcheck