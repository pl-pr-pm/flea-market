require('dotenv').config();

// jestのnode-configを利用できるはずだが・・・、なぜか読み取れないため、dotenvを利用するようにする
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_EXPIRE = parseInt(process.env.JWT_EXPIRE);

export { JWT_SECRET_KEY, JWT_EXPIRE };
