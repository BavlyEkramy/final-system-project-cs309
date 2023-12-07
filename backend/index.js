import  express, { request, response }  from  "express" ;

import laptopsRouter from "../project/routes/laptops"


const app = express();


app.use(express.json());

const PORT= 1000;
 app.get('/', (request, response) => {
     response.send('Hello World!');
 });


 app.use("/laptops",laptopsRouter);
app.listen(PORT ,() => console.log(`the server is running on port ${PORT}`));
cd 