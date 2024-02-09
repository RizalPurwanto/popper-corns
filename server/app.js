

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express  = require ('express')

const cors  = require ('cors')


const app = express()
const port = process.env.PORT || 3000;
const route = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors()); //memfilter akses. jika dalam kurung kosong, semua bisa masuk
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", route);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`This one is listening to port ${port}!`);
});