const express = require('express')
const path = require('path')
const hbs= require('hbs')
const query = require('querystring')
// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

const app = express()
const publicDicPath = path.join(__dirname,'../public')
const viewpath =path.join(__dirname,'../templates/views')
const partials=path.join(__dirname,'../templates/partials')
//const tempPath = path.join(__dirname,'../templates')
//app.set('views', __dirname + '/views');
app.set('view engine','hbs')
app.set('templates',)

hbs.registerPartials(partials)

app.use(express.static(publicDicPath))
app.use(express.static(viewpath))//sub main path



app.set('views',viewpath);//main path
app.get('',(req,res)=>{
    res.render('index',{
        name:'Arun'
    })
})

// app.get('',(req,res)=>{
//     res.send('<h1>Hello express</h1>')
// })

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'this is the hepfiull text',
        title:'help emergency',
        name:'Arun'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:'Arun'

    })
})


app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({
            error:'you must to provide address'
        })
    }

    res.send({
        forecast:'It is snowing',
        location:'Karnataka',
        address:req.query.address
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Arun',
        errorMessage:'Hpl Partical not found'
    })
})

app.get('/products',(req,res)=>{
   if(!req.query.search){
     return  res.send({
        error:'You must provide a search term'
       })
   }
    res.send({
        products:[]
    })
})


app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Arun',
        errorMessage:'Page not found'
    })
})


app.listen(8000,()=>{
    console.log('server running in port 8000')
})

