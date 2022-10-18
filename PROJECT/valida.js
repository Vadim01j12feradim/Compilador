//http://localhost/Traductor/Index.php
function FatalError(){ 
    error.apply(this, arguments); this.name = "FatalError"; } 
FatalError.prototype = Object.create(Error.prototype);

String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}
//#region lista y nodos
class Node {
    constructor(value,medium, next) {
      this.medium =medium
      this.value = value;
      this.next = next;  
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    
    insertNode(value,medium) {
      const newNode = new Node(value,medium, null);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    print(){
      let current = this.head;
      //#region capture dataset
        let NODES = []
        let EDGES = [
            // { from: 1, to: 3 },
            // { from: 1, to: 2 },
            // { from: 2, to: 4 },
            // { from: 2, to: 5 },
            // { from: 3, to: 3 }
          ]
        let i = 0;
        //let fahterOld=0;
          while (current) {
            console.log(current.value+","+current.medium+"->");
            if (current.medium=="") {
                if (NODES.length==0) {
                    NODES.push({ id: i, label: "E" })
                    NODES.push({ id: i+1, label: current.value})
                    EDGES.push({ from: i, to: i+1 })
                }else{
                NODES.push({ id: i, label: current.value})
                EDGES.push({ from: i, to: i-1 })
                }i+=2
            }else if(NODES.length==0){
            NODES.push({ id: i, label: "E" })
            NODES.push({ id: i+1, label: current.value})
            EDGES.push({ from: i, to: i+1 })
            NODES.push({ id: i+2, label: current.medium})
            EDGES.push({ from: i+2, to: i })
            NODES.push({ id: i+3, label: "E" })
            EDGES.push({ from: i+3, to: i })
            i+=4
            }else if (NODES.length>0 && current.medium!="") {
                NODES.push({ id: i, label: current.value})
                EDGES.push({ from: i, to: i-1 })
                NODES.push({ id: i+1, label: current.medium})
                EDGES.push({ from: i+1, to: i-1 })
                NODES.push({ id: i+2, label: "E" })
                EDGES.push({ from: i+2, to: i-1 })
                i+=3
            }
            current = current.next;
          }
      //#endregion
            // create an array with nodes
            var nodes = new vis.DataSet(
                NODES
            //     [
            //     { id: 1, label: "Node 1" },
            //     { id: 2, label: "Node 2" },
            //     { id: 3, label: "Node 3" },
            //     { id: 4, label: "Node 4" },
            //     { id: 5, label: "Node 5" },
            //   ]
              );
        
              // create an array with edges
              
              var edges = new vis.DataSet(EDGES);
        
              // create a network
              var container = document.getElementById("mynetwork");
              var data = {
                nodes: nodes,
                edges: edges,
              };
              var options = {};
              var network = new vis.Network(container, data, options);

    }
  
    deleteNode(value) {
      if (this.head.value === value) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        while (current.next) {
          if (current.next.value === value) {
            current.next = current.next.next;
            return;
          }
          current = current.next;
        }
      }
    }
  
    findNode(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  }
  
//   const linkedList = new LinkedList();
//   linkedList.insertNode(12);
//   linkedList.insertNode(99);
//   linkedList.insertNode(37);
//   linkedList.print();
//   console.log(linkedList.findNode(37));
  //#endregion
const num =  /\d/i;
const numf =  /\d\.\d/i;
const operation =  /\*|\//i;
const simbol = /\+|\-/i
const leng = /^$/i;
const openparent =  /[(]/i;
const closeparent =  /[)]/i;
const letra =  /[a-z]|[A-Z]/i;
var table='';
var table3='';
var tableLexico = '';
var tableLR = '';
var tableSintactico = ''
var tableSintacticoR = ''
var matrixLR = []
function generateLR(){

    matrixLR.push(['d2','','','1']);//0
    matrixLR.push(['','','r0(acept)','']);//1
    matrixLR.push(['','d3','r2','']);//2
    matrixLR.push(['d2','','','4']);//3
    matrixLR.push(['','','r1','']);//4

    //console.log(matrixLR)
    tableLR = '<table id="lr">'+
    '<tr class="rowlr"><th class="void"></th><th class="rowlr">0</th><th class="rowlr">1</th>'+
    '<th class="rowlr">2</th><th class="rowlr">3</th></tr>'+//end

    '<tr class="rowlrid"><th class="rowlr"></th><th class="rowlrid">id</th><th class="rowlrid">+</th>'+
    '<th class="rowlrid">$</th><th class="rowlrid">E</th></tr>'+
    // Comieence de table
    '<tr class="rowlr"><th class="rowlr">0</th><th class="rowlr">d2</th><th class="rowlr"></th>'+
    '<th class="rowlr"></th><th class="rowlr">1</th></tr>'+

    '<tr class="rowlr"><th class="rowlr">1</th><th class="rowlr"></th><th class="rowlr"></th>'+
    '<th class="rowlr">r0(acept)</th><th class="rowlr"></th></tr>'+//end

    '<tr class="rowlr"><th class="rowlr">2</th><th class="rowlr"></th><th class="rowlr">d3</th>'+
    '<th class="rowlr">r2</th><th class="rowlr"></th></tr>'+

    '<tr class="rowlr"><th class="rowlr">3</th><th class="rowlr">d2</th><th class="rowlr"></th>'+
    '<th class="rowlr"></th><th class="rowlr">4</th></tr>'+//end

    '<tr class="rowlr"><th class="rowlr">4</th><th class="rowlr"></th><th class="rowlr"></th>'+
    '<th class="rowlr">r1</th><th class="rowlr"></th></tr>'//end

    tableLexico += '</table>'
}
generateLR();
document.getElementById('lr').innerHTML=tableLR

////////////////////////THIS Y GENERATE GRAMATIC ANALSISI
class Gramatic{
    constructor(arrayLexico){
        this.arrayLexico = arrayLexico
        this.matrixLR = matrixLR
    }
    correctIndexSum(){
        let index = 0;
        while (index < this.arrayLexico.length) {
            //console.log("Index " + this.arrayLexico[index][1])
            if (this.arrayLexico[index][1]==5) {
                //console.log("5 x 1")
                this.arrayLexico[index][1] = 1;
                //console.log(this.arrayLexico[index][1])
            }
            index++
        }
        
        //console.log(this.arrayLexico)
    }
    getAsigments(){
        let rtArray = []
        let i = 0;
        let arrayTemp = []
        let state = false;
        //alert(this.arrayLexico.length)
        while (i < this.arrayLexico.length) {
            if(state){
                if (this.arrayLexico[i][1]==0 ||this.arrayLexico[i][0]==";"|| this.arrayLexico[i][2]=="+") {
                    //console.log("Parte: " + this.arrayLexico[i][1])
                    arrayTemp.push(this.arrayLexico[i])
                }else{
                    
                    try {
                        alert("Error en analisis sintactico")
                        error =  "Error en elanalisis";
                    throw error;
                    } catch (error) {
                        let a  = new Analisis("");
                    a.ExecError()
                    return []
                    }
                    
                    
                }
                
            }
            if (this.arrayLexico[i][0]=="=") {
                state = true;
            }
            if (this.arrayLexico[i][0]==";" && state) {
                arrayTemp.pop()

                rtArray.push(arrayTemp);
                //console.log(arrayTemp.length)
                arrayTemp = []
                state = false;
            }
            i++;
        }
        //console.log(rtArray[0][1])
        return rtArray;
    }
    // generataCasesSum(matrix){
    //     let i=0;
    //     tableSintactico = ''
    //     alert(matrix.length)
    //     while (i< matrix.length) {
    //         tableSintactico+='<table id="lr">'+
    //         '<tr class="sintact"><th class="sintact">Pila</th><th class="sintact">Entrada</th>'+
    //         '<th class="sintact">Salida'+'</th></tr>'
    //         //Execute code here
    //         let matrixIndex = matrix[i]
    //         let i1 = 0;
    //         while (i1 < matrixIndex.length) {

    //             //pila1, entrada3 salida 1
    //             tableSintactico +='<tr class="rowlr"><th class="rowlr">'+matrixIndex[i1][0][0]+
    //             '</th><th class="rowlr">'+matrixIndex[i1][1] + '</th><th class="rowlr">'+
    //             matrixIndex[i1][2]+'</th><</tr>'
    //             i1++
    //         }

    //         //end execution

    //         tableSintactico += '</table>'
    //         i++;
    //     }
    // }
    getInputString(array){
        let alam = ''
        let i = 0
        while (i<array.length) {
            alam += array[i][1]
            i++
        }
        return alam
    }
    getInputStringR(array){
        let alam = ''
        let i = 0
        while (i<array.length) {
            alam += array[i][2]
            i++
        }
        return alam
    }
    dropCom(arr){
        let str = ''
        let i=0
        while (i < arr.length) {
            str += arr[i]
            i++
        }
        return str;
    }
    executeSum(){
        //console.log("Execute suma")
        let pila = []
        let PR = []
        let entrada =[]
        let ER =[]
        let salida = []
        this.correctIndexSum();
        
        let asignements = this.getAsigments();
        let AR= this.getAsigments();
        //console.log(asignements)
        let i = 0;
        let matrixFinally = []
        //console.log(asignements.length)
        //TODO OK
        let matrixStatus = []
        tableSintactico = ''
        tableSintacticoR = ''
        let list = new LinkedList()
        //list.insertNode()
        while (i<asignements.length) {
            tableSintactico+='<table id="lr">'+
            '<tr class="sintact"><th class="sintact">Pila</th><th class="sintact">Entrada</th>'+
            '<th class="sintact">Salida'+'</th></tr>'
            //let j=0
            tableSintacticoR+='<table id="outrf">'+
            '<tr class="LRTytle"><th class="LRTytle">Pila</th><th class="LRTytle">Entrada</th>'+
            '<th class="LRTytle">Salida'+'</th></tr>'
            entrada = asignements[i]
            

            //entradaR.push(["$","$","$"])
            
            entrada.push(["2",2,"2"])
            ER = AR[i]
            ER.push(["$","$","$"])
            //console.log("e: " +entrada)
            //console.log(entrada[0])
            //cada asignation
            //let expresion = []
            pila = []
            pila.push(2)
            pila.push(0)
            PR = []
            PR.push("$")
            PR.push("0")
            //console.log(entrada.length)
            matrixStatus = []
            let tempN = []
            while (true) {
                let y = pila[pila.length-1]
                //let yR = pila[pila.length-1]
                let x = entrada[0][1]
                let xR = entrada[0][2]
                tempN.push(xR)
                
                if (x==0) {
                    console.log(tempN.length+"-"+tempN)
                    if (tempN.length==3) {
                        console.log("inserto 2")
                        list.insertNode(tempN[0],tempN[1])
                        let t3 = tempN[2]
                        tempN =[]
                        tempN.push(t3)
                    }
                    if (tempN.length==1 && entrada.length==2) {
                        console.log("inserto 1")
                        list.insertNode(tempN[0],"")
                        tempN =[]
                    }
                }
                let coordenada = matrixLR[y][x]
                // console.log("Pila: "+pila)
                // console.log("Entrada: "+entrada)
                // console.log("Salida: "+coordenada)
                // console.log(y,x,coordenada)
                //matrixStatus.push([[pila],[entrada],[coordenada]])
                //console.log("Iteracion: "+matrixStatus[matrixStatus.length-1][0])
                let real = coordenada;
                if (coordenada == "r1")
                    real = "r1 = E -> id + E"
                else if (coordenada == "r2")
                    real = "r2 = E -> id"
                tableSintactico +='<tr class="rowlr"><th class="rowlr">'+this.dropCom(pila)+
                            '</th><th class="rowlr">'+ this.getInputString(entrada) + '</th><th class="rowlr">'+
                            real+'</th></tr>'
                tableSintacticoR +='<tr class="rowlr"><th class="rowlr">'+this.dropCom(PR)+
                            '</th><th class="rowlr">'+ this.getInputStringR(ER) + '</th><th class="rowlr">'+
                            real+'</th></tr>'

                if (coordenada.length > 3) {
                    //console.log("correcto")
                    salida.push(coordenada)
                    matrixStatus.push([pila,entrada,coordenada])
                    break;
                }else if (coordenada.length ==2) {

                    if (coordenada.charAt(0) == "d") {
                        PR.push(xR)
                        PR.push(coordenada)
                        pila.push(x)
                        pila.push(coordenada.charAt(1))
                        
                    }else{
                        if (coordenada == "r2") {
                                PR.pop()
                                PR.pop()

                                pila.pop()
                                pila.pop()
                                let cp = pila[pila.length-1]
                                let cord = matrixLR[cp][3];
                                if (cord.leng == 0) {
                                    alert("error")
                                }
                                PR.push("E")
                                PR.push(cord)
                                pila.push(3)
                                pila.push(cord)
                                continue
                                
                            
                        }else if (coordenada == "r1") {
                                pila.pop()
                                pila.pop()
                                pila.pop()
                                pila.pop()
                                pila.pop()
                                pila.pop()
                                
                                PR.pop()
                                PR.pop()
                                PR.pop()
                                PR.pop()
                                PR.pop()
                                PR.pop()
                                let cp = pila[pila.length-1]
                                let cord = matrixLR[cp][3];
                                if (cord.leng == 0) {
                                    alert("error")
                                }
                                PR.push("E")
                                PR.push(cord)
                                pila.push(3)
                                pila.push(cord)
                                continue
                            }
                            
                        }
                    }
                //j++;
                entrada.shift()
                ER.shift()
                
            }
            // expresion.push(pila)
            // expresion.push(entrada)
            // expresion.push(salida)
            matrixFinally.push(matrixStatus)
            i++
        }
        console.log("Salida: ")
        list.print()
        }
        
       // this.generataCasesSum(matrixFinally); 
        //console.log(matrixFinally[0][0].length)

        

    }
//////////
var error ="error";
class Analisis{
    constructor(inpu){
        this.pointCReplace = false;
        this.input=inpu;
        this.preanalisis;
        this.actual=0;
        this.matrix = [];
        this.matrixTree = [];   
        this.restricted = ["if","while", "return", "else","int","float","void","string"];
        table='';
        //this.isElse=false;
        this.ticket=1;
        this.lexico = [];
        this.labelCount=1;
        this.matrixOrder=[];
    }
    executeLexico(){
        // this.lexico.push(["tipo",4,"int"])
        //console.log("lexico execution")
        
        tableLexico = '<table class="default">'+
        '<tr class="row"><th>Simbolo</th><th>Tipo</th><th>Valor</th></tr>'
        let nr=this.lexico.length/3;
        //alert(nr)
        let temp = nr
        for (let i = 0; i < this.lexico.length; i++) {
                tableLexico += '<tr><td>' + this.lexico[i][0]
                +'</td><td>'+this.lexico[i][1]+'</td>'
                +'<td>'+ this.lexico[i][2]+'</td>'
                +'</tr>';
                nr--
                if (nr<=0) {
                    nr=temp;
                    tableLexico += '<table class="default">'+
        '<tr class="row"><th>Simbolo</th><th>Tipo</th><th>Valor</th></tr>'
                }
        }
        tableLexico += '</table>'
    }
    print(){
        //alert(this.matrix)
        for (let i = 0; i < this.matrix.length; i++) {
            if (this.matrix[i][0].length==3 || this.matrix[i][0].length==5){
                table += '<div class="row">' +i
                +'<div class="div">'+this.matrix[i][0]+'</div>'
                +'<div class="void">'+ this.matrix[i][1]+'</div>'
                +'</div>';
            }
            else
                if (operation.test(this.matrix[i][0])||simbol.test(this.matrix[i][0])){
                    //alert("table")
                    table += '<div class="row">'+i
                    +'<div class="div">'+this.matrix[i][0]+'</div>'
                    +'<div class="div">'+this.matrix[i][1]+'</div>'
                    +'<div class="div">'+ this.matrix[i][2]+'</div>'
                    +'</div>';
                }
        }
    }
    ExecuteTreeCode(){
        // console.log(this.matrixTree)
        for (let i = 0; i < this.matrixTree.length; i++) {
            //alert(this.matrixTree[i])
            //console.log()
            let t = this.isTicket(this.matrixTree[i])
            //alert(this.matrixTree[i]+" "+t)
            if (t) {
                table3 += '<div class="row">' +this.matrixTree[i]+'</div>';
            }
            else
            if (this.matrixTree[i].length==4){
            //if(this.matrixTree[i][0]!="L"){
                table3 += '<div class="row">' +this.matrixTree[i][0]+" = "+
                this.matrixTree[i][1]+this.matrixTree[i][2]+this.matrixTree[i][3]
                +';</div>';
            }
            else
            table3 += '<div class="row">' +this.matrixTree[i]+'</div>';
        }
    }
    isTicket(param){
        if(Array.isArray(param))
            return false;
        if(param.charAt(0)!="L")
            return false;
        for (let i = 1; i < param.length-1; i++) {
            if(!num.test(param.charAt(i)))
                return false;
        }
        if (param.charAt(param.length-1)!=":") {
            return false;
        }
        //alert(param+" is true")
        return true;
    }

    exist(param){
        for (let i = 0; i < this.matrix.length; i++) {
            if ((""+this.matrix[i])==(""+param)) {
                return true;
            }
        }
        return false;
    }

    index(param){
        for (let i = 0; i < this.matrix.length; i++) {
            if ((""+this.matrix[i])==(""+param)) {
                return i;
            }
        }
    }

    restrict(param){
        for (let i = 0; i < this.restricted.length; i++) {
            if ((""+this.restricted[i])==(""+param)) {
                return true;
            }
        }
        return false;
    }
    //Second part
    exopparent(){
        try {
            this.preanalisis = this.input.charAt(this.actual);
            if (openparent.test(this.preanalisis)) {
                    this.lexico.push(["(",14,"("])
                    //console.log("(")
                    this.actual++;
                    return "";
            }
            else{
                error =  "Abre un parentesis :)";
                throw error;
            }
            
        } catch (e) {
            //alert("error en exopparent()")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }
    exclosarent(){
        try {
            this.preanalisis = this.input.charAt(this.actual);
            if (closeparent.test(this.preanalisis)) {
                    this.lexico.push([")",15,")"])
                    //console.log(")");
                    this.actual++;
                    return "";
            }
            else{
                error = "Cierra un parentesis ;)";
                throw error;
            }
            
        } catch (e) {
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }
    coincidir(parameter) {
        try{
        if (num.test(parameter)||simbol.test(parameter)||operation.test(parameter)||
            openparent.test(parameter)||parameter==";"||closeparent.test(parameter)||leng.test(parameter)) {
            return true;
        }
        error = this.input+"  no es una expresion valida, el caracter "+parameter+" es desconocido";
        throw error;
        }   
        catch (e) {
            //alert("error en coincidr")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }

    puntoComa(){
        try{
            this.preanalisis = this.input.charAt(this.actual);
            if (this.preanalisis == ";") {
                    if(!this.pointCReplace){
                        this.lexico.push([";",12,";"])
                        //console.log(";")
                    }else{
                        this.pointCReplace = false;
                        this.preanalisis = "}"
                    }
                        
                    
                    this.actual++;
                    return this.preanalisis;
            }
            error = this.input+"  no es una expresion valida, el caracter "+parameter+" es desconocido";
            throw error;
        }   
        catch (e) {
            //alert("error en puntoComa "+this.input.charAt(this.actual))
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }
    tipo(){
        try{
            let temp = this.input.substring(this.actual,this.actual+3);
            let tems  = this.input.substring(this.actual,this.actual+5);
            let tempString = this.input.substring(this.actual,this.actual+6);
            if (tempString=="string") {
                this.lexico.push(["tipo",24,"string"])
                this.actual += 6;
                return tempString
            } else
            if (temp=="int") {
                this.lexico.push(["tipo",4,"int"])
                //console.log("int")
                this.actual+=3;

                return temp;
            }
            else if (tems=="float") {
                this.lexico.push(["tipo",4,"float"])
                //console.log("float")
                this.actual+=5;
                return tems;
            }
            error = "Se produjo un error en el tipo de dato, verifique su declaracion";
            throw error;
        }   
        catch (e) {
            //alert("error en tipo")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }
    end(){
        try{
            
            let temp  = this.input.substring(this.actual,this.actual+1);
            if (temp=="}") {
                //console.log("} simple")
                // this.input.replaceAt(this.actual) = ";";
                // alert(this.input[this.actual])
                //this.actual++;
                return temp;
            }
            error = "Se esperava terminar con }";
            throw error
        }   
        catch (e) {
            //alert("error en end")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }
    punto(){
        try{
            this.preanalisis = this.input.charAt(this.actual);
            if (this.preanalisis==".") {
                this.actual++;
                return this.preanalisis;
            }
            error = "Se esperava un .";
            throw error;
        }   
        catch (e) {
            //alert("error en punto")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }
    endWhile(){
        try{
            let temp  = this.input.substring(this.actual,this.actual+1);
            if (temp=="}") {
                //this.actual+=1;
                this.lexico.push(["}",17,"}"])
                //console.log("}")
                return temp;
            }

            error = "Cierra el parentesis del bucle while";
            throw error;
        }   
        catch (e) {
            //alert("error en endWhile")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }
    exp_arit(tipo){
        this.preanalisis = this.input.charAt(this.actual);
        if (simbol.test(this.preanalisis)) {
            this.lexico.push(["opSuma",5,this.preanalisis])
            //console.log(this.preanalisis)
            this.actual++;
            let temp = this.preanalisis;
            let eas=this.expresion_arit(tipo);
            //alert("expresion_arit: "+eas)
            let eam=this.exp_arit(tipo);
            //console.log("exp_arit simbol: "+temp+eam + eas);
            return temp+eam + eas;
        }
        else if(operation.test(this.preanalisis)){
            this.actual++;
            this.lexico.push(["opMul",6,this.preanalisis])
            //console.log(this.preanalisis)
            let temp = this.preanalisis;
            let eas=this.expresion_arit(tipo);
            //console.log("tengo mi esxpresio arit: "+eas)
            let eam=this.exp_arit(tipo);
            //console.log("exp_arit operation: eam: "+eam +" temp: "+temp+"eas: "+ eas)
            return eam +temp+ eas ;
        }
        else
            return "";
    }
    expresion_arit(tipo){
        try{
            this.preanalisis = this.input.charAt(this.actual);
            //alert("expresion aritmetica")
            //console.log("que es: "+this.preanalisis)
            if (tipo == "string") {
                let token = "error"
                if (this.preanalisis == "'") {
                    token = "'"
                }else if (this.preanalisis == "\"") {
                    token = "\""
                }
                if (token == "error") {
                    error =  this.preanalisis + " no es un ' ni \" asigne un string de esta manera";
                    throw error; 
                }
                this.actual++
                let returnCad = ""
                while(this.input.charAt(this.actual)!=token){
                    returnCad += this.input.charAt(this.actual)
                    this.actual++
                    if (this.actual == (this.input.length-1)) {
                        error =  "cierra la cadena con " + token;
                        throw error;
                    }
                }
                this.lexico.push(["string",25,returnCad])
                this.actual++
                return returnCad
            }
            let tem;
            if (this.preanalisis=="("){
                //console.log("es un parentesis "+this.preanalisis)
                let op = this.exopparent();
                let ea = this.expresion_arit(tipo);
                return op+ea+this.exclosarent()+this.exp_arit(tipo);
            }
            else if (num.test(this.preanalisis)){
                //console.log("es un numero "+this.preanalisis)
                let n = this.numeros(tipo);
                //alert("estos en numero: ")
                let e = this.exp_arit(tipo);
                if(!numf.test(n) && tipo == "float")
                        tipo = "int"
                if(!this.exist([tipo,n])){
                    
                    this.matrix.push([tipo,n])
                }
                    
                n = n+e;
                e = this.getVal(n);

                var e1 = this.getVal(n.substring(e.length+1,n.length));
                var e2 = n.substring(e.length,e.length+1);
                if (e.length>0 && e2.length>0 && e1.length>0){
                     let var1 = this.getVal(n);
                     let var2 = this.getVal(n.substring(var1.length+1,n.length));
                     this.matrixTree.push(["t"+(this.labelCount),
                     var1,n.substring(var1.length,var1.length+1),var2]);
                     //this.matrix.push([tipo,"t"+(this.labelCount)]);
                     this.labelCount++;
                     return "t"+(this.labelCount-1);
                 }
                return n;
            }else
                tem = this.getIsString();
                // console.log(tipo + " "+tem+" " +this.matrix)

                if (this.exist([tipo,tem])){
                    //console.log("es un un id "+this.preanalisis)
                    let id  =  this.identificador();
                    this.lexico.push(["identificador",0,id])
                    //console.log(id)
                    let ea=this.exp_arit(tipo);
                    //alert("sali de mi expresion"+ea)
                    let temp = id+ea;
                    id = this.getIdSimbol(id);
                    ea = id+ea;
                    var e0 = this.getVal(ea);
                    var e1 = this.getVal(ea.substring(e0.length+1,ea.length));
                    var e2 = ea.substring(e0.length,e0.length+1);
                    //alert(e0+e2+e1+" my temp"+temp)
                    if (e0.length>0 && e1.length>0 && e2.length>0){
                         let var1 = this.getVal(temp);
                         let var2 = this.getVal(temp.substring(var1.length+1,temp.length));
                         this.matrixTree.push(["t"+(this.labelCount),
                         var1,temp.substring(var1.length,var1.length+1),var2]);
                         //this.matrix.push([tipo,"t"+(this.labelCount)]);
                         this.labelCount++;
                         return "t"+(this.labelCount-1);
                     }
                    return temp;
                }
                if (this.exist(["float",tem])) {
                    error =  tem + " es un tipo de dato float no compatible con int";
                    throw error; 
                }


                if (tem.length==0) {
                    tem = this.input.charAt(this.actual)
                }
                error =  "Expresion aritmetica no valida: "+tem+" no se reconoce como una variable de tipo "+tipo;
                throw error;
        }   
        catch (e) {
            //alert("error en expresion_arit")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }
    getVal(input){
        let temp = 0;
        let ret="";
        for (let i = temp; i < input.length; i++) {
             if(num.test(input.charAt(i))||letra.test(input.charAt(i))||input.charAt(i)==".")
                ret+=input.charAt(i);
            else return ret;
        }
        return ret;
    }


    getIdSimbol(param){
        let id=0;
        for (id = 0; id < this.matrix.length; id++) {
            if (this.matrix[id][1]==param) {
                return id;
            }
        }
        return param;
    }

    asignar(tipo){
        try{
            let ida = this.identificador();
            this.lexico.push(["identificador",0,ida])
            //console.log(ida)
            //alert("Asignar: "+ida)
            if (!this.exist([tipo,ida])) {
               error = "La variable "+ida+" de tipo " + tipo + " no existe";
                throw error;
            }
            this.preanalisis  = this.input.substring(this.actual,this.actual+1);
            if (this.preanalisis=="=") {
                //console.log("=")
                this.lexico.push(["=",18,"="])
                this.actual++;
                let temp = this.preanalisis;
                let ea = this.expresion_arit(tipo);
                //alert("sali: "+ida)
                //console.log("Asignar: "+ida+" "+temp+" "+ea);
                //alert(ea)

                let t1 = this.getVal(ea);
                let s = ea.substring(t1.length,t1.length+1)
                //alert("ea: "+ea+" s: "+s)
                let t2 = this.getVal(ea.substring(t1.length+1,ea.length));
                //alert("t1: "+t1+" S: "+s+" t2: "+t2);
                this.matrixTree.push([ida,t1,
                     s,t2]);
                //this.matrix.push([tipo,"t"+(this.labelCount)]);
                //this.labelCount++;
                // console.log("Dimention: "+this.matrixTree.length);
                //alert(ida+temp+ea)
                return ida+temp+ea;
            }
            error = "Se produjo un error al asignar";
            throw error;
        }   
        catch (e) {
            //alert("error en asignar")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }

    }

    bucle_while(){
        try{
            this.preanalisis  = this.input.substring(this.actual,this.actual+5);
            if (this.preanalisis=="while") {
                //console.log("while")
                this.lexico.push(["while",20,"while"])
                this.actual+=5;
                let pt = this.preanalisis;
                let op = this.exopparent();
                let co = this.contitionsAll()
                //let co = this.comparacion();
                
                //onsole.log("While is ok")
                let ex = this.exclosarent();
                
                //console.log("While is ok")
                this.matrixTree.push("L"+this.ticket+":");
                let temp = this.ticket;
                this.ticket++;
                this.matrixTree.push("if("+co+") goto L"+this.ticket+";");
                this.ticket++;
                let temp2 = this.ticket;
                this.matrixTree.push("goto L"+this.ticket+";");
                this.matrixTree.push("L"+(this.ticket-1)+":");
                
                let keyOpen = this.input.charAt(this.actual);
                if(keyOpen !="{"){
                    error = "Habra una llave para: while("+op+co+ex+")";
                    throw error;
                }
                this.lexico.push(["{",16,"{"])
                //console.log("{")
                this.actual++;
                let or = this.ordenes();
                
                let en = this.endWhile();
                // console.log("pt: "+pt+" op: "+op+" co: "+co+" ex: "+
                //             ex+" or: "+or+" en: "+en)
                this.matrixTree.push("goto L"+temp+";")
                this.matrixTree.push("L"+temp2+":")

                return pt+op+co+ex+or
                    +en;
            }
            error = "Se esperava un while";
            throw error;
                    }   
            catch (e) {
                //alert("error en bucle_while")
                this.ExecError();
                throw new FatalError("Something went badly wrong!");
                }
        
    }
    numero_real(){
        let ent = this.numero_entero();
        let p = this.punto()+this.numero_entero();
        return ent+p;
    }
    numero_entero(){
        try{
            this.preanalisis = this.input.charAt(this.actual);
            if (num.test(this.preanalisis)) {
                let temp = this.input.charAt(this.actual+1);
                this.actual++;
                if (num.test(temp)) {
                        return this.preanalisis+this.numero_entero();
                    }
                else
                    return this.preanalisis;
                
            }
            error = "Error en numero entero";
            throw error;
        }   
        catch (e) {
            //alert("error en numero_entero")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }
    getNumber(){
        let i = this.actual;
        let temp="";
        //alert("obteniendo numero: "+this.input.charAt(this.actual))
        while(num.test(this.input.charAt(i))||this.input.charAt(i)=="."){
            temp+=this.input.charAt(i);
            i++;
        }
        return temp;
    }
    numeros(tipo){
        try{
            this.preanalisis = this.input.charAt(this.actual);
            let tem  = this.getNumber();
            //alert("numeros: "+tem)
            if (numf.test(tem) && tipo == "int") {
                error = "No se puede asignar un float a int, " + tem + " es un numero real";
                throw error;
            }
            if (numf.test(tem)) {
                let p = this.numero_real();
                this.lexico.push(["real",2,p])
                //console.log(p)
                return p;
            }else
                if (num.test(tem)) {
                    let p = this.numero_entero();
                    this.lexico.push(["entero",1,p])
                    //console.log(p)
                    return p;
                }
            error = "No es un numero entero o real";
            throw error;
            }   
            catch (e) {
                //alert("error en numeros")
                this.ExecError();
                throw new FatalError("Something went badly wrong!");
            }
    }

    operador(){
        try{
            this.preanalisis = this.input.charAt(this.actual);
            let temp = this.getIsString();
            if (this.exist(["int",temp]) || this.exist(["float",temp])) {
                temp = this.identificador();
                this.lexico.push(["identificador",0,temp])
                //console.log(temp)
                return temp;
            }
            else
                if (num.test(this.preanalisis)) { 
                    return this.numeros();
                }
                error = "Se esperava un identificador o un numero";
                throw error
            }   
            catch (e) {
                //alert("error en operador")
                this.ExecError();
                throw new FatalError("Something went badly wrong!");
                //this.isElse=false; went badly wrong!");
            }
        
    }

    comparacion(){
        let op = this.operador();
        let cp = this.condicion_op();
        let o = this.operador();
        return op+cp+o;
    }
    condicion_op(){
        try{
            let act = this.input.substring(this.actual,this.actual+2);
            if (act=="<="||act==">="||act=="!="||act=="==") {
                if (act=="<="||act==">=") {
                    this.lexico.push(["opRelac",7,act])
                    // console.log(act)
                }else{
                    this.lexico.push(["opIgualdad",11,act])
                    //console.log(act)
                }
                    
                
                this.actual+=2;
                return act;
            }
            act = this.input.charAt(this.actual);
                if (act=="<"||act==">") {
                    this.lexico.push(["opRelac",7,act])
                    //console.log(act)
                    this.actual++;
                    return act;
                }
                error = "Se esparaba un simbolo de condicion";
                throw error;
            }   
            catch (e) {
                //alert("error en condicion_op")
                this.ExecError();
                throw new FatalError("Something went badly wrong!");
            }
    }

    sig_condicion(){
        let temend  = this.input.substring(this.actual,this.actual+1);
        let temelse  = this.input.substring(this.actual,this.actual+6);
        
        try{
            if(temelse=="}else{"){
                    this.lexico.push(["}",17,"}"])
                    this.lexico.push(["else",22,"else"])
                    this.lexico.push(["{",16,"{"])
                    //console.log("}else{")
                    //alert("else ok")
                    //this.matrixTree.push("goto L"+(this.ticket+2)+";");
                    //this.matrixTree.push("L"+
                    //this.isElse=false;(this.ticket+1)+":");
                    //this.ticket++;
                    //this.isElse=true;
                    //alert(this.isElse)
                    this.actual+=6;
                    return temelse + this.ordenes()+this.end();
                
            }
            else
                if (temend=="}"){
                    this.lexico.push(["}",17,"}"])
                    

                    temend = this.end();
                    //console.log("}")
                    return temend;

                }
            error = "Error en la siguiente condicion";
            throw error;
        }   
        catch (e) {
            //alert("error en sig_condicion")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }
    // reOrder(param){
    //     let matrixTemp=[];
    //     for (let i = this.matrixTree.length-1; i >=0; i--) {
    //         matrixTemp.push(this.matrixTree[i]);
    //         this.matrixTree.pop();
    //     }
    //     this.matrixTree.push(param+this.ticket+";");
    //     this.ticket++;
    //     this.matrixTree.push("goto L"+this.ticket+";");
    //     this.matrixTree.push("L"+(this.ticket-1)+":");
    //     for (let i = matrixTemp.length-1; i >=0; i--) {
    //         this.matrixTree.push(matrixTemp[i]);
    //         matrixTemp.pop();
    //     }
    //     let t1=0;
    //     if (this.isElse){
    //         this.isElse=false;
    //         t1=1;
    //     }

    //     this.matrixTree.push("L"+(this.ticket+t1)+":");
    //     this.ticket++;

    // }
    contitionsAll(){
        let isOtherCondition = true;
        let cp="";
        while (isOtherCondition) {
            cp += this.comparacion();
            let idNext = this.input.substring(this.actual,this.actual+2);
            if (idNext == "&&" || idNext == "||"){
                if (idNext == "&&") {
                    this.lexico.push(["opAnd",9,idNext])
                    //console.log(idNext)
                }else{
                    this.lexico.push(["opOr",8,idNext])
                    //console.log(idNext)
                }
                isOtherCondition = true;
                cp+=idNext;
                this.actual += 2;
            }
            else
                isOtherCondition =false;
        }
        return cp;
    }
    condicion(){
        try{
            this.preanalisis = this.input.substring(this.actual,this.actual+2);
            if(this.preanalisis=="if"){
                this.lexico.push(["if",19,"if"])
                //console.log("if")
                this.actual+=2;
                let op = this.exopparent();
                let cp =this.contitionsAll()
                // let isOtherCondition = true;
                // let cp="";
                // while (isOtherCondition) {
                //     cp += this.comparacion();
                //     let idNext = this.input.substring(this.actual,this.actual+2);
                //     if (idNext == "&&" || idNext == "||"){
                //         isOtherCondition = true;
                //         cp+=idNext;
                //         this.actual += 2;
                //     }
                //     else
                //         isOtherCondition =false;
                // }
                // alert(cp)
                 

                let clp = this.exclosarent();
                this.matrixTree.push("if("+op+cp+clp+") goto L"+this.ticket+";");
                this.ticket++;
                this.matrixTree.push("goto L"+this.ticket+";");
                this.matrixTree.push("L"+(this.ticket-1)+":");
                let temp=this.ticket;
                this.ticket++;
                if (this.input.charAt(this.actual) == "{") {
                    this.lexico.push(["{",16,"{"])
                    //console.log("{")
                    this.actual ++;
                }else{
                    error = "Se esperaba un {";
                    throw error;
                }
                let ord = this.ordenes();
                //this.isElse=false;
                //alert(this.isElse)
                //this.ticket++;
                
                
                this.preanalisis = this.input.charAt(this.actual);
                //alert(this.input.substring(this.actual,(this.actual+4)))
                let endTicket=-1;
                if(this.input.substring(this.actual,(this.actual+4))=="}else"){
                    endTicket=(temp+1);
                    this.matrixTree.push("goto L"+(temp+1)+";");
                    this.matrixTree.push("L"+temp+":");
                }
                let sc = this.sig_condicion(); 
                if (endTicket!=-1) {
                    this.matrixTree.push("L"+endTicket+":");
                }
                else{
                    this.matrixTree.push("L"+temp+":");
                }
                //alert()
                //this.reOrder("if("+op+cp+clp+") goto L");
                //this.matrixTree.push("if("+op+cp+clp+") goto L"+this.matrixTree.length);
                //console.log("if("+op+cp+clp+") goto L"+this.matrixTree.length)//+ord+sc)
                // console.log(op+cp+clp+ord+sc)
                // console.log("if("+op+cp+clp+") goto L")
                return op+cp+clp+ord+sc;
            }
            error = "Se esperava una condicion";
            throw error;
        }   
        catch (e) {
            //alert("error en condicion")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }     
    }


    orden(){
        try{
            let tempif = this.input.substring(this.actual,this.actual+2);
            let tempwhile = this.input.substring(this.actual,this.actual+5);
            let tempint = this.input.substring(this.actual,this.actual+3);      
            let returnVal = this.input.substring(this.actual,this.actual+6);  

            let tempasignar;
            // alert(tempwhile)
            tempasignar = this.getIsString();
            //alert(tempasignar)
            if (this.exist(["string",tempasignar])) {
                let as = this.asignar("string");
                //alert("Orden asignacion: "+as);
                this.preanalisis = this.input.charAt(this.actual);
                return as;
            }
            if (this.exist(["float",tempasignar])) {
                let as = this.asignar("float");
                
                //alert("Orden asignacion: "+as);
                this.preanalisis = this.input.charAt(this.actual);
                return as;
            }else if(this.exist(["int",tempasignar])){
                
                let as = this.asignar("int");
                //alert("Orden asignacion: "+as);
                this.preanalisis = this.input.charAt(this.actual);
                return as;
            }
            if (tempif=="if") {
                let cond = this.condicion();
                this.input = this.input.replaceAt(this.actual, ';');
                this.pointCReplace = true;
                //console.log("sali del if: "+this.input.charAt(this.actual))
                return cond;
            }else
                if (tempwhile=="while") {
                    //console.log("In the bucle while")
                   //console.log("In the while")
                   let bW = this.bucle_while();
                   this.input = this.input.replaceAt(this.actual, ';');
                   this.pointCReplace = true;
                    //console.log("sali del while: "+this.input.charAt(this.actual))
                    return bW;
                }
                else if (tempint == "int" || tempwhile=="float" || returnVal == "string") {
                    // console.log("orden() declaration")
                    let dec = this.declaracion();
                    //alert("sali de la declaracion")
                    return dec
                }else if(returnVal == "return"){
                    this.actual += 6;
                    this.lexico.push(["return",21,"return"])
                    let isTipe = "float";
                    if(this.exist(["int",this.getIsString()]))
                        isTipe = "int";
                    //console.log("return")
                    let t1 = this.expresion_arit(isTipe);
                    //alert(t1)

                    return  t1;
                }
                
                else{
                    error = "El id "+tempasignar + " no esta declarado";
                    throw error;
                }
            
        }   
        catch (e) {
            //alert("error en orden")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
            }
    }
    getIsString(){
        let temp = this.actual;
        let ret="";
        for (let i = temp; i < this.input.length; i++) {
             if(num.test(this.input.charAt(i))||letra.test(this.input.charAt(i)))
                ret+=this.input.charAt(i);
            else return ret;
        }
        return ret;
    }
    sig_ordenes(){
        
        let tempif = this.input.substring(this.actual,this.actual+2);
        let tempwhile = this.input.substring(this.actual,this.actual+5);
        let tempasignar = this.getIsString();
        let tempReturn = this.input.substring(this.actual,this.actual+6);
        let isInt = this.input.substring(this.actual,this.actual+3);
        //alert("Siguientes ordenes")
        // alert("orden: "+tempif)
        if (tempReturn =="return" || tempif=="if"||tempwhile=="while"
            ||this.exist(["int",tempasignar])||this.exist(["float",tempasignar])
            ||tempwhile == "float"|| isInt == "int" || tempReturn == "string" || this.exist(["string",tempasignar])) {
            //console.log("Orden por: " + tempwhile)
            //console.log(this.matrix)
            
            let o = this.orden()
            
            let p = this.puntoComa()
            //alert("ok")
            let s = this.sig_ordenes();
            
            return o+p+s//this.orden()+this.puntoComa()+this.sig_ordenes();
        }
        else
            return "";
    }
    ordenes(){

        let or = this.orden();
        //alert(or)
        let pC = this.puntoComa();
        let SO = this.sig_ordenes();
        this.preanalisis = this.input.charAt(this.actual)
        //console.log("Error")

        return or+pC+SO;
    }
    resto_letras(){
        try{
            this.preanalisis = this.input.charAt(this.actual);
            if(letra.test(this.preanalisis)||num.test(this.preanalisis)){
                let temporal = this.input.charAt(this.actual+1);
                this.actual++;
                if(letra.test(temporal)||num.test(temporal)){
                    return this.preanalisis + this.resto_letras();
                }
                return this.preanalisis;
            }
            error = "Error en el identificador a continuacion de: "+this.preanalisis;
            throw error;
        }   
        catch (e) {
            //alert("error en resto_letras")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }
    identificador(){
        try{

            this.preanalisis = this.input.charAt(this.actual);
            //alert("identficador: "+this.input.substring(this.actual,this.input.length))
            if (letra.test(this.preanalisis)) {
                
                let temporal = this.input.charAt(this.actual+1);
                this.actual++;
                if(letra.test(temporal)||num.test(temporal)){
                    let temp = this.preanalisis;
                    let rl = this.resto_letras();
                    return temp + rl;
                }
                return this.preanalisis;
            }
            error = "El identificador deve comenzar con una letra y se encontro un "+this.preanalisis;
            throw error;
        }   
        catch (e) {
            //alert("error en identificador")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
        }
    }
    sig_lista_variables(tipo){
        this.preanalisis = this.input.charAt(this.actual);
        if (this.preanalisis==","){
            this.lexico.push([",",13,","])
            //console.log(",")
            this.actual++;
            return this.preanalisis + this.lista_variables(tipo);
        }    
        else if(!letra.test(this.preanalisis) && this.preanalisis !=";"){
            error = "El caracter "+this.preanalisis + " no es valido como parte de un identificador";
            throw error
        }

        else
            return "";
    }
    lista_variables(t){
        try{
            let ide = this.identificador();
            if (this.exist(["int",ide]) || this.exist(["float",ide]) || this.exist(["string",ide])) {
                error = "Redeclaracion del identificador "+ide;
                throw error;
            }else if(this.restrict(ide)){
                error = "Palabra reservada "+ide;
                throw error;
            }else{
                this.lexico.push(["identificador",0,ide])
                //console.log(ide)
                this.matrix.push([t,ide])
            }
            let slv = this.sig_lista_variables(t);
            return ide+slv;
    }   
    catch (e) {
        //alert("error en lista variables")
        this.ExecError();
        throw new FatalError("Something went badly wrong!");
    }
    }
    declaracion(){
        let t = this.tipo();
        let lv = this.lista_variables(t);
        return t+lv;
    }

    sig_declaraciones(){
        let temp = this.input.substring(this.actual,this.actual+3);
        let tems  = this.input.substring(this.actual,this.actual+5);
        if (temp=="int" || tems=="float") 
            return this.declaracion()+this.puntoComa()+this.sig_declaraciones();
        else
            return "";
    }
    declaraciones(){
        
        let de = this.declaracion();
        let pc = this.puntoComa();
        let sd = this.sig_declaraciones();
        return de+pc+sd;
    }
    programa(){
        try{
            //this.preanalisis = this.input.substring(this.actual,this.actual+10);
            //if (this.preanalisis=="intmain(){") {
                //alert(this.preanalisis)
                //this.actual+=10;
                //let g = this.preanalisis;
                //this.preanalisis = this.input.charAt(this.actual)
                //let fact = this.declaraciones();
                let rest_term = this.ordenes();
                
                //alert(rest_term)
                //let end = this.input.substring(this.actual,this.input.length);
                
                // if (end!="}") {
                //     //alert(end);
                //     error = "Error en el programa final end";
                //     throw error;
                // }
                
                //return fact+g+rest_term;
                return rest_term;
            //}
            //error = "Inicie el programa con la intruccion int main()";
            //throw error;
        }   
        catch (e) {
            //alert("error en programa")
            this.ExecError();
            throw new FatalError("Something went badly wrong!");
    }

    }
    ExecError(){
        document.getElementById('output').innerHTML= 
    "<img src='fall.png' alt='' class='notify' width='40px'srcset=''>"+error;//"Programa correcto ;)";//' '+valc;
  
    }
}
let text
async function loadFile(file) {
    table3="";
    document.getElementById('output').innerHTML= "";
    text = await file.text();
    document.getElementById('out').textContent = text;
  }
const validar = () =>{
    document.getElementById('lr').innerHTML=tableLR
    inpu = text//document.querySelector("#input").value; 
    document.getElementById('tree').value=table3;
    //alert(inpu)
    document.getElementById('out').innerHTML=inpu;
    //inpu = inpu.replace(/ /g, ""); 
    //inpu = inpu.replace(/\n/g, ""); 
    let position = 0;
    let cad = 0;
    while (position < inpu.length) {
        let character = inpu.charAt(position)
        
        if (cad ==0 ) {
            if((character == " ") || ( character == "\n")){
                inpu = inpu.replaceAt(position, '');
                position--
            }
                
        }
        //console.log(character)
        if (character == "'") {
                //console.log("Comilla simple "+ inpu.substring(position, inpu.length))
                if (cad == 0) {
                    //console.log("comienza comilla simple: "+inpu.substring(position, inpu.length))
                    
                    cad = 1;
                }else
                if (cad == 1) {
                    //console.log("termina comilla simple")
                    cad = 0;
                }
            }
            else if (character == "\"") {
                if (cad == 0) {
                    //console.log("comienza comilla doble")
                    cad = 2;
                }else
                if (cad == 2) {
                    //console.log("termina comilla doble")
                    cad = 0;
                }
            }
            position++
    }
    //alert(inpu)
    
    //alert(inpu)
    //alert(inpu)
    let init = new Analisis(inpu);
    init.programa();
    //init.print();
    //init.ExecuteTreeCode();
    init.executeLexico();
    let gramatic = new Gramatic(init.lexico)
    gramatic.executeSum();
    document.getElementById('outputlr').innerHTML= tableSintactico; //table;
    document.getElementById('outrf').innerHTML= tableSintacticoR; //table;
    
    document.getElementById('tree').innerHTML=tableLexico;
    document.getElementById('output').innerHTML= 
        "<img src='ok.png' alt='' class='notify' width='40px'srcset=''>Programa correcto"//"Programa correcto ;)";//' '+valc;
    // alert(table)
}