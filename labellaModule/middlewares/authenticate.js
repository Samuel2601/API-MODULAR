'use strict';

import jwt from 'jwt-simple';
import moment from 'moment'; // Importa moment desde un CDN o encuentra una alternativa compatible con ES
const secret = 'Municipio2024';

export function auth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'NoHeadersError' });
    }
    if (req.headers.authorization != 'ciudadano') {
        const token = req.headers.authorization.replace(/['"]+/g, '');

        const segment = token.split('.');
        if (segment.length != 3) {
            return res.status(403).send({ message: 'InvalidToken' });
        } else {
            try {
                const payload = jwt.decode(token, secret);

                if (payload.exp <= moment().unix()) {
                    return res.status(403).send({ message: 'TokenExpirado' });
                }

            } catch (error) {
                //console.log(error);
                return res.status(403).send({ message: 'InvalidToken' });
            }
        }
        // console.log(payload);
        req.user = payload;
    } else {
        req.user = 'ciudadano';
    }

    next();
}
