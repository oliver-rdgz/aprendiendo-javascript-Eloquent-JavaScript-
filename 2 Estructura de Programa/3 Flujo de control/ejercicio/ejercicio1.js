

/*
Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

# 
## 
### 
#### 
##### 
###### 
#######
*/
let gatito = '#';

for(let index = 0; index < 7; ++index){
    console.log(gatito);
    gatito += '#' ;
}
