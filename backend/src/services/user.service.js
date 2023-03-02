import db from '../queries.js';

export default class UserService {
    async register(user) {
        const {mail, password} = user;
        if(this.correctPassword(password)) {
            try {
                return db.query(
                    'INSERT INTO "user" (mail, password) VALUES ($1, $2)',
                    [mail, password]
                );
            } catch (e) {
                console.error(e);
            }
        } else {
            return null;
        }
    }
    
    correctPassword(password) {
        if(typeof password !== 'string') return false;
        let [smallLetter, bigLetter, number, specialChar] = [false, false, false, false];
        if (password.length > 8 && password.length < 16) {
            for (var i = 0; i < password.length; i++) {
                if(97 <= password.charCodeAt(i) <= 122) smallLetter = true;
                if(65 <= password.charCodeAt(i) <= 90) bigLetter = true;
                if(48 <= password.charCodeAt(i) <= 57) number = true;
                if(35 <= password.charCodeAt(i) <= 38) specialChar = true;
                //#,$,%,&
            }
            return smallLetter && bigLetter && number && specialChar;
        } else {
         return false;
        }
    }
}
