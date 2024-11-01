console.log('clint side javascript loaded')
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

fetch('http://puzzle.mead.io/puzzle')
.then((res)=>{
    res.json().then((data)=>{
        console.log(data)
    })
})