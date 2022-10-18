//http://localhost/Traductor/Index.php

//#region ejecutar sh

//#endregion


const guardarArchivoDeTexto = (contenido, nombre) => {
    const a = document.createElement("a");
    const archivo = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = nombre;
    a.click();
    URL.revokeObjectURL(url);
}

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

const asign = /:=/i;

var table='';
var table3='';
var tableLexico = '';
var tableLR = '';
var tableSintactico = ''
var tableSintacticoR = ''
var matrixLR = []
//Generate LR
function generateLR(){
//#region Matrix

    /*0*/matrixLR.push(['','','','','d5','','','','','','','','','','','','','','','','','','','r2','1','2','3','4','','6','','','','','','','','','','','','','','','','']);
    //alert("Value "+matrixLR[0].length)
    /*1*/matrixLR.push(['','','','','','','','','','','','','','','','','','','','','','','','r0','','','','','','','','','','','','','','','','','','','','','','']);
    /*2*/matrixLR.push(['','','','','','','','','','','','','','','','','','','','','','','','r1','','','','','','','','','','','','','','','','','','','','','','']);
    //alert("Value "+matrixLR[2].length)
    /*3*/matrixLR.push(['','','','','d5','','','','','','','','','','','','','','','','','','','r2','','7','3','4','','6','','','','','','','','','','','','','','','','']);
    
    /*4*/matrixLR.push(['','','','','r4','','','','','','','','','','','','','','','','','','','r4','','','','','','','','','','','','','','','','','','','','','','']);
    //alert("Value "+matrixLR[4].length)
    /*5*/matrixLR.push(['d8','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']);
    //alert("Value "+matrixLR[5].length)

    /*6*/matrixLR.push(['','','','','r5','','','','','','','','','','','','','','','','','','','r5','','','','','','','','','','','','','','','','','','','','','','']);
    //alert("Value "+matrixLR[6].length)
    /*7*/matrixLR.push(['','','','','','','','','','','','','','','','','','','','','','','','r3','','','','','','','','','','','','','','','','','','','','','','']);
    /*8*/matrixLR.push(['','','','','','','','','','','','','r7','d10','d11','','','','','','','','','','','','','','9','','','','','','','','','','','','','','','','','']);
    /*9*/matrixLR.push(['','','','','','','','','','','','','d12','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']);
    /*10*/matrixLR.push(['d13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    //alert("Value "+matrixLR[10].length)
    /*11*/matrixLR.push([,,,,'d15',,,,,,,,,,,'r10',,,,,,,,,,,,,,,'14',,,,,,,,,,,,,,,'']);
    //alert("Value "+matrixLR[11].length)
    /*12*/matrixLR.push(['r6',,,,'r6',,,,,,,,,,,,,'r6',,'r6','r6','r6',,'r6',,,,,,,,,,,,,,,,,,,,,,'']);
    /*13*/matrixLR.push([,,,,,,,,,,,,'r7','d10',,,,,,,,,,,,,,,'16',,,,,,,,,,,,,,,,,'']);
    /*14*/matrixLR.push([,,,,,,,,,,,,,,,'d17',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*15*/matrixLR.push(['d18',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*16*/matrixLR.push([,,,,,,,,,,,,'r8',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*17*/matrixLR.push([,,,,,,,,,,,,,,,,'d20',,,,,,,,,,,,,,,,'19',,,,,,,,,,,,,'']);
    /*18*/matrixLR.push([,,,,,,,,,,,,,'d22',,'r12',,,,,,,,,,,,,,,,'21',,,,,,,,,,,,,,'']);
    /*19*/matrixLR.push([,,,,'r9',,,,,,,,,,,,,,,,,,,'r9',,,,,,,,,,,,,,,,,,,,,,'']);
    /*20*/matrixLR.push(['d27',,,,'d5',,,,,,,,,,,,,'r15',,'d28','d29','d30',,,,,,'25',,,,,,'23','24',,'26',,,,,,,'31',,'']);
    /*21*/matrixLR.push([,,,,,,,,,,,,,,,'r11',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*22*/matrixLR.push([,,,,'d32',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*23*/matrixLR.push([,,,,,,,,,,,,,,,,,'d33',,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*24*/matrixLR.push(['d27',,,,'d5',,,,,,,,,,,,,'r15',,'d28','d29','d30',,,,,,'25',,,,,,'34','24',,'26',,,,,,,'31',,'']);
    /*25*/matrixLR.push(['r17',,,,'r17',,,,,,,,,,,,,'r17',,'r17','r17','r17',,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*26*/matrixLR.push(['r18',,,,'r18',,,,,,,,,,,,,'r18',,'r18','r18','r18',,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*27*/matrixLR.push([,,,,,,,,,,,,,,'d36',,,,'d35',,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*28*/matrixLR.push([,,,,,,,,,,,,,,'d37',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*29*/matrixLR.push([,,,,,,,,,,,,,,'d38',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*30*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,'r29',,'d41',,,,,,,,,,,,,,,,,,,,,,,,,'39',,,'44','45',,'40']);
    /*31*/matrixLR.push([,,,,,,,,,,,,'d50',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*32*/matrixLR.push(['d51',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*33*/matrixLR.push([,,,,'r14',,,,,,,,,,,,,,,,,,,'r14',,,,,,,,,,,,,,,,,,,,,,'']);
    /*34*/matrixLR.push([,,,,,,,,,,,,,,,,,'r16',,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*35*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'52']);
    /*36*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41','r31',,,,,,,,,,,,,,,,,,,,,,,,,'53',,'44','45',,'54']);
    /*37*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'55']);
    /*38*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'56']);
    /*39*/matrixLR.push([,,,,,,,,,,,,'d57',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*40*/matrixLR.push([,,,,,'d59','d58','d60','d63','d62',,'d61','r30',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*41*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'64']);
    /*42*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'65']);
    /*43*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'66']);
    /*44*/matrixLR.push([,,,,,'r52','r52','r52','r52','r52',,'r52','r52','r52',,'r52',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*45*/matrixLR.push(['',,,,,'r35','r35','r35','r35','r35',,'r35','r35','r35',,'r35',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*46*/matrixLR.push([,,,,,'r36','r36','r36','r36','r36',,'r36','r36','r36','d36','r36',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*47*/matrixLR.push([,,,,,'r37','r37','r37','r37','r37',,'r37','r37','r37',,'r37',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*48*/matrixLR.push([,,,,,'r38','r38','r38','r38','r38',,'r38','r38','r38',,'r38',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*49*/matrixLR.push([,,,,,'r39','r39','r39','r39','r39',,'r39','r39','r39',,'r39',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*50*/matrixLR.push(['r25',,,,'r25',,,,,,,,,,,,,'r25',,'r25','r25','r25','r25',,,,,,,,,,,,,,,,,,,,,,,'']);
    /*51*/matrixLR.push([,,,,,,,,,,,,,'d22',,'r12',,,,,,,,,,,,,,,,'67',,,,,,,,,,,,,,'']);
    /*52*/matrixLR.push([,,,,,'d59','d58','d60','d63','d62',,'d61','d68',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*53*/matrixLR.push([,,,,,,,,,,,,,,,'d69',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*54*/matrixLR.push([,,,,,'d59','d58','d60','d63','d62',,'d61',,'d71',,'r33',,,,,,,,,,,,,,,,,,,,,,,,,,'70',,,,'']);
    /*55*/matrixLR.push([,,,,,'d59','d58','d60','d63','d62',,'d61',,,,'d72',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*56*/matrixLR.push([,,,,,'d59','d58','d60','d63','d62',,'d61',,,,'d73',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*57*/matrixLR.push(['r24',,,,'r24',,,,,,,,,,,,,'r24',,'r24','r24','r24','r24',,,,,,,,,,,,,,,,,,,,,,,'']);
    /*58*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'74']);
    /*59*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'75']);
    /*60*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'76']);
    /*61*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'77']);
    /*62*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'78']);
    /*63*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'79']);
    /*64*/matrixLR.push([,,,,,'d59','d58','d60','d63','d62',,'d61',,,,'d80',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*65*/matrixLR.push([,,,,,'r44','r44','r44','r44','r44',,'r44','r44','r44',,'r44',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*66*/matrixLR.push([,,,,,'r45','r45','r45','r45','r45',,'r45','r45','r45',,'r45',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*67*/matrixLR.push([,,,,,,,,,,,,,,,'r13',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*68*/matrixLR.push(['r21',,,,'r21',,,,,,,,,,,,,'r21',,'r21','r21','r21','r21',,,,,,,,,,,,,,,,,,,,,,,'']);
    /*69*/matrixLR.push([,,,,,'r40','r40','r40','r40','r40',,'r40','r40','r40',,'r40',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*70*/matrixLR.push([,,,,,,,,,,,,,,,'r32',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*71*/matrixLR.push(['d46','d47','d48','d49',,'d42',,,,,'d43',,,,'d41',,,,,,,,,,,,,,,,,,,,,,,,,,,,'44','45',,'81']);
    /*72*/matrixLR.push(['d27',,,,,,,,,,,,,,,,'d85',,,'d28','d29','d30',,,,,,,,,,,,,,,'83',,'84',,,,,'31','82','']);
    /*73*/matrixLR.push([,,,,,,,,,,,,,,,,'d85',,,,,,,,,,,,,,,,,,,,,,'86',,,,,,,'']);
    /*74*/matrixLR.push([,,,,,'r46','r46','r46','r46','r46',,'r46','r46','r46',,'r46',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*75*/matrixLR.push([,,,,,'r47','d58','r47','r47','r47',,'r47','r47','r47',,'r47',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*76*/matrixLR.push([,,,,,'d59','d58','r48','r48','r48',,'r48','r48','r48',,'r48',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*77*/matrixLR.push([,,,,,'d59','d58','d60','r49','r49',,'r49','r49','r49',,'r49',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*78*/matrixLR.push([,,,,,'d59','d58','d60','r50','r50',,'d61','r50','r50',,'r50',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*79*/matrixLR.push([,,,,,'d59','d58','d60','r51','d62',,'d61','r51','r51',,'r51',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*80*/matrixLR.push([,,,,,'r43','r43','r43','r43','r43',,'r43','r43','r43',,'r43',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*81*/matrixLR.push([,,,,,'d59','d58','d60','d63','d62',,'d61',,'d71',,'r33',,,,,,,,,,,,,,,,,,,,,,,,,,'87',,,,'']);
    /*82*/matrixLR.push(['r26',,,,'r26',,,,,,,,,,,,,'r26',,'r26','r26','r26','d89',,,,,,,,,,,,,,,'88',,,,,,,,'']);
    /*83*/matrixLR.push(['r41',,,,'r41',,,,,,,,,,,,,'r41',,'r41','r41','r41','r41',,,,,,,,,,,,,,,,,,,,,,,'']);
    /*84*/matrixLR.push(['r42',,,,'r42',,,,,,,,,,,,,'r42',,'r42','r42','r42','r42',,,,,,,,,,,,,,,,,,,,,,,'']);
    /*85*/matrixLR.push(['d27',,,,,,,,,,,,,,,,,'r19',,'d28','d29','d30',,,,,,,,,,,,,,'90','91',,,,,,,'31',,'']);
    /*86*/matrixLR.push(['r23',,,,'r23',,,,,,,,,,,,,'r23',,'r23','r23','r23','r23',,,,,,,,,,,,,,,,,,,,,,,'']);
    /*87*/matrixLR.push([,,,,,,,,,,,,,,,'r34',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*88*/matrixLR.push(['r22',,,,'r22',,,,,,,,,,,,,'r22',,'r22','r22','r22','r22',,,,,,,,,,,,,,,,,,,,,,,'']);
    /*89*/matrixLR.push(['d27',,,,,,,,,,,,,,,,'d85',,,'d28','d29','d30',,,,,,,,,,,,,,,'83',,'84',,,,,'31','92','']);
    /*90*/matrixLR.push([,,,,,,,,,,,,,,,,,'d93',,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*91*/matrixLR.push(['d27',,,,,,,,,,,,,,,,,'r19',,'d28','d29','d30',,,,,,,,,,,,,,'94','91',,,,,,,'31',,'']);
    /*92*/matrixLR.push(['r27',,,,'r27',,,,,,,,,,,,,'r27',,'r27','r27','r27',,,,,,,,,,,,,,,,,,,,,,,,'']);
    /*93*/matrixLR.push(['r28',,,,'r28',,,,,,,,,,,,,'r28',,'r28','r28','r28','r28',,,,,,,,,,,,,,,,,,,,,,,'']);
    /*94*/matrixLR.push([,,,,,,,,,,,,,,,,,'r20',,,,,,,,,,,,,,,,,,,,,,,,,,,,'']);
    //#region comprobe table
    /*
    console.log('-------------------------------------------------------------------------------')
    let i=0;
    let stringRv = ''
    while (i<matrixLR.length) {
        if (matrixLR[i].length == 46)
            stringRv = "----->ok"
        else 
            stringRv = "-------------------->Error"
        console.log(i+": "+matrixLR[i].length+stringRv)
        i++
    }
    console.log('-------------------------------------------------------------------------------')
    */
    //#endregion
    
//#endregion
    //console.log(matrixLR)
    //#region CREATE TABLE LR
    let info = ['identificador','entero','real','cadena','tipo',
    'opSuma','opMul','opRelac','opOr','opAnd','opNot','opIgualdad',';',",",'(',')','{','}','=',
    'if','while','return','else','$','programa','Definiciones','Definicion','DefVar','ListaVar',
    'DefFunc','Parametros','ListaParam','BloqFunc','DefLocales','DefLocal','Sentencias','Sentencia',
    'Otro','Bloque','ValorRegresa','Argumentos','ListaArgumentos','Termino','LlamadaFunc','SentenciaBloque','Expresion']
    let i=0
    let j=0
    tableLR = '<table id="lr">'
    tableLR += '<tr class="rowlr"><th class="void"></th>'
    while (i<info.length) {
        tableLR += '<th class="rowlr">'+i+'</th>'
        i++
    }
    tableLR +='</tr>'
    i=0
    tableLR +='<tr class="rowlrid"><th class="rowlr"></th>'
    while (i<info.length) {
        tableLR += '<th class="rowlrid">'+info[i]+'</th>'
        i++
    }
    tableLR +='</tr>'
    i=0
    while (i<matrixLR.length) {
        j=0
        tableLR += '<tr class="rowlr">'+'<th class="rowlr">'+i+'</th>'
        let temp = ''
        while (j<info.length) {
            if (matrixLR[i][j] == undefined) {
                temp = ''
            }else
                temp = matrixLR[i][j]
            tableLR += '<th class="rowlr">'+temp+'</th>'
            j++
        }
        tableLR +='</tr>'
        i++
    }
    tableLR += '</table>'
    //tableLR = ''//borrar aqui
    //#endregion
}

generateLR();
document.getElementById('lr').innerHTML=tableLR

////////////////////////THIS Y GENERATE GRAMATIC ANALSISI

//#region Regs
function PintGraf(NODES,EDGES){
    var nodes = new vis.DataSet(
        NODES
      );

      var edges = new vis.DataSet(EDGES);

    var container = document.getElementById("mynetwork");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {};
      var network = new vis.Network(container, data, options);
}
let NODES = []
let EDGES = []

let idsRestricted = []
//#region vars to Tickets and Temps
let tempsTickets = []
let FunctionsCode = []

function getNewTicket() {
    tempsTickets.push(tempsTickets.length)
    return "L"+tempsTickets.length
}
let temmpsTemps = []
function getNewTemp() {
    temmpsTemps.push(temmpsTemps.length)
    return "_t"+temmpsTemps.length
}
let mostMedCode = []
let VarsCode = []
function getComp(String) {
    //alert(String)
    let i=0;
    let ac=''
    while (i<String.length) {
        //alert(String[i])
        if (!letra.test(String[i]) && !num.test(String[i])) {
            //alert("si")
            ac += String[i]
        }else
            return ac
        i++
    }
    return ac
}
function getValue(String) {
    //alert(String)
    let i=0;
    let ac=''
    while (i<String.length) {
        //alert("|"+String[i]+"|")
        if (letra.test(String[i]) || num.test(String[i] || String[i]=="_")) {
            //alert("si "+String[i])
            ac += String[i]
        }else
            return ac
        i++
    }
    return ac
}

function executeMedCode() {
    let infoMedCode = 'Codigo Intermedio'
    let i = 0
    while (i<mostMedCode.length) {
        infoMedCode += '<div class="codeMed">'
        if (mostMedCode[i].charAt(0)!="L") {
            infoMedCode += ' &nbsp;&nbsp;&nbsp;&nbsp;'+
                            mostMedCode[i]
        }else
            infoMedCode += mostMedCode[i]
        infoMedCode += '</div>'
        //infoMedCode += "<br>"
        i++
    }
    document.getElementById('InterCode').innerHTML=infoMedCode;
}

function GAmbito(Var,ambito) {
    let i=0;
    while (i<VarsCode.length) {
        if (ambito == VarsCode[i][2] && VarsCode[i][2] != "#")
            if ((Var == VarsCode[i][0])) {
                return ambito+"_"
            }
        i++
    }
    return ""
}
let paramFuntions = []

function addParamFunctions(funcion,param) {
    let i=0
    while (i<paramFuntions.length) {
        if (funcion == paramFuntions[i][0]) {
            paramFuntions[i][1].push(param)
        }
        i++
    }
    
}
function getParamFunctions(funcion) {
    let i=0
    while (i < paramFuntions.length) {
        if (funcion == paramFuntions[i][0]) {
            return paramFuntions[i][1]
        }
        i++
    }
    return ""
}

let DownloadFile = ''

function executeEnsambler() {
    //#region .data
    //#region coment
    let infoSambler =
        ';rm provated.asm && nasm -f elf64 -o code.o code.asm &&'+
        ' ld -m elf_x86_64 -o code --entry=main code.o && ./code &&'+
        ' mv code.asm $PWD/provated.asm'+
        '\n<br>;nasm -f elf64 -o code.o code.asm && '+
        'ld -m elf_x86_64 -o code --entry=main code.o && '+ 
        './code\n<br>'
    infoSambler +='<div class="codeMed">;Creado por: Izmael Guzman Murguia.\n<br>'+
    ';Materia: Seminario de solucion de prioblemas de traductores de lenguajes II.\n<br>'+
    ';Maestro: Michel Emanuel Lopez Franco.\n\n<br><br>'
    //#endregion
    let i=0
    infoSambler += '%macro prints 2\n<br>'+
        'mov eax, 4;escribit\n<br>'+
        'mov ebx, 1;imprimir\n<br>'+
        'mov ecx, %1;mensaje\n<br>'+
        'mov edx, %2;Puntero\n<br>'+
        'int 0x80\n<br>'+
        '%endmacro\n<br>'
    infoSambler += '<br>\n%macro printi 1\n<br>'+
    'mov edx,%1\n<br>'+
    'add edx, 48\n<br>'+
    'mov [_tmp_],edx\n<br>'+
    'mov ecx,_tmp_\n<br>'+
    'mov edx,1\n<br>'+
    'mov eax, 4;escribit\n<br>'+
    'mov ebx, 1;imprimir\n<br>'+
    'int 0x80\n<br>'+
    '%endmacro\n\n<br><br>'

    infoSambler += 'section .bss\n<br>'
    i=0
    while (i<VarsCode.length) {
        infoSambler += '<div class="codeMed">'
            let sp
            let tipe = ''
            if (VarsCode[i][1]=="string") 
                tipe = "_"
            sp = VarsCode[i][2]+"_"
            if (sp == "#_") 
                    sp = ''
            switch (tipe) {
                case "":
                    infoSambler += sp+VarsCode[i][0] +' resb 1 ;variable no inicializada int '+VarsCode[i][0]
                    break;
            
                case "_":
                    infoSambler += "\n"+sp+VarsCode[i][0]+tipe +' resb 35;variable no inicializada string '+VarsCode[i][0]
                    break;
            }
            //infoSambler += sp+VarsCode[i][0] +' resb 1 ;variable no inicializada int '+VarsCode[i][0]
        infoSambler += '</div>\n'
        //infoMedCode += "<br>"
        
        i++
        }
    
    infoSambler += "<br>\n;Variables auxiliares\n<br>_tmp_ resb 1;"+
        " variable auxiliar para imprimri mensajes\n<br>"
    infoSambler += "<br>\n;Variables remporales<br>\n"
    i=0
    while (i<mostMedCode.length) {
        if (mostMedCode[i].charAt(0)=="_") {
            let te = getValue(mostMedCode[i].substring(1,mostMedCode[i].length))
            let rv = " resb 1"
            if (mostMedCode[i].charAt(te.length+5)=='"') {
                i++
                continue
            }
            infoSambler+="_"+te+rv+"<br>\n"
        }
        i++
    }
    // while (i<mostMedCode.length) {
    //     if (mostMedCode[i].substring(0,2)=="__" && mostMedCode[i].charAt(3)!="_") {
    //         let id = "<br>\n__"+getValue(mostMedCode[i].substring(2,mostMedCode[i].length))
    //         infoSambler += id +' resb 1 ;variable no inicializa'
    //     }
    //     i++
    // }
    // i=0
    // while (i<VarsCode.length) {
    //     infoSambler += '<div class="codeMed">'
    //         if (VarsCode[i][1]=="string"){
    //             infoSambler += "\n"+VarsCode[i][0] +' resb 35;variable no inicializada string '+VarsCode[i][0]
    //             // infoSambler += "\n_"+VarsCode[i][0] +" equ $-"+
    //             //             VarsCode[i][0]+" ;Puntero lengt string a "+VarsCode[i][0] 

    //             infoSambler += '</div>\n'
    //         }
    //     //infoMedCode += "<br>"
    //     i++
    // }

    infoSambler += '<br>\nSECTION .data\n<br>'+
                '_ln_ db 0xa,0xd ;variable para salto de linea \n<br>'+
                '__ln_ equ $-_ln_'

    i =0;
    while (i<mostMedCode.length) {
        if (asign.test(mostMedCode[i]) && mostMedCode[i].charAt(0)=="_") {   //asignacion

                let g ="_"+getValue(mostMedCode[i].substring(1,mostMedCode[i].length))
                //alert(mostMedCode[i].charAt(g.length+4))
                if (mostMedCode[i].charAt(g.length+4)=='"') {

                let cad = mostMedCode[i].substring(g.length+4,mostMedCode[i].length-1)
                //alert(cad)
                let j=cad.length
                while (j<=35) {
                    cad += " "
                    j++
                }
                
                cad += '"'
                g = "\n<br>"+g+' db '+cad+'\n<br>'
                //alert(g)
                infoSambler += g
            }
                //alert("es un: " + g)
                //alert("la cadena es: "+cad)
            
        }
        i++
    }

    //#endregion
    //#region .text
    infoSambler += '\n\n<br><br>SECTION .text\n<br>'
    i=0
    while (i<FunctionsCode.length) {
        //alert(infoSambler[i])
        if (FunctionsCode[i][0]=="main") {
            infoSambler += '<div class="codeMed">global ' +
           // ' &nbsp;&nbsp;&nbsp;&nbsp;global '+
            FunctionsCode[i][0] +" ; make label available to linker as invoked by gcc"+
            '</div>\n<br>'
        }
        //infoMedCode += "<br>"
        i++
    }
    //#endregion
    i = 0
    let isPS=''
    let tk =0;
    let ambito="#"
    let ret = true
    while (i<mostMedCode.length) {
        infoSambler += '<div class="codeMed">'
        isPS = mostMedCode[i].substring(0,6)
        if (isPS == "printi") {
            let p1 = getValue(mostMedCode[i].substring(7,mostMedCode[i].length))
            let ant = GAmbito(p1,ambito)
            //alert(ambito+ant)
            p1 = ant+ p1
            if (letra.test(p1[0])|| p1.charAt(0)=="_") {
                p1 = "["+p1+"]"
            }
            infoSambler += '\n<br>mov edx, '+p1+
                    '\n<br>printi edx\n<br>prints _ln_,__ln_\n<br>'
        }else
        if (isPS == "prints") {
            //alert(isPS)
            let p1 = getValue(mostMedCode[i].substring(7,mostMedCode[i].length))
            let ant = GAmbito(p1,ambito)
            p1 = ant+ p1
            infoSambler +="\n<br> prints "+p1+"_,35"+
            "\n<br>prints _ln_,__ln_\n<br>"
        }else{ 
            isPS = mostMedCode[i].substring(0,3)
            
            if (isPS=="if(") {
                //alert(isPS)
                let param = mostMedCode[i].substring(3,mostMedCode[i].length)
                let p1 = getValue(param)
                let ant = GAmbito(p1,ambito)
                
                param = mostMedCode[i].substring(3+p1.length,mostMedCode[i].length)
                
                let cp = getComp(param)
                param = mostMedCode[i].substring(3+p1.length+cp.length,mostMedCode[i].length)
                let p2 = getValue(param)
                let ant2 = GAmbito(p2,ambito)
                
                let salt = mostMedCode[i].substring(3+p1.length+cp.length+
                    p2.length+7,mostMedCode[i].length)
                //alert(p1+cp+p2+salt)
                p1 = ant+ p1
                p2 = ant2 + p2
                infoSambler += //"mov edx, 0\nmov ebx,["+p1+
                            "\n<br>cmp byte ["+p1+"],"+p2+"\n"
                let jWhat = ''
                switch (cp) {
                    case "<":
                        jWhat = "jl"
                        break;
                    case "<=":
                        jWhat = "jle"
                        break;
                    case "==":
                        jWhat = "je"
                        break;
                    case ">":
                        jWhat = "jg"
                        break;
                    case ">=":
                        jWhat = "jge"
                        break;
                    case "!=":
                        jWhat = "jne"
                        break;
                    default:
                        break;
                }
                infoSambler += jWhat+" "+salt
            
            }else{
                isPS = mostMedCode[i].substring(0,4)
                if (isPS == "goto") {
                    let salt = mostMedCode[i].substring(5,mostMedCode[i].length)
                    infoSambler += "jmp "+salt+""
                    //alert(salt)
                }
                else{
                    //alert(mostMedCode[i])
                    if (asign.test(mostMedCode[i])) {
                        let val 
                        
                        let t
                        if (mostMedCode[i].charAt(0)=="_") {//temporal
                            val = "_"+getValue(mostMedCode[i].substring(1,mostMedCode[i].length))
                            t = mostMedCode[i].substring(val.length,mostMedCode[i].length)
                        }else{
                            val = getValue(mostMedCode[i])
                            t = mostMedCode[i].substring(val.length,mostMedCode[i].length)
                        }
                        //alert("Primera asignacion: "+val)
                        t = t.substring(4,t.leng)
                        //alert("val es: "+val+"   t es: "+t)
                        // alert("Primero es: "+val+" Asignar: "+t)
                        if (t[0]=="!") {//no funciona
                            let val2 = t.substring(1,t.length)
                            if (letra.test(val2[0])|| val2.substring(0,2)=="_") {
                                if (val2.substring(0,2)=="_") {
                                    val2 = "["+val2+"]"
                                }else
                                {
                                    let ant = GAmbito(val2,ambito)
                                    val2 = ant +val2
                                }
                                
                            }
                            infoSambler += "mov ax, "+val2+
                                "\n<br>neg ax\n<br>mov ["+val+"],ax\n<br>"
                            i++
                            continue
                            //alert("negacion")
                        }

                        //t = t.substring(1,t.leng)
                        //alert("Faltante: "+t)
                        let fin 
                        //alert("evaluar: "+t.charAt(t.length-1))
                        if (t.charAt(t.length-1)=='"'){
                                i++
                                val = getValue(mostMedCode[i])
                                fin = getValue(mostMedCode[i].substring(
                                val.length+5,mostMedCode[i].length))
                                let ant  = GAmbito(val.substring(0,val.length),ambito)
                                
                                val = ant +val 
                                infoSambler += 
                                    '\n<br>cld'+
                                    '\n<br>mov ecx, 35'+
                                    '\n<br>mov esi, _'+fin+
                                    '\n<br>mov edi, '+val+
                                    '_\n<br>.ciclo'+tk+':'+
                                    '\n<br>lodsb'+
                                    '\n<br>stosb'+
                                    '\n<br>loop .ciclo'+tk+'\n<br>\n<br>'
                                tk++
                                i++
                                continue
                            
                        }
                        
                        else{
                            if (letra.test(t[0]) || num.test(t[0])) {
                                // alert("Posible asignacion: "+t)
                                fin = getValue(t)
                            }else
                                fin  = "_"+ getValue(t.substring(1,t.length))
                            
                        }
                            
                        //alert("antes: "+t+" Antes: "+fin)
                        t = t.substring(fin.length,t.length)
                        

                        if (letra.test(fin[0]) || fin.charAt(0)=="_") {
                            //alert("T:"+t+"Fin:"+fin)
                            let alter  = getParamFunctions(fin)
                           // alert(alter)
                            if (alter.length>0) {
                                t = t.substring(1,t.length)
                                let j=0;
                                let t1 = 0;
                                let t2 = 0;
                                while (j<alter.length) {
                                    let acum = ''
                                    while(t[t1]!=','  && t1 < t.length){
                                        console.log(t[t1])
                                        acum+=t[t1]
                                        t1++
                                    }t1++
                                    let acum2=''
                                    acum2 = alter[t2]
                                    t2++
                                    if (num.test(acum.charAt(0))) {
                                        infoSambler += '\n<br>mov ['+fin+"_"+acum2+'], byte '+acum        
                                    }else{
                                        let ant = GAmbito(acum,ambito)
                                        acum = ant + acum
                                        infoSambler += "\n<br>mov eax, ["+acum+
                                            "]\n<br>mov ["+fin+"_"+acum2+"],eax"
                                    }
                                    j++
                                }
                                infoSambler +="\n<br>call "+fin+"\n<br>mov ["+val+"], eax"
                                i++
                                continue
                            }
                            let ant = GAmbito(fin,ambito)
                            fin = ant +fin
                            fin = "["+fin+"]"
                            //alert(fin)
                        }
                        if (t == "") {
                            let ant = GAmbito(val,ambito)
                            val = ant + val
                            if (num.test(fin[0])) {
                                infoSambler += 'mov ['+val+'],byte '+fin
                            }else{
                                //alert("ok")
                                let ant = GAmbito(val,ambito)
                                val = ant + val
                                infoSambler += "\n<br>mov eax, "+fin+
                                    "\n<br>mov ["+val+"],eax"
                            }
                                
                        }else{
                            //alert("Posible operacion val: "+val+" Fin: "+fin+"Restante: "+t)
                            let operation = t[0]
                            let val2 = t.substring(1,t.length)
                            
                            if (letra.test(val2[0])  || val2.charAt(0)=="_") {
                                let ant = GAmbito(val2,ambito)
                                val2 = ant + val2
                                val2 = "["+val2+"]"
                            }
                            switch (operation) {
                                case "+"://Suma
                                        infoSambler += "mov eax, "+fin+
                                        "\n<br>mov ebx, "+val2+
                                        "\n<br>add eax, ebx"+
                                        "\n<br>mov ["+val+"],eax"
                                    break;
                                case "-"://Resta
                                    infoSambler += "mov eax, "+fin+
                                    "\n<br>mov ebx, "+val2+
                                    "\n<br>sub eax, ebx"+
                                    "\n<br>mov ["+val+"],eax"  
                                    break;
                                case "*"://Multiplicacion
                                    infoSambler += "mov ax, "+fin+
                                    "\n<br>mov cx, "+val2+
                                    "\n<br>mul cx"+
                                    "\n<br>mov ["+val+"], ax"
                                    //alert("ultiplicacion")  
                                break;
                                case "/"://Divicion 
                                infoSambler += "mov bx, "+val2+
                                    "\n<br>mov dx, 0"+
                                    "\n<br>mov ax,"+fin+
                                    "\n<br>div bx"+
                                    "\n<br>mov ["+val+"],ax"  
                                    //alert("divicion")      
                                    break;
                                default://asignacion simple
                                //alert("not operation arigmetic")
                                    break;
                            }
                        }

                        //let fin = getValue(mostMedCode[i].substring(val.length+4,mostMedCode[i].length))
                        //alert(fin)
                        
                        
                        
                    }
                    else if (mostMedCode[i].substring(0,3)=="ret") {
                        ret = true
                        let r = mostMedCode[i].charAt(4)
                        if (num.test(r)) {
                            r = mostMedCode[i].substring(4,mostMedCode[i].length)
                            infoSambler += "mov eax, "+r+"\n<br>ret\n<br>"
                                mostMedCode[i].substring(3,mostMedCode[i].length)
                        }else if (r=="_" || letra.test(r)) {
                            r = mostMedCode[i].substring(4,mostMedCode[i].length)
                            infoSambler += "mov eax, ["+r+"]\n<br>ret\n<br>"
                        }
                    }
                    else{//funcion
                        
                        isPS = mostMedCode[i].charAt(isPS.length)
                        if (isPS==":") {
                            if (!ret) {
                                let tyipe = getTipe(ambito,"#")
                                if (tyipe!="void") {
                                    alert("Falta de instruccion return en la funcion "+ambito)
                                    throw new FatalError("Error de funcion variable");
                                }
                                
                                
                            }
                            ret = false
                            ambito = mostMedCode[i].substring(0,
                                mostMedCode[i].length-1)
                            infoSambler +=
                            mostMedCode[i]    
                        }else{
                            isPS = getValue(mostMedCode[i])
                            if (isPS == "end") {
                                ambito = "#"
                                //alert("Fin de funcion")
                            }
                            else if (mostMedCode[i].charAt(0)=="L") {
                                infoSambler += "\n<br>"+mostMedCode[i]+"\n<br>"
                            }else{
                                
                                alert("Help!"+isPS)
                            }
                                
                        }
                                        
                    }
                }
                    
    }

            }
            
        
        infoSambler += '\n</div>'
        //infoMedCode += "<br>"
        i++
    }
    if (!ret) {
        let tyipe = getTipe(ambito,"#")
    alert(tyipe)
    if (tyipe!="void") {
        alert("Falta de instruccion return en la funcion "+ambito)
        throw new FatalError("Error de funcion variable");
        }
    }
    
    infoSambler += '\n<br>mov ebx,0 ; exit code, 0=normal\n<br>'+
                   'mov eax,1 ; exit command to kernel\n<br>'+
                   'int 0x80  ; interrupt 80 hex, call kernel\n<br>'+
                   'ret  ; salida\n<br>'

    infoSambler += '</div>'
    
    document.getElementById('Ensambler').innerHTML=infoSambler
    let content = document.getElementById('Ensambler').textContent
    DownloadFile = content
    // guardarArchivoDeTexto(content,"code.asm")
}
function Download() {
    //alert("OK")
    if (DownloadFile.length>0) {
        guardarArchivoDeTexto(DownloadFile,"code.asm")
    }
    
}
//#endregion
function getThwoPoints(params) {
    let i=0
    let r = ''
    while (i < params.length) {
        if (params[i]!=':') {
            r += params[i]
        }else
            return r
        
        i++
    }
}
function getNewId() {
    idsRestricted.push(idsRestricted.length)
    return idsRestricted.length
}
function adNode(ide,Value) {
    NODES.push({ id: ide, label: Value })
}
function adEdge(Origin,Destination) {
    EDGES.push({ from: Origin, to: Destination })
}
//#region tables functions



function getArguments(ambito) {
    let i = 0
    while (i<FunctionsCode.length) {
        if (FunctionsCode[i][0]==ambito) {
            return Object.assign(FunctionsCode[i][2])
        }
        i++
    }
    
}

function addTipe(ambito,tipo){
    let i = 0
    while (i<FunctionsCode.length) {
        if (FunctionsCode[i][0]==ambito) {
            FunctionsCode[i][2].push(tipo)
        }
        i++
    }
} 

function executeFunctions() {
    let tableFunctions = '<table id="functions">'
    tableFunctions += '<tr class="rowFunc"><th>Funcion</th><th>Tipo</th>'+
                        '<th>Parametros</th></tr>'
    let i = 0
    //FunctionsCode.push(['main',"int"])
    while (i<FunctionsCode.length) {
        tableFunctions += '<tr class="fun"><th>'+FunctionsCode[i][0]+'</th>'+
        '<th>'+FunctionsCode[i][1]+'</th><th>' 
        let j = 0;
        while (j<FunctionsCode[i][2].length) {
            tableFunctions += FunctionsCode[i][2][j]
            if(j!=FunctionsCode[i][2].length-1){
                tableFunctions+=","
            }
            j++
        }
        tableFunctions += '</th></tr>'
        i++
    }
    tableFunctions += '</table>'
    document.getElementById('functions').innerHTML = tableFunctions

}
//#endregion

function executeVars() {
    let tableVars = '<table id="vars">'
    tableVars += '<tr class="rowVars"><th>Variable</th>'+
                  '<th>Tipo</th><th>Ambito</th></tr>'
    let i = 0
    //VarsCode.push(['var1',"int","#"])
    while (i<VarsCode.length) {
        tableVars += '<tr class="var"><th>'+VarsCode[i][0]+'</th>'+
        '<th>'+VarsCode[i][1]+'</th>'+
        '<th>'+VarsCode[i][2]+'</th></tr>' 
        i++
    }
    tableVars += '</table>'
    document.getElementById('vars').innerHTML = tableVars

}
//#endregion


function comprobeVar(Var,ambito) {
    let i=0;
    while (i<VarsCode.length) {
        if (ambito == VarsCode[i][2] && VarsCode[i][2] != "#")
            if ((Var == VarsCode[i][0])) {
                return "Existe una variable " + Var +
                " de tipo "+VarsCode[i][1]+ " de ambito "+VarsCode[i][2]
            }
        else if (VarsCode[i][2] == "#" && ambito == "#") {
            if ((Var == VarsCode[i][0])) {
                return "Existe una variable " + Var +
                " de tipo "+VarsCode[i][1]+ " de ambito "+VarsCode[i][2]
            }
        }
        i++
    }
    i=0
    while (i<FunctionsCode.length) {
        if (Var == FunctionsCode[i][0]) {
            return "Existe una funcion "+Var+" de tipo "+FunctionsCode[i][1]
        }
        i++
    }
    return "";
}
function getTipe(Var,ambito) {
    let i=0;
    while (i<VarsCode.length) {
        if (ambito == VarsCode[i][2] || VarsCode[i][2] == "#")
            if (Var == VarsCode[i][0]) {
                return VarsCode[i][1]
            }
        i++
    }
    i=0
    while (i<FunctionsCode.length) {
        if (Var == FunctionsCode[i][0]) {
            return FunctionsCode[i][1]
        }
        i++
    }
    alert("No existe la variable "+Var+" en el ambito "+ambito);//Error redeclaracion
   throw new FatalError("Error de variable");
}

class R0{
    constructor(){
        this.id = ''
        this.TIP = 'R0'
        this.Aceptado = ''
    }
    Print(){
        
        //console.log(this.TIP)
        NODES.push({ id: this.id, label: this.TIP })
        EDGES.push({ from: this.id, to: this.Aceptado.id })
        //console.log(this.TIP)
        //console.log(this.id)
        //this.Aceptado.Print()
    }
    getInfo(){
        console.log(this.TIP+"(" + this.id+")"+" -> "+this.Aceptado.id)
        this.Aceptado.getInfo("#")
    }
    examine(){
        this.Aceptado.examine()
    }
}
class R1{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>programa>'
        this.Definiciones = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R1 <programa>' })
        EDGES.push({ from: this.id, to: this.Definiciones.id })
        //console.log(this.TIP)
        //console.log(this.id)
        //this.Definiciones.Print()
    }
    getInfo(ambito){
        console.log("R1("+this.id+")")
        this.Definiciones.getInfo(ambito)
    }
    examine(){
        this.Definiciones.examine()
    }
    
}
class R2{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Definiciones>'
        this.e = '/\e'
    }    
    Print(){

        let ed = getNewId()
        NODES.push({ id: this.id, label: 'R2 <Definiciones>' })
        NODES.push({ id: ed, label: this.e })
        EDGES.push({ from: this.id, to: ed })
        //console.log(this.TIP)
        //console.log(this.id)
        //console.log(ed)
    }
    getInfo(){
        console.log("R2("+this.id+")")
    }
    examine(){
        //nada
    }
}
class R3{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Definiciones>'
        this.Definicion = ''
        this.Definiciones = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R3 <Definiciones>' })
        EDGES.push({ from: this.id, to: this.Definicion.id })
        EDGES.push({ from: this.id, to: this.Definiciones.id })
        //console.log(this.TIP)
        //console.log(this.id)
        //this.Definicion.Print()
        //this.Definiciones.Print()
    }
    getInfo(ambito){
        console.log("R3("+this.id+")")
        this.Definicion.getInfo(ambito)
        this.Definiciones.getInfo(ambito)
    }
    examine(){
        this.Definicion.examine()
        this.Definiciones.examine()
    }
}
class R4{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Definicion> '
        this.DefVar = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R4 <Definicion>' })
        EDGES.push({ from: this.id, to: this.DefVar.id })
        //console.log(this.TIP)
        //console.log(this.id)
        //this.DefVar.Print()
    }
    getInfo(ambito){
        console.log("R4("+this.id+") ")
        this.DefVar.getInfo(ambito)
    }
    examine(){
        
    }
    
}
class R5{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Definicion> '
        this.DefFunc = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R5 <Definicion>' })
        EDGES.push({ from: this.id, to: this.DefFunc.id })
        //console.log(this.TIP)
        //console.log(this.id)
        //this.DefFunc.Print()
    }
    getInfo(){
        console.log("R5("+this.id+")")
        this.DefFunc.getInfo()
    }
    examine(){
        this.DefFunc.examine()
    }
}
class R6{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>DefVar>'
        this.tipo = ''
        this.identificador = ''
        this.ListaVar = ''
        this.PointAndCom = ''
    }
    Print(){
        let i1 = getNewId()
        let i2 =getNewId()
        let i3 =getNewId()
        NODES.push({ id: this.id, label: 'R6 <DefVar>' })
        NODES.push({ id: i1, label: this.tipo })
        EDGES.push({ from: this.id, to: i1 })
        NODES.push({ id: i2, label: this.identificador })
        EDGES.push({ from: this.id, to: i2 })
        //this.ListaVar.Print()
        EDGES.push({ from: this.id, to: this.ListaVar.id })
        NODES.push({ id: i3, label: this.PointAndCom })
        EDGES.push({ from: this.id, to: i3 })
        //console.log(this.TIP)
        //console.log(this.id)
        //console.log(i1)
        //console.log(i2)
        //console.log(i3)
    }
    getInfo(ambito){
        console.log("R6("+this.id+")")
        //this.ListaVar.id + " "+this.PointAndCom
        let Exist = comprobeVar(this.identificador,ambito)
        if (Exist.length>0) {
            alert(Exist)//Error redeclaracion
            throw new FatalError("Error de redeclaracion");
        }
        VarsCode.push([this.identificador,this.tipo,ambito])
        this.ListaVar.getInfo(ambito,this.tipo)
    }
    examine(){
        this.ListaVar.examine()
    }
}
class R7{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>ListaVar>'
        this.e =  '/\e'
        
    }
    Print(){
        NODES.push({ id: this.id, label: 'R7 <ListaVar>' })
        let i1 = getNewId()
        adNode(i1,this.e)
        adEdge(this.id,i1)
        //console.log(this.TIP)
        //console.log(this.id)
        //console.log(i1)
    }
    getInfo(){
    console.log("R7("+this.id+")")
    }
    examine(){
        //nada
    }
}
class R8{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>ListaVar>'
        this.Com = ''
        this.identificador = ''
        this.P_ListaVar
        
    }
    Print(){
        let i1 = getNewId()
        let i2 = getNewId()
        
        NODES.push({ id: this.id, label: 'R8 <ListaVar> ' })
        NODES.push({ id: i1, label: this.Com })
        NODES.push({ id: i2, label: this.identificador })
        EDGES.push({ from: this.id, to: i1 })
        EDGES.push({ from: this.id, to: i2 })
        //this.P_ListaVar.Print()
        EDGES.push({ from: this.id, to: this.P_ListaVar.id })
        //console.log(this.TIP)
        //console.log(this.id)
        //console.log(i1)
        //console.log(i2)
    }
    getInfo(ambito,tipo){
        console.log("R8("+this.id+")")
        let comp = comprobeVar(this.identificador,ambito)
        if (comp.length > 0) {
            alert(comp);//Error redeclaracion
            throw new FatalError("Error de funcion variable");
        }
        VarsCode.push([this.identificador,tipo,ambito])
        this.P_ListaVar.getInfo(ambito,tipo);
    }
    examine(){
        this.P_ListaVar.examine()
    }
}
class R9{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>DefFunc>'
        this.tipo = ''
        this.identificador = ''
        this.OpenParent = ''
        this.P_Parametros = ''
        this.CloseParent = ''
        this.P_BloqFunc = ''
    }
    Print(){
        let i1 = getNewId()
        let i2 = getNewId()
        let i3 = getNewId()
        let i4 = getNewId()
        
        NODES.push({ id: this.id, label: 'R9 <DefFunc>' })
        NODES.push({ id: i1, label: this.tipo })
        NODES.push({ id: i2, label: this.identificador })
        NODES.push({ id: i3, label: this.OpenParent })
        //this.P_Parametros.Print()
        NODES.push({ id: i4, label: this.CloseParent })
        //this.P_BloqFunc.Print()
        adEdge(this.id,i1)
        adEdge(this.id,i2)
        adEdge(this.id,i3)
        adEdge(this.id,this.P_Parametros.id)
        adEdge(this.id,i4)
        adEdge(this.id,this.P_BloqFunc.id)
    }
    getInfo(){
        console.log("R9("+this.id+")")
        let Exist =  comprobeVar(this.identificador,"#")
        if (Exist.length>0) {
            alert(Exist)//Error redeclaracion
            throw new FatalError("Error de redeclaracion");
        }
        
        FunctionsCode.push([this.identificador,this.tipo,[]])
        paramFuntions.push([this.identificador,[]])
        this.P_Parametros.getInfo(this.identificador)
        this.P_BloqFunc.getInfo(this.identificador,this.tipo)
    }
    examine(){
        mostMedCode.push(this.identificador+":")
        
        this.P_Parametros.examine()
        this.P_BloqFunc.examine()
        //mostMedCode.push(this.identificador+":")
    }
}
class R10{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Parametros> '
        this.e = '/\e'
    }
    Print(){
        NODES.push({ id: this.id, label: 'R10 <Parametros> ' })
        let i1 = getNewId()
        adNode(i1,this.e)
        adEdge(this.id,i1)
    }
    getInfo(){
        console.log("R10("+this.id+")")
    }
    examine(){
        //nada
    }
}
class R11{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Parametros>'
        this.tipo = ''
        this.identificador = ''
        this.P_ListaParam = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R11 <Parametros>' })
        let i1 = getNewId()
        let i2 = getNewId()
        adNode(i1,this.tipo)
        adNode(i2,this.identificador)
        //this.P_ListaParam.Print()
        adEdge(this.id,i1)
        adEdge(this.id,i2)
        adEdge(this.id,this.P_ListaParam.id)
    }
    getInfo(ambito){
        console.log("R11("+this.id+")")
        
        let axist =  comprobeVar(this.identificador,ambito)
        if (axist.length > 0) {
            alert(axist);//Error redeclaracion
            throw new FatalError("Error de parametro variable");
        }
        VarsCode.push([this.identificador,this.tipo,ambito])
        addParamFunctions(ambito,this.identificador)
        addTipe(ambito,this.tipo)
        this.P_ListaParam.getInfo(ambito)
    }
    examine(){
        this.P_ListaParam.examine()
    }
}
class R12{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>ListaParam>'
        this.e = '/\e'
    }
    Print(){
        NODES.push({ id: this.id, label: 'R12 <ListaParam>' })
        let i1 = getNewId()
        adNode(i1,this.e)
        adEdge(this.id,i1)

    }
    getInfo(ambito){
        console.log("R12("+this.id+")")
    }
    examine(){
        
    }
}
class R13{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>ListaParam>'
        this.Com = ''
        this.tipo = ''
        this.identificador = ''
        this.P_ListaParam = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R13 <ListaParam>' })
        let i1 = getNewId()
        let i2 = getNewId()
        let i3 = getNewId()
        adNode(i1,this.Com)
        adNode(i2,this.tipo)
        adNode(i3,this.identificador)

        adEdge(this.id,i1)
        adEdge(this.id,i2)
        adEdge(this.id,i3)
        adEdge(this.id,this.P_ListaParam.id)
        //this.P_ListaParam.Print()

 
    }
    getInfo(ambito){
        console.log("R13("+this.id+")")
        let axist =  comprobeVar(this.identificador,ambito)
        if (axist.length > 0) {
            alert(axist);//Error redeclaracion
            throw new FatalError("Error de parametro variable");
        }
        VarsCode.push([this.identificador,this.tipo,ambito])
        addParamFunctions(ambito,this.identificador)
        addTipe(ambito,this.tipo)
        this.P_ListaParam.getInfo(ambito)
    }
    examine(){
        this.P_ListaParam.examine()
    }
}
class R14{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>BloqFunc>'
        this.OpenKey = ''
        this.P_DefLocales = ''
        this.CloseKey = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R14 <BloqFunc>' })
        let i1 = getNewId()
        let i2 = getNewId()
        adNode(i1,this.OpenKey)
        adEdge(this.id,i1)
        //this.P_DefLocales.Print()
        adEdge(this.id,this.P_DefLocales.id)
        adNode(i2,this.CloseKey)
        adEdge(this.id,i2)
    }
    getInfo(ambito, tipo){
        console.log("R14("+this.id+")")
        this.P_DefLocales.getInfo(ambito,tipo)
    }
    examine(){
        
        this.P_DefLocales.examine()
        mostMedCode.push("end")
    }
}
class R15{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>DefLocales>'
        this.e = '/\e'
    }
    Print(){
        NODES.push({ id: this.id, label: 'R15 <DefLocales>' })
        let i1 = getNewId()
        adNode(i1,this.e)
        adEdge(this.id,i1)
    }
    getInfo(ambito,tipo){
        console.log("R15("+this.id+")")
    }
    examine(){
        //nada
    }
}
class R16{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>DefLocales> '
        this.P_DefLocal = ''
        this.P_DefLocales = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R16 <DefLocales>' })
        //this.P_DefLocal.Print()
        //this.P_DefLocales.Print()
        adEdge(this.id,this.P_DefLocal.id)
        adEdge(this.id,this.P_DefLocales.id)
    }
    getInfo(ambito,tipo){
        console.log("R16("+this.id+")")
        this.P_DefLocal.getInfo(ambito,tipo)
        this.P_DefLocales.getInfo(ambito,tipo)

    }
    examine(){
        this.P_DefLocal.examine()
        this.P_DefLocales.examine()
    }
}
class R17{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>DefLocal>'
        this.P_DefVar = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R17 <DefLocal>' })
        //this.P_DefVar.Print()
        adEdge(this.id,this.P_DefVar.id)
    }
    getInfo(ambito,tipo){
        console.log("R17("+this.id+")")
        this.P_DefVar.getInfo(ambito)
    }
    examine(){
        this.P_DefVar.examine()
    }
}
class R18{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>DefLocal>'
        this.P_Sentencia = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R18 <DefLocal>' })
        //this.P_Sentencia.Print()
        adEdge(this.id,this.P_Sentencia.id)
    }
    getInfo(ambito,tipo){
        console.log("R18("+this.id+")")
        //alert(ambito+" "+tipo)
        this.P_Sentencia.getInfo(ambito,tipo)
    }
    examine(){
        this.P_Sentencia.examine()
    }
}
class R19{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Sentencias>'
        this.e = '/\e'
    }
    Print(){
        NODES.push({ id: this.id, label: 'R19 <Sentencias>' })
        let i1 = getNewId()
        adNode(i1,this.e)
        adEdge(this.id,i1)
    }
    getInfo(ambito){
        console.log("R19("+this.id+")")
    }
    examine(){
        //nada
    }
}
class R20{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Sentencias>'
        this.P_Sentencia = ''
        this.P_Sentencias = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R20 <Sentencias>' })
        //this.P_Sentencia.Print()
        //this.P_Sentencias.Print()
        adEdge(this.id,this.P_Sentencia.id)
        adEdge(this.id,this.P_Sentencias.id)
    }
    getInfo(ambito,tipo){
        console.log("R20("+this.id+")")
        this.P_Sentencia.getInfo(ambito,tipo)
        this.P_Sentencias.getInfo(ambito,tipo)
    }
    examine(ambito){
        this.P_Sentencia.examine(ambito)
        this.P_Sentencias.examine(ambito)
    }
}
class R21{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Sentencia>'
        this.identificador = ''
        this.equal = ''
        this.P_Expresion = ''
        this.PointAndCom = ''
    }
    Print(){
        
        NODES.push({ id: this.id, label: 'R21 <Sentencia>' })
        let i1 = getNewId()
        let i2 = getNewId()
        let i3 = getNewId()

        adNode(i1,this.identificador)
        adNode(i2,this.equal)
        //this.P_Expresion.Print()
        adNode(i3,this.PointAndCom)

        adEdge(this.id,i1)
        adEdge(this.id,i2) 
        adEdge(this.id,this.P_Expresion.id) 
        adEdge(this.id,i3)         
    }
    getInfo(ambito){
        console.log("R21("+this.id+")")
        //alert(ambito,tipo)
        //alert("21")
        let tipo = getTipe(this.identificador,ambito)
        this.P_Expresion.getInfo(ambito,tipo)
    }
    examine(){
        let insert = this.identificador +" := "
        let p_ev = this.P_Expresion.examine()
        //alert("r21: "+p_ev)
        if (p_ev.charAt(0)=='"') {
            let nt = getNewTemp()
            
            mostMedCode.push(nt + " := "+p_ev)
            p_ev = nt
        }
        insert += p_ev
        //alert(insert)
        //alert(insert)
        mostMedCode.push(insert)
    }
}
class R22{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Sentencia>'
        this.if = ''
        this.OpenParent = ''
        this.P_Expresion = ''
        this.CloseParent = ''
        this.P_SentenciaBloque = ''
        this.P_Otro = ''

    }
    Print(){
        NODES.push({ id: this.id, label: 'R22 <Sentencia>' })
        let i1 = getNewId()
        let i2 = getNewId()
        let i3 = getNewId()

        adNode(i1,this.if)
        adNode(i2,this.OpenParent)
        //this.P_Expresion.Print()
        adNode(i3,this.CloseParent)
        //this.P_SentenciaBloque.Print()
        //this.P_Otro.Print()

        adEdge(this.id,i1)
        adEdge(this.id,i2) 
        adEdge(this.id,this.P_Expresion.id) 
        adEdge(this.id,i3)      
        adEdge(this.id,this.P_SentenciaBloque.id)
        adEdge(this.id,this.P_Otro.id)   
    }
    getInfo(ambito,tipo){
        console.log("R22("+this.id+")")
        this.P_Expresion.getInfo(ambito,"all")
        this.P_SentenciaBloque.getInfo(ambito,tipo)

    }
    examine(){
        let LA = getNewTicket()
        let LS = getNewTicket()
        let Ne = getNewTicket()
        this.P_Expresion.examine(LA,LS)//ifs
        mostMedCode.push("goto "+LS)
        mostMedCode.push(LA+":")
        this.P_SentenciaBloque.examine()
        mostMedCode.push("goto "+Ne)
        mostMedCode.push(LS+":")
        this.P_Otro.examine()
        mostMedCode.push(Ne+":")
    }
}
class R23{
    constructor(){
        //alert("R23")
        this.id = ''
        this.TIP = '<h><</h>Sentencia> '
        this.while = ''
        this.OpenParent = ''
        this.P_Expresion = ''
        this.CloseParent = ''
        this.P_Bloque = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R23 <Sentencia>' })
        let i1 = getNewId()
        let i2 = getNewId()
        let i3 = getNewId()
        
        adNode(i1,this.while)
        adNode(i2,this.OpenParent)
        //this.P_Expresion.Print()
        adNode(i3,this.CloseParent)
        //this.P_Bloque.Print()

        adEdge(this.id,i1)
        adEdge(this.id,i2) 
        adEdge(this.id,this.P_Expresion.id) 
        adEdge(this.id,i3)      
        adEdge(this.id,this.P_Bloque.id)
    }
    getInfo(ambito,tipo){
        console.log("R23("+this.id+")")    
        this.P_Expresion.getInfo(ambito,"all")
        this.P_Bloque.getInfo(ambito,tipo)
    }
    examine(){
        let L = getNewTicket()
        let LA = getNewTicket()
        let LS = getNewTicket()
        
        
        
        mostMedCode.push(L+":")
        this.P_Expresion.examine(LA,LS)//ifs
        mostMedCode.push("goto "+LS)
        mostMedCode.push(LA+":")
        this.P_Bloque.examine()
        mostMedCode.push("goto "+L)
        mostMedCode.push(LS+":")
    }
    
}
class R24{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Sentencia>'
        this.return = ''
        this.P_ValorRegresa = ''
        this.PointAndCom = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R24 <Sentencia>' })
        let i1 = getNewId()
        let i2 = getNewId()

        adNode(i1,this.return)
        //this.P_ValorRegresa.Print()
        adNode(i2,this.PointAndCom)

        adEdge(this.id,i1)
        adEdge(this.id,this.P_ValorRegresa.id)
        adEdge(this.id,i2) 
    }
    getInfo(ambito,tipo){
        console.log("R24("+this.id+")")
        //alert("tipo: "+tipo)
        //alert(ambito+" "+tipo)
        this.P_ValorRegresa.getInfo(ambito,tipo)
    }
    examine(){
        let t = this.P_ValorRegresa.examine()
        mostMedCode.push("ret "+t)
        //alert("return: "+t)
    }
}
class R25{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Sentencia>'
        this.P_LlamadaFunc = ''
        this.PointAndCom = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R25 <Sentencia>' })
        let i1 = getNewId()

        //this.P_LlamadaFunc.Print()
        adNode(i1,this.PointAndCom)
      
        adEdge(this.id,this.P_LlamadaFunc.id)
        adEdge(this.id,i1) 
    }
    getInfo(ambito,tipo){
        console.log("R25("+this.id+")")
        //alert(ambito+" "+"all")
        tipo = "all"
        //ambito = "#"
        //alert("25 "+ambito+tipo+" "+this.P_LlamadaFunc.id)
        this.P_LlamadaFunc.getInfo(ambito,tipo)
    }
    examine(){
        this.P_LlamadaFunc.examine()
    }
}
class R26{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Otro> '
        this.e = '/\e'
    }
    Print(){
        NODES.push({ id: this.id, label: 'R26 <Otro> ' })
        let i1 = getNewId()
        adNode(i1,this.e)
        adEdge(this.id,i1) 
    }
    getInfo(ambito){
        console.log("R26("+this.id+")")
    }
    examine(){
        
    }
}
class R27{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Otro> '
        this.else = ''
        this.P_SentenciaBloque = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R27 <Otro>' })
        let i1 = getNewId()
        adNode(i1,this.else)
        //this.P_SentenciaBloque.Print()

        adEdge(this.id,i1)
        adEdge(this.id,this.P_SentenciaBloque.id)
    }
    getInfo(ambito){
        console.log("R27("+this.id+")")
    }
    examine(){
        this.P_SentenciaBloque.examine()
    }
}
class R28{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Bloque>'
        this.OpenKey = ''
        this.P_Sentencias = ''
        this.CloseKey = ''
    }
    Print(){
        
        NODES.push({ id: this.id, label: 'R28 <Bloque>' })
        let i1 = getNewId()
        let i2 = getNewId()

        adNode(i1,this.OpenKey)
        //this.P_Sentencias.Print()
        adNode(i2,this.CloseKey)

        adEdge(this.id,i1)
        adEdge(this.id,this.P_Sentencias.id)
        adEdge(this.id,i2)
    }
    getInfo(ambito,tipo){
        console.log("R28("+this.id+")")
        this.P_Sentencias.getInfo(ambito,tipo)
    }
    examine(ambito){
        this.P_Sentencias.examine(ambito)
    }
}
class R29{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>ValorRegresa>'
        this.e = '/\e'
    }
    Print(){
        NODES.push({ id: this.id, label: 'R29 <ValorRegresa>' })
        let i1 = getNewId()
        adNode(i1,this.e)
        adEdge(this.id,i1)
    }
    getInfo(ambito){
        console.log("R29("+this.id+")")
    }
    examine(){
        return ''
    }
}
class R30{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>ValorRegresa>'
        this.P_Expresion = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R30 <ValorRegresa>' })
        //this.P_Expresion.Print()
        adEdge(this.id,this.P_Expresion.id)
    }
    getInfo(ambito,tipo){
        //alert("30 "+ambito+tipo)
        console.log("R30("+this.id+")")
        this.P_Expresion.getInfo(ambito,tipo)
    }
    examine(){
        return this.P_Expresion.examine()
    }
}
class R31{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Argumentos> '
        this.e = '/\e'
    }
    Print(){
        NODES.push({ id: this.id, label: 'R31 <Argumentos>' })
        let i1 = getNewId()
        adNode(i1,this.e)
        adEdge(this.id,i1)
    }
    getInfo(ambito){
        console.log("R31("+this.id+")")
    }
    examine(){
        return ''
    }
}
class R32{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Argumentos>'
        this.P_Expresion = ''
        this.P_ListaArgumentos = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R32 <Argumentos>' })
        //this.P_Expresion.Print()
        //this.P_ListaArgumentos.Print()
        adEdge(this.id,this.P_Expresion.id)
        adEdge(this.id,this.P_ListaArgumentos.id)
    }
    getInfo(ambito,ar){
        //alert("32 "+ambito+tipo)
        console.log("R32("+this.id+")")

        this.P_Expresion.getInfo(ambito,ar[0])
        ar.shift()
        this.P_ListaArgumentos.getInfo(ambito,ar)
        //alert(a.length)
    }
    examine(){
        return this.P_Expresion.examine()
         +','+ this.P_ListaArgumentos.examine()
    }
    getLengt(){
        return this.P_Expresion.getLengt()+this.P_ListaArgumentos.getLengt()
    }
}
class R33{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>ListaArgumentos>'
        this.e = '/\e'
    }
    Print(){
        NODES.push({ id: this.id, label: 'R33 <ListaArgumentos>' })
        let i1 = getNewId()
        adNode(i1,this.e)
        adEdge(this.id,i1)
    }
    getInfo(ambito){
        console.log("R33("+this.id+")")
    }
    examine(){
        return ''
    }
    getLengt(){
        return 0
    }
}
class R34{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>ListaArgumentos>'
        this.Com = ''
        this.P_Expresion = ''
        this.P_ListaArgumentos = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R34 <ListaArgumentos>' })
        let i1 = getNewId()

        adNode(i1,this.Com)
        //this.P_Expresion.Print()
        //this.P_ListaArgumentos.Print()

        adEdge(this.id,i1)
        adEdge(this.id,this.P_Expresion.id)
        adEdge(this.id,this.P_ListaArgumentos.id)
        
    }
    getInfo(ambito,tipo){
        console.log("R34("+this.id+")")
        //alert(tipo)
        this.P_Expresion.getInfo(ambito,tipo[0])
        tipo.shift()
        this.P_ListaArgumentos.getInfo(ambito,tipo)

    }
    examine(){
        return this.P_Expresion.examine()+
        this.P_ListaArgumentos.examine()
    }
    getLengt(){
        return this.P_Expresion.getLengt() + this.P_ListaArgumentos.getLengt()
    }
}
class R35{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Termino>'
        this.P_LlamadaFunc = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R35 <Termino> ' })
        //this.P_LlamadaFunc.Print()
        adEdge(this.id,this.P_LlamadaFunc.id)
    }
    getInfo(ambito,tipo){
        console.log("R35("+this.id+")")
        //alert(ambito + " "+tipo)
        this.P_LlamadaFunc.getInfo(ambito,tipo)
    }
    examine(){
        let t = this.P_LlamadaFunc.examine()
        //alert("r35: "+t)
        return t
    }
}
class R36{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Termino>'
        this.identificador = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R36 <Termino>' })
        let i1 = getNewId()
        adNode(i1,this.identificador)
        adEdge(this.id,i1)
    }
    getInfo(ambito,tipo){
        console.log("R36("+this.id+")")
        let tipe = getTipe(this.identificador,ambito)
        if (tipe != tipo  && tipo!="all") {
            alert("Error de asiognacion o retorno de variable "+
            tipo +" con "+tipe)
            throw new FatalError("Error de asiognacion o retorno de variable "+
            tipo +" con "+tipe);
        }
        return tipe;
    }
    examine(no){
        if (no=="!") {
            let nt = getNewTemp()
            let insert = nt + " := "
            insert += no+this.identificador
            mostMedCode.push(insert)
            return nt
        }
        return this.identificador
    }
}
class R37{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Termino>'
        this.entero = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R37 <Termino>' })
        let i1 = getNewId()
        adNode(i1,this.entero)
        adEdge(this.id,i1)
    }
    getInfo(ambito,tipo){
        console.log("R37("+this.id+")")
        if (tipo != "int"  && tipo!="all") {
            alert("Error de asiognacion o retorno de variable "+
            tipo+" con int")
            throw new FatalError("Error de asiognacion o retorno de variable "+
            tipo+" con int");
        }
        return "int";
    }
    examine(no){
        //alert(no)
        if (no=="!") {
            let nt = getNewTemp()
            let insert = nt + " := "
            insert += no+this.entero
            mostMedCode.push(insert)
            return nt
        }
        return this.entero
    }
}
class R38{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Termino>'
        this.real = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R38 <Termino>' })
        let i1 = getNewId()
        adNode(i1,this.real)
        adEdge(this.id,i1)
    }
    getInfo(ambito,tipo){
        console.log("R38("+this.id+")")
        if (tipo != "float" && tipo!="all") {
            alert("Error de asiognacion o retorno de variable "+
            tipo +" con float")
            throw new FatalError("Error de asiognacion o retorno de variable "+
            tipo +" con float");
        }
        return "float"
    }
    examine(no){
        if (no=="!") {
            let nt = getNewTemp()
            let insert = nt + " := "
            insert += no+this.real
            mostMedCode.push(insert)
            return nt
        }
        return this.real
    }
}
class R39{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Termino>'
        this.cadena = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R39 <Termino> ' })
        let i1 = getNewId()
        adNode(i1,this.cadena)
        adEdge(this.id,i1)
    }
    getInfo(ambito,tipo){
        
        console.log("R39("+this.id+")")
        if (tipo != "string"  && tipo!="all") {
            alert("Error de asiognacion de variable")
            throw new FatalError("Error de asiognacion o retorno de variable "+
            tipo + " con string");
        }
        return "string"
    }
    examine(no){
        if (no=="!") {
            let nt = getNewTemp()
            let insert = nt + " := "
            insert += no+this.cadena
            mostMedCode.push(insert)
            return nt
        }
        return this.cadena
    }
}
class R40{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>LlamadaFunc>'
        this.identificador = ''
        this.OpenParent = ''
        this.P_Argumentos = ''
        this.CloseParent = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R40 <LlamadaFunc>' })
        let i1 = getNewId()
        let i2 = getNewId()
        let i3 = getNewId()
        
        adNode(i1,this.identificador)
        adNode(i2,this.OpenParent)
        //this.P_Argumentos.Print()
        adNode(i3,this.CloseParent)

        adEdge(this.id,i1)
        adEdge(this.id,i2) 
        adEdge(this.id,this.P_Argumentos.id) 
        adEdge(this.id,i3)      
    }
    getInfo(ambito,tipo){
        //alert("40r "+ ambito+tipo+" id"+this.id)
        console.log("R40("+this.id+")")

        let tipe = getTipe(this.identificador,"#")
        //console.log(ambito +" "+tipo)
        
        let a
        a = getArguments(this.identificador,tipe)
        //alert(ar[0])
        let ar = a.slice()
        //alert(ar[0])
        //console.log(ar)

        //console.log(tipe)
        if (tipe!=tipo && tipo!="all") {
            alert("La funcion "+this.identificador + 
                " no es de tipo " + tipo);
            throw new FatalError("Error de funcion variable");
        }
        this.P_Argumentos.getInfo(ambito,ar)

    }
    examine(){
        
        let a1 = getArguments(this.identificador)
        //#region 
        let ar = this.P_Argumentos.examine()
       
        //alert("r40: "+ar)
        //alert("40: "+ar)
        let t=""
        let tipe = getTipe(this.identificador,"#")
        let eq = ""
        if (this.identificador!="printi" && this.identificador!="prints" &&
            tipe != "void") {
            t = getNewTemp()
            eq = " := "
        } 
        //let a = ar.substring(0,ar.length-1)//antes a era en push
        //alert(ar.charAt(ar.length-1))
        if (ar.charAt(ar.length-1)==",") {
            ar = ar.substring(0,ar.length-1)
        }
        //alert("r40: "+a)
        //alert(a)
        mostMedCode.push(t+eq+this.identificador+" "+ar)
        //#endregion
        


        let a2 = this.P_Argumentos.getLengt()
        if (a1.length!=a2) {
            alert("La funcion "+this.identificador + 
                " require " + a1.length+" argumentos y pasaste "+a2);
            throw new FatalError("Error de funcion variable");
        }
        return t
        //a2.length)
    }
}
class R41{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>SentenciaBloque>'
        this.P_Sentencia = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R41 <SentenciaBloque>' })
        //this.P_Sentencia.Print()
        adEdge(this.id,this.P_Sentencia.id)
    }
    getInfo(ambito,tipo){
        console.log("R41("+this.id+")")
        this.P_Sentencia.getInfo(ambito,tipo)
    }
    examine(){
            this.P_Sentencia.examine()
    }
}
class R42{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>SentenciaBloque>'
        this.P_Bloque = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R42 <SentenciaBloque> ' })
        //this.P_Bloque.Print()
        adEdge(this.id,this.P_Bloque.id)
    }
    getInfo(ambito,tipo){
        console.log("R42("+this.id+")")
        this.P_Bloque.getInfo(ambito,tipo)
    }
    examine(){
        this.P_Bloque.examine()
    }
}
class R43{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Expresion>'
        this.OpenParent = ''
        this.P_Expresion = ''
        this.CloseParent = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R43 <Expresion>' })
        let i1 = getNewId()
        let i2 = getNewId()
        
        adNode(i1,this.OpenParent)
        //this.P_Expresion.Print()
        adNode(i2,this.CloseParent)

        adEdge(this.id,i1)
        adEdge(this.id,this.P_Expresion.id) 
        adEdge(this.id,i2) 
    }
    getInfo(ambito,tipo){
        console.log("R43("+this.id+")")
        this.P_Expresion.getInfo(ambito,tipo)
    }
    examine(){
        return this.P_Expresion.examine()
    }
}
class R44{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Expresion>'
        this.opSuma = ''
        this.P_Expresion = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R44 <Expresion>' })
        let i1 = getNewId()
        adNode(i1,this.opSuma)
        //this.P_Expresion.Print()

        adEdge(this.id,i1)
        adEdge(this.id,this.P_Expresion.id)
    }
    getInfo(ambito,tipo){
        console.log("R44("+this.id+")")
        this.P_Expresion.getInfo(ambito,tipo)
    }
    examine(){
        return this.opSuma + this.P_Expresion.examine()
    }
}
class R45{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Expresion>'
        this.opNot = ''
        this.P_Expresion = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R45 <Expresion>' })
        let i1 = getNewId()
        adNode(i1,this.opNot)
        //this.P_Expresion.Print()

        adEdge(this.id,i1)
        adEdge(this.id,this.P_Expresion.id)
    }
    getInfo(ambito,tipo){
        console.log("R45("+this.id+")")
        this.P_Expresion.getInfo(ambito,tipo)
    }
    examine(){
        return this.P_Expresion.examine(this.opNot)
    }
}
class R46{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Expresion>'
        this.P_Expresion = ''
        this.opMul = ''
        this.P_Expresion2 = ''

    }
    Print(){
        NODES.push({ id: this.id, label: 'R46 <Expresion>' })
        let i1 = getNewId()

        //this.P_Expresion.Print()
        adNode(i1,this.opMul)
        //this.P_Expresion2.Print()

        adEdge(this.id,this.P_Expresion.id)
        adEdge(this.id,i1)
        adEdge(this.id,this.P_Expresion2.id)
    }
    getInfo(ambito,tipo){
        console.log("R46("+this.id+")")
        this.P_Expresion.getInfo(ambito,tipo)
        this.P_Expresion2.getInfo(ambito,tipo)
    }
    examine(no){
        let ticket = getNewTemp()
        let insert = ticket+" := "
        insert += this.P_Expresion.examine("")
        insert += this.opMul
        insert += this.P_Expresion2.examine("")
        mostMedCode.push(insert)
        return ticket
    }
}
class R47{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Expresion>'
        this.P_Expresion = ''
        this.opSuma = ''
        this.P_Expresion2 = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R47 <Expresion>' })
        let i1 = getNewId()

        //this.P_Expresion.Print()
        adNode(i1,this.opSuma)
        //this.P_Expresion2.Print()

        adEdge(this.id,this.P_Expresion.id)
        adEdge(this.id,i1)
        adEdge(this.id,this.P_Expresion2.id)
    }
    getInfo(ambito,tipo){
        console.log("R47("+this.id+")")
        this.P_Expresion.getInfo(ambito,tipo)
        this.P_Expresion2.getInfo(ambito,tipo)
    }
    examine(){
        let ticket = getNewTemp()
        let insert = ticket+" := "
        insert += this.P_Expresion.examine("")
        insert += this.opSuma
        insert += this.P_Expresion2.examine("")
        mostMedCode.push(insert)
        return ticket
    }
}
class R48{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Expresion> '
        this.P_Expresion = ''
        this.opRelac = ''
        this.P_Expresion2 = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R48 <Expresion> ' })
        let i1 = getNewId()

        //this.P_Expresion.Print()
        adNode(i1,this.opRelac)
        //this.P_Expresion2.Print()

        adEdge(this.id,this.P_Expresion.id)
        adEdge(this.id,i1)
        adEdge(this.id,this.P_Expresion2.id)
    }
    getInfo(ambito,tipo){
        console.log("R48("+this.id+")")
        this.P_Expresion.getInfo(ambito,tipo)
        this.P_Expresion2.getInfo(ambito,tipo)
    }
    examine(L){
        let insert = "if("
        insert += this.P_Expresion.examine("")
        insert += this.opRelac
        insert += this.P_Expresion2.examine("")
        insert += ")"
        insert += " goto "+L
        mostMedCode.push(insert)
    }
}
class R49{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Expresion>'
        this.P_Expresion = ''
        this.opIgualdad = ''
        this.P_Expresion2 = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R49 <Expresion> ' })
        let i1 = getNewId()

        //this.P_Expresion.Print()
        adNode(i1,this.opIgualdad)
        //this.P_Expresion2.Print()

        adEdge(this.id,this.P_Expresion.id)
        adEdge(this.id,i1)
        adEdge(this.id,this.P_Expresion2.id)
    }
    getInfo(ambito,tipo){
        console.log("R49("+this.id+")")
        let v1 = this.P_Expresion.getInfo(ambito,tipo)
        let v2 = this.P_Expresion2.getInfo(ambito,tipo)
        if(v1 != v2){
            alert("Error de comparacion de tipos " + v1 + " " + v2)
            throw new FatalError("Error de comparacion de tipos");
        }

    }
    examine(L){
        let insert = "if("
        insert += this.P_Expresion.examine("")
        insert += this.opIgualdad
        insert += this.P_Expresion2.examine("")
        insert += ")"
        insert += " goto "+L
        mostMedCode.push(insert)
    }
}
class R50{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Expresion>'
        this.P_Expresion = ''
        this.opAnd = ''
        this.P_Expresion2 = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R50 <Expresion>' })
        let i1 = getNewId()

        //this.P_Expresion.Print()
        adNode(i1,this.opAnd)
        //this.P_Expresion2.Print()

        adEdge(this.id,this.P_Expresion.id)
        adEdge(this.id,i1)
        adEdge(this.id,this.P_Expresion2.id)
    }
    getInfo(ambito,tipo){
        console.log("R50("+this.id+")")
        this.P_Expresion.getInfo(ambito,tipo)
        this.P_Expresion2.getInfo(ambito,tipo)
    }
    examine(L,NL){
        let eS = getNewTicket()
        this.P_Expresion.examine(eS,NL)
        mostMedCode.push("goto "+NL)
        mostMedCode.push(eS+":")
        this.P_Expresion2.examine(L,NL)

    }
}
class R51{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Expresion> '
        this.P_Expresion = ''
        this.opOr = ''
        this.P_Expresion2 = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R51 <Expresion>' })
        let i1 = getNewId()

        //this.P_Expresion.Print()
        adNode(i1,this.opOr)
        //this.P_Expresion2.Print()

        adEdge(this.id,this.P_Expresion.id)
        adEdge(this.id,i1)
        adEdge(this.id,this.P_Expresion2.id)
    }
    getInfo(ambito,tipo){
        console.log("R51("+this.id+")")
        this.P_Expresion.getInfo(ambito,tipo)
        this.P_Expresion2.getInfo(ambito,tipo)
    }
    examine(L,NT){
        
        let nt = getNewTicket()
        this.P_Expresion.examine(L,NT)
        mostMedCode.push("goto "+nt)
        mostMedCode.push(nt+":")
        this.P_Expresion2.examine(L,NT)
    }
}
class R52{
    constructor(){
        this.id = ''
        this.TIP = '<h><</h>Expresion>'
        this.P_Termino = ''
    }
    Print(){
        NODES.push({ id: this.id, label: 'R52 <Expresion>' })
        //this.P_Termino.Print()
        adEdge(this.id,this.P_Termino.id)
    }
    getInfo(ambito,tipo){
        console.log("R52("+this.id+")")
        //console.log(ambito+" "+tipo)
        //alert("52"+ambito + " "+ tipo)
        //alert(tipo+" "+ambito)

        return  this.P_Termino.getInfo(ambito,tipo)

    }
    examine(no){
        return this.P_Termino.examine(no)
    }
    getLengt(){
        return 1
    }
}
//#endregion


class Gramatic{
    constructor(arrayLexico){
        this.arrayLexico = arrayLexico
        this.matrixLR = matrixLR
        this.ER = []
        this.PR = []
        this.ObjP = []
    }
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
   getNum(){
    let arr = []
    let i=0;
    while (i<this.arrayLexico.length) {
        //console.log(this.arrayLexico[i][1])
        arr.push(this.arrayLexico[i][1])
        i++
    }
    return arr
   }
   executePop(pila,param,value,valueR){
    let i=0;
    while (i<param) {
        this.PR.pop()
        pila.pop()
        i++
    }
    let y = pila[pila.length-1]
    let newCoordenada = matrixLR[y][value]
    //alert(valueR.TIP)
    this.PR.push(valueR)
    this.PR.push(newCoordenada)
    pila.push(value)
    pila.push(newCoordenada)
   }
   getString(){
    let i=0;
    let ret = []
    while (i<this.arrayLexico.length) {
        ret.push(this.arrayLexico[i][2])
        i++
    }
    return ret
   }

   getCodes(){
    let i = 0;
    let R=''
    while (i<this.PR.length) {
        if(typeof(this.PR[i])=='object'){
            
            R+=this.PR[i].TIP
        }
        else{
            R+=this.PR[i]
        }
            
        i++
    }
    //alert(R)
    return R;
   }
   asignReality(coordenada){
        tableSintacticoR +='<tr class="rowlr"><th class="rowlr">'+this.getCodes()+
                    '</th><th class="rowlr">'+this.dropCom(this.ER) + '</th><th class="rowlr">'+
                    coordenada+'</th></tr>'
   }

//#region Funciones

//#endregion

    executeSum(){
        //#region Declarate of the vars
        let pila = []
        let entrada = this.getNum()
        entrada.push(23)
        pila.push(23)
        pila.push(0)
        let salida = []
        let i = 0;//borar
        tableSintactico+='<table id="lr">'+
            '<tr class="sintact"><th class="sintact">Pila</th><th class="sintact">Entrada</th>'+
            '<th class="sintact">Salida'+'</th></tr>'
            //let j=0
            tableSintacticoR+='<table id="outrf">'+
            '<tr class="LRTytle"><th class="LRTytle">Pila</th><th class="LRTytle">Entrada</th>'+
            '<th class="LRTytle">Salida'+'</th></tr>'
        //#endregion
        this.PR.push("$")
        this.PR.push("0")
        this.ER = this.getString()
        this.ER.push("$")
        
        this.ObjP.push("$")
        this.ObjP.push("0")
        //#region Regex
        let Reg0 = new R0()
        let Reg1 = new R1()
        let Reg2 = new R2()
        let Reg3 = new R3()
        let Reg4 = new R4()
        let Reg5 = new R5()
        let Reg6 = new R6()
        let Reg7 = new R7()
        let Reg8 = new R8()
        let Reg9 = new R9()
        let Reg10 = new R10()
        let Reg11 = new R11()
        let Reg12 = new R12()
        let Reg13 = new R13()
        let Reg14 = new R14()
        let Reg15 = new R15()
        let Reg16 = new R16()
        let Reg17 = new R17()
        let Reg18 = new R18()
        let Reg19 = new R19()
        let Reg20 = new R20()
        let Reg21 = new R21()
        let Reg22 = new R22()
        let Reg23 = new R23()
        let Reg24 = new R24()
        let Reg25 = new R25()
        let Reg26 = new R26()
        let Reg27 = new R27()
        let Reg28 = new R28()
        let Reg29 = new R29()
        let Reg30 = new R30()
        let Reg31 = new R31()
        let Reg32 = new R32()
        let Reg33 = new R33()
        let Reg34 = new R34()
        let Reg35 = new R35()
        let Reg36 = new R36()
        let Reg37 = new R37()
        let Reg38 = new R38()
        let Reg39 = new R39()
        let Reg40 = new R40()
        let Reg41 = new R41()
        let Reg42 = new R42()
        let Reg43 = new R43()
        let Reg44 = new R44()
        let Reg45 = new R45()
        let Reg46 = new R46()
        let Reg47 = new R47()
        let Reg48 = new R48()
        let Reg49 = new R49()
        let Reg50 = new R50()
        let Reg51 = new R51()
        let Reg52 = new R52()
        //#endregion
        let pilaRegex = []
        let ArrayRegex = []
        //alert(entrada)
        //alert(this.ER)
        FunctionsCode.push(["prints",'string',[]])
        addTipe("prints","string")
        FunctionsCode.push(["printi",'int',[]])
        addTipe("printi","int")
        // let a = getArguments("prints","string")
        // let ar = a.slice()
        // //alert(ar[0])
        // console.log(ar)
        while (true) {
            let y = pila[pila.length-1]
            //let yR = this.PR[this.PR.length-1]
            let x = entrada[0]
            
            let xR = this.ER[0]
            
            //console.log(y+" -- "+x + " = "+pila)
            let coordenada = matrixLR[y][x]
            //console.log(coordenada)
            //console.log(pila)
            

            tableSintactico +='<tr class="rowlr"><th class="rowlr">'+pila+
                            '</th><th class="rowlr">'+ entrada + '</th><th class="rowlr">'+
                            coordenada+'</th></tr>'
            //console.log("Pila: "+pila)
            //console.log("Entrada: "+entrada)
            //console.log(x+','+y+":"+coordenada) 
            if (coordenada == undefined) {
                //alert("r21")
                alert("Error")
                throw new FatalError("Error en la tabla");
            }else

            switch (coordenada.charAt(0)) {
                //#region Reductions
                case 'r':
                    switch (coordenada) {
                        case "r0":
                            Reg0 = new R0()
                            NODES = []
                            EDGES = []
                            Reg0.id = getNewId()
                            Reg0.Aceptado = this.PR[2]
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg0)
                            this.executePop(pila,0,'',Reg0)
                            
                            /*
                            tableSintacticoR +='<tr class="rowlr"><th class="rowlr">'+this.dropCom(this.PR)+
                            '</th><th class="rowlr">'+this.dropCom(this.ER) + '</th><th class="rowlr">'+
                            coordenada+'</th></tr>'*/
                            console.log("Programa correcto"+this.PR.length)
                            // let i=0
                            // while (i<idsRestricted.length) {
                            //     console.log(idsRestricted[i])
                            //     i++;
                            // }
                            this.PR[4].getInfo()
                            this.PR[4].examine()
                            let indexa = 0;
                            //alert(ArrayRegex.length)
                            while (indexa<ArrayRegex.length) {
                                ArrayRegex[indexa].Print()
                                indexa++
                            }
                            PintGraf(NODES,EDGES)
                            executeFunctions() 
                            executeVars()
                            executeMedCode()
                            executeEnsambler()
                            return
                        case 'r1':
                            Reg1 = new R1()
                            Reg1.id = getNewId()
                            Reg1.Definiciones = this.PR[this.PR.length-2]
                            coordenada = 'R1 <h><</h>programa> ::= <h><</h>Definiciones> '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg1)
                            this.executePop(pila,2,24,Reg1)
                            break;
                        case 'r2':
                            Reg2 = new R2()
                            Reg2.id = getNewId()
                            getNewId()
                            coordenada = 'R2 <h><</h>Definiciones> ::= /\e'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg2)
                            this.executePop(pila,0,25,Reg2)
                            break;
                        case 'r3':
                            Reg3 = new R3()
                            Reg3.id = getNewId()
                            Reg3.Definicion = this.PR[this.PR.length-4]
                            Reg3.Definiciones = this.PR[this.PR.length-2]
                            coordenada = 'R3 <h><</h>Definiciones> ::= <h><</h>Definicion> <h><</h>Definiciones>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg3)
                            this.executePop(pila,4,25,Reg3)
                            break;
                        case 'r4':
                            Reg4 = new R4()
                            Reg4.id = getNewId()
                            Reg4.DefVar = this.PR[this.PR.length-2]
                            coordenada = 'R4 <h><</h>Definicion> ::= <h><</h>DefVar>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg4)
                            this.executePop(pila,2,26,Reg4)
                            break;
                        case 'r5':
                            Reg5 = new R5()
                            Reg5.id = getNewId()
                            Reg5.DefFunc = this.PR[this.PR.length-2]
                            coordenada = 'R5 <h><</h>Definicion> ::= <h><</h>DefFunc> '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg5)
                            this.executePop(pila,2,26,Reg5)
                            break;
                        case 'r6':
                            Reg6 = new R6()
                            Reg6.id = getNewId()

                            Reg6.tipo = this.PR[this.PR.length-8]
                            Reg6.identificador = this.PR[this.PR.length-6]
                            Reg6.ListaVar = this.PR[this.PR.length-4]
                            Reg6.PointAndCom = this.PR[this.PR.length-2]
                            //alert(R6.tipo)
                            //pilaRegex.push(R6)
                            coordenada = 'R6 <h><</h>DefVar> ::= tipo identificador <h><</h>ListaVar> ;'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg6)
                            this.executePop(pila,8,27,Reg6)
                            break;
                        case 'r7':
                            //pilaRegex.push(R7)
                            //alert(Reg7.TIP)
                            Reg7 = new R7()
                            Reg7.id = getNewId()
                            coordenada = 'R7 <h><</h>ListaVar> ::= /\e '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg7)
                            this.executePop(pila,0,28,Reg7)
                            break;
                        case 'r8':
                            Reg8 = new R8()
                            Reg8.id = getNewId()
                            Reg8.Com = this.PR[this.PR.length-6]
                            Reg8.identificador = this.PR[this.PR.length-4]
                            Reg8.P_ListaVar = this.PR[this.PR.length-2]

                            coordenada = 'R8 <h><</h>ListaVar> ::= , identificador <h><</h>ListaVar>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg8)
                            this.executePop(pila,6,28,Reg8)
                            break;
                        case 'r9':
                            Reg9 = new R9()
                            Reg9.id = getNewId()

                            Reg9.tipo = this.PR[this.PR.length-12]
                            Reg9.identificador = this.PR[this.PR.length-10]
                            Reg9.OpenParent = this.PR[this.PR.length-8]
                            Reg9.P_Parametros = this.PR[this.PR.length-6]
                            Reg9.CloseParent = this.PR[this.PR.length-4]
                            Reg9.P_BloqFunc = this.PR[this.PR.length-2]

                            coordenada = 'R9 <h><</h>DefFunc> ::= tipo identificador ( <h><</h>Parametros> ) <h><</h>BloqFunc>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg9)
                            this.executePop(pila,12,29,Reg9)
                            break;
                        case 'r10':
                            Reg10 = new R10()
                            Reg10.id = getNewId()
                            coordenada = 'R10 <h><</h>Parametros> ::= /\e'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg10)
                            this.executePop(pila,0,30,Reg10)
                            break;
                        case 'r11':
                            Reg11 = new R11()
                            Reg11.id = getNewId()

                            Reg11.tipo = this.PR[this.PR.length-6]
                            Reg11.identificador = this.PR[this.PR.length-4]
                            Reg11.P_ListaParam = this.PR[this.PR.length-2]

                            coordenada = 'R11 <h><</h>Parametros> ::= tipo identificador <h><</h>ListaParam>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg11)
                            this.executePop(pila,6,30,Reg11)
                            break;
                        case 'r12':
                            Reg12 = new R12()
                            Reg12.id = getNewId()
                            coordenada = 'R12 <h><</h>ListaParam> ::= /\e '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg12)
                            this.executePop(pila,0,31,Reg12)
                            break;
                        case 'r13':
                            Reg13 = new R13()
                            Reg13.id = getNewId()

                            Reg13.Com = this.PR[this.PR.length-8]
                            Reg13.tipo = this.PR[this.PR.length-6]
                            Reg13.identificador = this.PR[this.PR.length-4]
                            Reg13.P_ListaParam = this.PR[this.PR.length-2]

                            coordenada = 'R13 <h><</h>ListaParam> ::= , tipo identificador <h><</h>ListaParam>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg13)
                            this.executePop(pila,8,31,Reg13)
                            break; 
                        case 'r14':
                            Reg14 = new R14()
                            Reg14.id = getNewId()

                            Reg14.OpenKey = this.PR[this.PR.length-6]
                            Reg14.P_DefLocales = this.PR[this.PR.length-4]
                            Reg14.CloseKey = this.PR[this.PR.length-2]

                            coordenada = 'R14 <h><</h>BloqFunc> ::= { <h><</h>DefLocales> } '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg14)
                            this.executePop(pila,6,32,Reg14)
                            break; 
                        case 'r15':
                            Reg15 = new R15()
                            Reg15.id = getNewId()
                            coordenada = 'R15 <h><</h>DefLocales> ::= /\e'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg15)
                            this.executePop(pila,0,33,Reg15)
                            break;
                        case 'r16':
                            Reg16 = new R16()
                            Reg16.id = getNewId()

                            Reg16.P_DefLocal = this.PR[this.PR.length-4]
                            Reg16.P_DefLocales = this.PR[this.PR.length-2]

                            coordenada = 'R16 <h><</h>DefLocales> ::= <h><</h>DefLocal> <h><</h>DefLocales>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg16)
                            this.executePop(pila,4,33,Reg16)
                            break;
                        case 'r17':
                            Reg17 = new R17()
                            Reg17.id = getNewId()

                            Reg17.P_DefVar = this.PR[this.PR.length-2]

                            coordenada = 'R17 <h><</h>DefLocal> ::= <h><</h>DefVar>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg17)
                            this.executePop(pila,2,34,Reg17)
                            break;
                        case 'r18':
                            Reg18 = new R18()
                            Reg18.id = getNewId()

                            Reg18.P_Sentencia = this.PR[this.PR.length-2]

                            coordenada = 'R18 <h><</h>DefLocal> ::= <h><</h>Sentencia>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg18)
                            this.executePop(pila,2,34,Reg18)
                            break; 
                        case 'r19':
                            Reg19 = new R19()
                            Reg19.id = getNewId()
                            coordenada = 'R19 <h><</h>Sentencias> ::= /\e'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg19)
                            this.executePop(pila,0,35,Reg19)
                            break;
                        case 'r20':
                            Reg20 = new R20()
                            Reg20.id = getNewId()

                            Reg20.P_Sentencia = this.PR[this.PR.length-4]
                            Reg20.P_Sentencias = this.PR[this.PR.length-2]

                            coordenada = 'R20 <h><</h>Sentencias> ::= <h><</h>Sentencia> <h><</h>Sentencias>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg20)
                            this.executePop(pila,4,35,Reg20)
                            break;
                        case 'r21':
                            Reg21 = new R21()
                            Reg21.id = getNewId()

                            Reg21.identificador = this.PR[this.PR.length-8]
                            Reg21.equal = this.PR[this.PR.length-6]
                            Reg21.P_Expresion = this.PR[this.PR.length-4]
                            Reg21.PointAndCom = this.PR[this.PR.length-2]

                            coordenada = 'R21 <h><</h>Sentencia> ::= identificador = <h><</h>Expresion> ;'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg21)
                            this.executePop(pila,8,36,Reg21)
                            break;
                        case 'r22':
                            Reg22 = new R22()
                            Reg22.id = getNewId()

                            Reg22.if = this.PR[this.PR.length-12]
                            Reg22.OpenParent = this.PR[this.PR.length-10]
                            Reg22.P_Expresion = this.PR[this.PR.length-8]
                            Reg22.CloseParent = this.PR[this.PR.length-6]
                            Reg22.P_SentenciaBloque = this.PR[this.PR.length-4]
                            Reg22.P_Otro = this.PR[this.PR.length-2]

                            coordenada = 'R22 <h><</h>Sentencia> ::= if ( <h><</h>Expresion> ) <h><</h>SentenciaBloque> <h><</h>Otro>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg22)
                            this.executePop(pila,12,36,Reg22)
                            break;
                        case 'r23':
                            Reg23 = new R23()
                            Reg23.id = getNewId()

                            Reg23.while = this.PR[this.PR.length-10]
                            Reg23.OpenParent = this.PR[this.PR.length-8]
                            Reg23.P_Expresion = this.PR[this.PR.length-6]
                            Reg23.CloseParent = this.PR[this.PR.length-4]
                            Reg23.P_Bloque = this.PR[this.PR.length-2]

                            coordenada = 'R23 <h><</h>Sentencia> ::= while ( <h><</h>Expresion> ) <h><</h>Bloque> '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg23)
                            this.executePop(pila,10,36,Reg23)
                            break;
                        case 'r24':
                            Reg24 = new R24()
                            Reg24.id = getNewId()

                            Reg24.return = this.PR[this.PR.length-6]
                            Reg24.P_ValorRegresa = this.PR[this.PR.length-4]
                            Reg24.PointAndCom = this.PR[this.PR.length-2]

                            coordenada = 'R24 <h><</h>Sentencia> ::= return <h><</h>ValorRegresa> ;'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg24)
                            this.executePop(pila,6,36,Reg24)
                            break;
                        case 'r25':
                            Reg25 = new R25()
                            Reg25.id = getNewId()

                            Reg25.P_LlamadaFunc = this.PR[this.PR.length-4]
                            Reg25.PointAndCom = this.PR[this.PR.length-2]

                            coordenada = 'R25 <h><</h>Sentencia> ::= <h><</h>LlamadaFunc> ;'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg25)
                            this.executePop(pila,4,36,Reg25)
                            break;
                        case 'r26':
                            Reg26 = new R26()
                            Reg26.id = getNewId()
                            coordenada = 'R26 <h><</h>Otro> ::= /\e'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg26)
                            this.executePop(pila,0,37,Reg26)
                            break;
                        case 'r27':
                            Reg27 = new R27()
                            Reg27.id = getNewId()

                            Reg27.else = this.PR[this.PR.length-4]
                            Reg27.P_SentenciaBloque = this.PR[this.PR.length-2]

                            coordenada = 'R27 <h><</h>Otro> ::= else <h><</h>SentenciaBloque> '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg27)
                            this.executePop(pila,4,37,Reg27)
                            break;
                        case 'r28':
                            Reg28 = new R28()
                            Reg28.id = getNewId()

                            Reg28.OpenKey = this.PR[this.PR.length-6]
                            Reg28.P_Sentencias = this.PR[this.PR.length-4]
                            Reg28.CloseKey = this.PR[this.PR.length-2]

                            coordenada = 'R28 <h><</h>Bloque> ::= { <h><</h>Sentencias> } '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg28)
                            this.executePop(pila,6,38,Reg28)
                            break;
                        case 'r29':
                            Reg29 = new R29()
                            Reg29.id = getNewId()
                            coordenada = 'R29 <h><</h>ValorRegresa> ::= /\e'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg29)
                            this.executePop(pila,0,39,Reg29)
                            break;
                        case 'r30':
                            Reg30 = new R30()
                            Reg30.id = getNewId()

                            Reg30.P_Expresion = this.PR[this.PR.length-2]

                            coordenada = 'R30 <h><</h>ValorRegresa> ::= <h><</h>Expresion>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg30)
                            this.executePop(pila,2,39,Reg30)
                            break;
                        case 'r31':
                            Reg31 = new R31()
                            Reg31.id = getNewId()
                            coordenada = 'R31 <h><</h>Argumentos> ::= /\e '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg31)
                            this.executePop(pila,0,40,Reg31)
                            break;
                        case 'r32':
                            Reg32 = new R32()
                            Reg32.id = getNewId()

                            Reg32.P_Expresion = this.PR[this.PR.length-4]
                            Reg32.P_ListaArgumentos = this.PR[this.PR.length-2]

                            coordenada = 'R32 <h><</h>Argumentos> ::= <h><</h>Expresion> <h><</h>ListaArgumentos>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg32)
                            this.executePop(pila,4,40,Reg32)
                            break;
                        case 'r33':
                            Reg33 = new R33()
                            Reg33.id = getNewId()
                            coordenada = 'R33 <h><</h>ListaArgumentos> ::= /\e'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg33)
                            this.executePop(pila,0,41,Reg33)
                            break;
                        case 'r34':
                            Reg34 = new R34()
                            Reg34.id = getNewId()

                            Reg34.Com = this.PR[this.PR.length-6]
                            Reg34.P_Expresion = this.PR[this.PR.length-4]
                            Reg34.P_ListaArgumentos = this.PR[this.PR.length-2]

                            coordenada = 'R34 <h><</h>ListaArgumentos> ::= , <h><</h>Expresion> <h><</h>ListaArgumentos>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg34)
                            this.executePop(pila,6,41,Reg34)
                            break;
                        case 'r35':
                            Reg35 = new R35()
                            Reg35.id = getNewId()

                            Reg35.P_LlamadaFunc = this.PR[this.PR.length-2]

                            coordenada = 'R35 <h><</h>Termino> ::= <h><</h>LlamadaFunc>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg35)
                            this.executePop(pila,2,42,Reg35)
                            break;
                        case 'r36':
                            Reg36 = new R36()
                            Reg36.id = getNewId()

                            Reg36.identificador = this.PR[this.PR.length-2]
                            
                            coordenada = 'R36 <h><</h>Termino> ::= identificador '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg36)
                            this.executePop(pila,2,42,Reg36)
                            break;
                        case 'r37':
                            Reg37 = new R37()
                            Reg37.id = getNewId()

                            Reg37.entero = this.PR[this.PR.length-2]

                            coordenada = 'R37 <h><</h>Termino> ::= entero '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg37)
                            this.executePop(pila,2,42,Reg37)
                            break;
                        case 'r38':
                            Reg38 = new R38()
                            Reg38.id = getNewId()

                            Reg38.real = this.PR[this.PR.length-2]
                            
                            coordenada = 'R38 <h><</h>Termino> ::= real'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg38)
                            this.executePop(pila,2,42,Reg38)    
                            break;
                        case 'r39':
                            Reg39 = new R39()
                            Reg39.id = getNewId()

                            Reg39.cadena = this.PR[this.PR.length-2]

                            coordenada = 'R39 <h><</h>Termino> ::= cadena'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg39)
                            this.executePop(pila,2,42,Reg39)
                            break;
                        case 'r40':
                            Reg40 = new R40()
                            Reg40.id = getNewId()

                            Reg40.identificador = this.PR[this.PR.length-8]
                            Reg40.OpenParent = this.PR[this.PR.length-6]
                            Reg40.P_Argumentos = this.PR[this.PR.length-4]
                            Reg40.CloseParent = this.PR[this.PR.length-2]

                            coordenada = 'R40 <h><</h>LlamadaFunc> ::= identificador ( <h><</h>Argumentos> )'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg40)
                            this.executePop(pila,8,43,Reg40)
                            break;
                        case 'r41':
                            Reg41 = new R41()
                            Reg41.id = getNewId()

                            Reg41.P_Sentencia = this.PR[this.PR.length-2]

                            coordenada = 'R41 <h><</h>SentenciaBloque> ::= <h><</h>Sentencia>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg41)
                            this.executePop(pila,2,44,Reg41)
                            break;
                        case 'r42':
                            Reg42 = new R42()
                            Reg42.id = getNewId()

                            Reg42.P_Bloque = this.PR[this.PR.length-2]

                            coordenada = 'R42 <h><</h>SentenciaBloque> ::= <h><</h>Bloque> '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg42)
                            this.executePop(pila,2,44,Reg42)
                            break;
                        case 'r43':
                            Reg43 = new R43()
                            Reg43.id = getNewId()

                            Reg43.OpenParent = this.PR[this.PR.length-6]
                            Reg43.P_Expresion = this.PR[this.PR.length-4]
                            Reg43.CloseParent = this.PR[this.PR.length-2]

                            coordenada = 'R43 <h><</h>Expresion> ::= ( <h><</h>Expresion> )'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg43)
                            this.executePop(pila,6,45,Reg43)
                            break;
                        case 'r44':
                            Reg44 = new R44()
                            Reg44.id = getNewId()

                            Reg44.opSuma = this.PR[this.PR.length-4]
                            Reg44.P_Expresion = this.PR[this.PR.length-2]

                            coordenada = 'R44 <h><</h>Expresion> ::= opSuma <h><</h>Expresion>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg44)
                            this.executePop(pila,4,45,Reg44)
                            break;
                        case 'r45':
                            Reg45 = new R45()
                            Reg45.id = getNewId()

                            Reg45.opNot = this.PR[this.PR.length-4]
                            Reg45.P_Expresion = this.PR[this.PR.length-2]

                            coordenada = 'R45 <h><</h>Expresion> ::= opNot <h><</h>Expresion>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg45)
                            this.executePop(pila,4,45,Reg45)
                            break;
                        case 'r46':
                            Reg46 = new R46()
                            Reg46.id = getNewId()

                            Reg46.P_Expresion = this.PR[this.PR.length-6]
                            Reg46.opMul = this.PR[this.PR.length-4]
                            Reg46.P_Expresion2 = this.PR[this.PR.length-2]

                            coordenada = 'R46 <h><</h>Expresion> ::= <h><</h>Expresion> opMul <h><</h>Expresion>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg46)
                            this.executePop(pila,6,45,Reg46)
                            break;
                        case 'r47':
                            Reg47 = new R47()
                            Reg47.id = getNewId()

                            Reg47.P_Expresion = this.PR[this.PR.length-6]
                            Reg47.opSuma = this.PR[this.PR.length-4]
                            Reg47.P_Expresion2 = this.PR[this.PR.length-2]

                            coordenada = 'R47 <h><</h>Expresion> ::= <h><</h>Expresion> opSuma <h><</h>Expresion> '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg47)
                            this.executePop(pila,6,45,Reg47)
                            break;
                        case 'r48':
                            Reg48 = new R48()
                            Reg48.id = getNewId()

                            Reg48.P_Expresion = this.PR[this.PR.length-6]
                            Reg48.opRelac = this.PR[this.PR.length-4]
                            Reg48.P_Expresion2 = this.PR[this.PR.length-2]

                            coordenada = 'R48 <h><</h>Expresion> ::= <h><</h>Expresion> opRelac <h><</h>Expresion>'
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg48)
                            this.executePop(pila,6,45,Reg48)
                            break;
                        case 'r49':
                            Reg49 = new R49()
                            Reg49.id = getNewId()

                            Reg49.P_Expresion = this.PR[this.PR.length-6]
                            Reg49.opIgualdad = this.PR[this.PR.length-4]
                            Reg49.P_Expresion2 = this.PR[this.PR.length-2]

                            coordenada = 'R49 <h><</h>Expresion> ::= <h><</h>Expresion> opIgualdad <h><</h>Expresion> '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg49)
                            this.executePop(pila,6,45,Reg49)
                            break;
                        case 'r50':
                            Reg50 = new R50()
                            Reg50.id = getNewId()

                            Reg50.P_Expresion = this.PR[this.PR.length-6]
                            Reg50.opAnd = this.PR[this.PR.length-4]
                            Reg50.P_Expresion2 = this.PR[this.PR.length-2]

                            coordenada = 'R50 <h><</h>Expresion> ::= <h><</h>Expresion> opAnd <h><</h>Expresion> '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg50)
                            this.executePop(pila,6,45,Reg50)
                            break;
                        case 'r51':
                            Reg51 = new R51()
                            Reg51.id = getNewId()

                            Reg51.P_Expresion = this.PR[this.PR.length-6]
                            Reg51.opOr = this.PR[this.PR.length-4]
                            Reg51.P_Expresion2 = this.PR[this.PR.length-2]

                            coordenada = 'R51 <h><</h>Expresion> ::= <h><</h>Expresion> opOr <h><</h>Expresion> '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg51)
                            this.executePop(pila,6,45,Reg51)
                            break;
                        case 'r52':
                            Reg52 = new R52()
                            Reg52.id = getNewId()

                            Reg52.P_Termino = this.PR[this.PR.length-2]

                            coordenada = 'R52 <h><</h>Expresion> ::= <h><</h>Termino> '
                            this.asignReality(coordenada)
                            ArrayRegex.push(Reg52)
                            this.executePop(pila,2,45,Reg52)
                            break;
                        default:
                            break;
                    }
                    break;
                //#endregion
                case 'd':
                    tableSintacticoR +='<tr class="rowlr"><th class="rowlr">'+this.getCodes()+
                            '</th><th class="rowlr">'+this.dropCom(this.ER) + '</th><th class="rowlr">'+
                            coordenada+'</th></tr>'
                    let numE = coordenada.substring(1,coordenada.length)
                    
                    this.PR.push(xR)
                    pila.push(x)
                    this.PR.push(numE)
                    pila.push(numE)
                    this.ER.shift()
                    entrada.shift()
                    //console.log(coordenada)
                    break;
                default:
                    // if (!num.test(coordenada.charAt(0))) {//
                    //     console.log("Error")
                    //     return
                    // }
                    alert("Error en el analisis")
                    throw new FatalError("Error de analisis");
                    

                    break;
            }
            
            i++
            salida.push(coordenada)
            if (i==999) {
                break;
            }

        }
        
    }
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
        //alert(this.lexico)
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
                this.lexico.push(["tipo",4,"string"])
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
    exp_arit(){
        this.preanalisis = this.input.charAt(this.actual);
        if (simbol.test(this.preanalisis)) {
            //alert("Simbol")
            this.lexico.push(["opSuma",5,this.preanalisis])
            //console.log(this.preanalisis)
            this.actual++;
            let temp = this.preanalisis;
            let eas=this.expresion_arit();
            //alert("expresion_arit: "+eas)
            let eam=this.exp_arit();
            //console.log("exp_arit simbol: "+temp+eam + eas);
            return temp+eam + eas;
        }
        else if(operation.test(this.preanalisis)){
            this.actual++;
            this.lexico.push(["opMul",6,this.preanalisis])
            //console.log(this.preanalisis)
            let temp = this.preanalisis;
            let eas=this.expresion_arit();
            //console.log("tengo mi esxpresio arit: "+eas)
            let eam=this.exp_arit();
            //console.log("exp_arit operation: eam: "+eam +" temp: "+temp+"eas: "+ eas)
            return eam +temp+ eas ;
        }
        else
            return "";
    }
    expresion_arit(){
        try{
            this.preanalisis = this.input.charAt(this.actual);
            //alert(this.preanalisis)
            //alert("expresion aritmetica")
            //console.log("que es: "+this.preanalisis)
            // if (tipo == "string") {
            if (this.preanalisis == "!") {
                this.lexico.push(["opNot",10,this.preanalisis])
                this.actual++
                return this.expresion_arit()

            }
                if (this.preanalisis=="'" || this.preanalisis=='"') {
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
                this.lexico.push(["string",3,'"'+returnCad+'"'])
                this.actual++
                return returnCad + this.exp_arit()
            }
            let tem;
            if (this.preanalisis=="("){
                //console.log("es un parentesis "+this.preanalisis)
                let op = this.exopparent();
                let ea = this.expresion_arit();
                return op+ea+this.exclosarent()+this.exp_arit();
            }
            else if (num.test(this.preanalisis)){
                //console.log("es un numero "+this.preanalisis)
                let n = this.numeros();
                //alert("estos en numero: ")
                let e = this.exp_arit();
                // if(!numf.test(n) && tipo == "float")
                //         tipo = "int"
                // if(!this.exist([tipo,n])){
                    
                //     this.matrix.push([tipo,n])
                // }
                    
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

                if (tem.length>0/*this.exist([tipo,tem])*/){
                    //console.log("es un un id "+this.preanalisis)
                    
                    let id  =  this.identificador();
                    this.lexico.push(["identificador",0,id])
                    //alert("llamada a funcion: "+id+" "+this.input.charAt(this.actual))
                    //alert(this.input.charAt(this.actual))
                    if (this.input.charAt(this.actual)=="(") {
                        
                        this.lexico.push(["(",14,"("])
                        this.actual++
                        if (this.input.charAt(this.actual)!=")"){
                            while (this.input.charAt(this.actual)!=")") {
                                //let tip = this.tipo()
                                //let identifier = this.identificador()
                                //alert(identifier)
                                //this.lexico.push(["identificador",0,identifier])
                                this.expresion_arit()
                                let ac = this.input.charAt(this.actual)
                                //alert(tip + " " + identifier)
                                if (ac == ",") {
                                    this.lexico.push([',',13,','])
                                    //alert(ac)
                                    this.actual++
                                }
                            }
                            //alert(this.input.charAt(this.actual))
            
                            //this.expresion_arit()
                        }
                        this.exclosarent();
                        //alert("sali")
                    }
                    //console.log(id)
                    let ea=this.exp_arit();
                    //alert("id")
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
                /*if (this.exist(["float",tem])) {
                    error =  tem + " es un tipo de dato float no compatible con int";
                    throw error; 
                }*/


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

    asignar(){
        try{
            // let ida = this.identificador();
            let ida = this.getIsString()

            ida = this.input.charAt(this.actual+ida.length)
            //alert(ida)
            //alert("temporal "+ida)
           if (ida== "(") {
            return this.expresion_arit()
           }
            //console.log(ida)
            //alert("Asignar: "+ida)
            // if (!this.exist([tipo,ida])) {
            //    error = "La variable "+ida+" de tipo " + tipo + " no existe";
            //     throw error;
            // }
            ida = this.identificador();
            this.lexico.push(["identificador",0,ida])
            this.preanalisis  = this.input.substring(this.actual,this.actual+1);
            if (this.preanalisis=="=") {
                
                //console.log("=")
                this.lexico.push(["=",18,"="])
                this.actual++;
                let temp = this.preanalisis;
                
                let ea = this.expresion_arit();
                //alert("Equal")
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
                
                let or = this.ordenes(false);
                //alert(this.input.charAt(this.actual))
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
    numeros(){
        try{
            this.preanalisis = this.input.charAt(this.actual);
            let tem  = this.getNumber();
            //alert("numeros: "+tem)
            // if (numf.test(tem) && tipo == "int") {
            //     error = "No se puede asignar un float a int, " + tem + " es un numero real";
            //     throw error;
            // }
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
            //alert(temp)

            if (num.test(this.preanalisis)) { 
                    //alert(temp + "Numero")
                return this.numeros();
            }
            else
            if (temp.length>0/*this.exist(["int",temp]) || this.exist(["float",temp])*/) {
                //alert(temp + "String")
                temp = this.identificador();
                this.lexico.push(["identificador",0,temp])
                //console.log(temp)
                return temp;
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

    sig_condicion(one){
        let temend  = this.input.substring(this.actual,this.actual+1);
        let temelse  = this.input.substring(this.actual,this.actual+6);
        let telseSi =  this.input.substring(this.actual,this.actual+4);
        let telseCo = this.input.substring(this.actual,this.actual+5);
        
        try{
            if (telseCo=="else{") {
                //alert(telseCo)
                this.actual += 5

                this.lexico.push(["else",22,"else"])
                this.lexico.push(["{",16,"{"])
                //alert(this.input.charAt(this.actual))
                this.ordenes(false)
                //alert(this.input.charAt(this.actual))
                this.sig_condicion(false)
                this.input = this.input.replaceAt(this.actual, ';');
                return this.actual
            }
            if (telseSi=="else") {
                this.lexico.push(["else",22,"else"])
                this.actual += 4
                this.sig_ordenes()
                this.actual -- 
                this.input = this.input.replaceAt(this.actual, ';');
                return 1;
            }else
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
                    this.ordenes(false)
                    this.sig_condicion(false)
                    //this.input = this.input.replaceAt(this.actual, ';');
                    return temelse
                
            }
            if(telseCo=="}else"){
                this.lexico.push(["}",17,"}"])
                this.lexico.push(["else",22,"else"])
                //console.log("}else{")
                //alert("else ok")
                //this.matrixTree.push("goto L"+(this.ticket+2)+";");
                //this.matrixTree.push("L"+
                //this.isElse=false;(this.ticket+1)+":");
                //this.ticket++;
                //this.isElse=true;
                //alert(this.isElse)
                this.actual+=5;
                this.ordenes(false)
                this.actual -- 
                this.input = this.input.replaceAt(this.actual, ';');
                return temelse
            
        }
            else

                if (temend=="}" && !one){
                    this.lexico.push(["}",17,"}"])
                    
                    
                    temend = this.end();
                    //console.log("}")
                    return temend;

                }
                //alert("termino condicion "+temelse)
            this.actual --
            return ""
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

                let clp = this.exclosarent();
                this.matrixTree.push("if("+op+cp+clp+") goto L"+this.ticket+";");
                this.ticket++;
                this.matrixTree.push("goto L"+this.ticket+";");
                this.matrixTree.push("L"+(this.ticket-1)+":");
                let temp=this.ticket;
                this.ticket++;
                let ord
                let one = false
                if (this.input.charAt(this.actual) == "{") {
                    this.lexico.push(["{",16,"{"])
                    this.actual ++;
                    ord = this.ordenes(false);
                    //console.log("{")
                    
                }else{
                    //alert("orden " + this.input.charAt(this.actual))
                    ord = this.ordenes(true)
                    one = true
                }
                    
            
                this.preanalisis = this.input.charAt(this.actual);
                //alert(this.input.substring(this.actual,(this.actual+4)))
                let endTicket=-1;
                if(this.input.substring(this.actual,(this.actual+4))=="}else"){
                    endTicket=(temp+1);
                    this.matrixTree.push("goto L"+(temp+1)+";");
                    this.matrixTree.push("L"+temp+":");
                }
                //alert(this.input.charAt(this.actual))
                let sc = this.sig_condicion(one); 
                if (endTicket!=-1) {
                    this.matrixTree.push("L"+endTicket+":");
                }
                else{
                    this.matrixTree.push("L"+temp+":");
                }
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
            //alert(tempasignar)
            //alert(tempasignar)
            /*
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
            }*/
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
                    //alert ('declaracion')
                    //alert(tempint)
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
                    let t1 = this.expresion_arit();
                    //alert(t1)

                    return  t1;
                }else if (tempasignar.length>0) {
                    
                    let as = this.asignar();
                    //alert("asignar")
                    this.preanalisis = this.input.charAt(this.actual);
                    return as;
                }
                
                else{
                    //alert(tempif)
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
            || tempasignar.length>0//this.exist(["int",tempasignar])||this.exist(["float",tempasignar])|| this.exist(["string",tempasignar])
            ||tempwhile == "float"|| isInt == "int" || tempReturn == "string" ) {
            //console.log("Orden por: " + tempwhile)
            //console.log(this.matrix)
            
            let o = this.orden()
            //alert("Sigorden")
            //alert(o)
            let p = this.puntoComa()
            let s = this.sig_ordenes();
            
            return o+p+s//this.orden()+this.puntoComa()+this.sig_ordenes();
        }
        else
            return "";
    }
    ordenes(unique){
        let or = this.orden();
        

        let pC = this.puntoComa();
        
        if(unique)
            return or
        let SO = this.sig_ordenes();
        //alert("ok ordenes")
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
    sig_lista_variables(){
        this.preanalisis = this.input.charAt(this.actual);
        if (this.preanalisis==","){
            this.lexico.push([",",13,","])
            //console.log(",")
            this.actual++;
            return this.preanalisis + this.lista_variables();
        }
        else if(!letra.test(this.preanalisis) && this.preanalisis !=";"){
            error = "El caracter "+this.preanalisis + " no es valido como parte de un identificador";
            throw error
        }

        else
            return "";
    }
    lista_variables(){
        try{
            let ide = this.identificador();
            ///alert(ide)
            /*if (this.exist(["int",ide]) || this.exist(["float",ide]) || this.exist(["string",ide])) {
                error = "Redeclaracion del identificador "+ide;
                throw error;
            }else*/ if(this.restrict(ide)){
                error = "Palabra reservada "+ide;
                throw error;
            }else{
                this.lexico.push(["identificador",0,ide])
                //console.log(ide)
                //this.matrix.push([t,ide])
            }
            let slv = this.sig_lista_variables();
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
       // alert(t)
        let temp = this.getIsString();
        //alert(temp)
        if (letra.test(temp.charAt(0)) && 
        this.input.charAt(this.actual+temp.length)=="("){
            
            this.lexico.push(["identificador",0,temp])
            this.lexico.push(["(",14,"("])

            this.actual = this.actual+temp.length+1;
            if (this.input.charAt(this.actual)!=")"){
                while (this.input.charAt(this.actual)!=")") {
                    let tip = this.tipo()
                    let identifier = this.identificador()
                    this.lexico.push(["identificador",0,identifier])
                    let ac = this.input.charAt(this.actual)
                    //alert(tip + " " + identifier)
                    if (ac == ",") {
                        this.lexico.push([',',13,','])
                        //alert(ac)
                        this.actual++
                    }
                }
                //alert(this.input.charAt(this.actual))

                //this.expresion_arit()
            }
                
                //this.lista_variables()
            this.exclosarent();
            
            if (this.input.charAt(this.actual)=="{") {
                this.lexico.push(["{",16,"{"])
                this.actual++
                
                this.ordenes()
                //alert("ok ordenes")
                
                
            }else{
                this.ExecError();
                throw new FatalError("Abre una llave para la funcion");
            }
            
            let i = this.end()
            this.pointCReplace = true;
            this.lexico.push(["}",17,"}"])
            
            this.input = this.input.replaceAt(this.actual, ';');
            //alert(this.input.charAt(this.actual))
            //alert(this.input.substring(this.actual,this.actual+1))

            return i
        }else{
        let lv = this.lista_variables(t);
        return t+lv;
    }}

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
                //alert(rest_term)
                //let end = this.input.substring(this.actual,this.input.length);
                
                // if (end!="}") {
                //     //alert(end);
                //     error = "Error en el programa final end";
                //     throw error;
                // }
                
                //return fact+g+rest_term;
                //alert(this.lexico)
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
//#region 
            table='';
            table3='';
            tableLexico = '';
            //tableLR = '';
            tableSintactico = ''
            tableSintacticoR = ''
            //matrixLR = []
            NODES = []
            EDGES = []
            idsRestricted = []  
            tempsTickets = []
            temmpsTemps = []
            FunctionsCode = []
            mostMedCode = []
            VarsCode = []
            error ="error";
//#endregion

    document.getElementById('output').innerHTML= "";
    text = await file.text();
    document.getElementById('out').textContent = text;
    //alert(text)
  }
function example1(param1) {
    table='';
    table3='';
    tableLexico = '';
    //tableLR = '';
    tableSintactico = ''
    tableSintacticoR = ''
    //matrixLR = []
    NODES = []
    EDGES = []
    idsRestricted = []  
    tempsTickets = []
    temmpsTemps = []
    FunctionsCode = []
    mostMedCode = []
    VarsCode = []
    error ="error";
//#endregion

    document.getElementById('output').innerHTML= "";
switch (param1) {
    case 1:
        text= 'int i;\n'+
        'int suma(int p1, int p2){\n'+
        '    return p1 + 5;\n'+
        '}\n\n'+
        
        'int main(){\n'+
        '    int r1,r2, res;\n'+
        '    r1 = 1;\n'+
        '    r2 = 2;\n'+
        '    res = suma(r1,r2);\n'+
        '    printi(res);\n'+
        '    return 0;\n'+
        '    }\n';
        break;
    case 2:
        text = 'int main(){'+
        '\nstring s;'+
            '\nint i;'+
            '\ns = "hola mundo";'+
            '\nprints(s);'+
            '\ns = "Izmael Guzman Murguia";'+
            '\ni=0;'+
            '\nprints(s);'+
            '\nwhile(i<9){'+
            '\nprinti(i);'+
                '\nif(i==5)'+
                '\ni=9;'+
                    '\nelse'+
                '\ni = i+1;'+
                    '\n}'+
            '\ns = "ya sali del buble";'+
            '\nprints(s);'+
            '\nprinti(i);'+
            '\nreturn 0;'+
            '\n}'
        break
    case 3:
        text = 'int main(){'+
        '\nint i,i2;'+
            '\ni = 2*(8-2*(6/3))-4;'+
            '\nprinti(i);'+
            '\nreturn 0;\n}'
        break
    default:
        break;
}

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
    //alert(tableSintacticoR)
    
    document.getElementById('tree').innerHTML=tableLexico;
    document.getElementById('output').innerHTML= 
        "<img src='ok.png' alt='' class='notify' width='40px'srcset=''>Programa correcto"//"Programa correcto ;)";//' '+valc;
    // alert(table)

    // Default export is a4 paper, portrait, using millimeters for units

}
//#region buttons
let dT = false
function displayTree() {
    if (dT==false){
        document.getElementById("tree").style.cssText = "transition-duration:1s; display: inline-block;"
        document.getElementsByClassName("imgdesp")[0].style.cssText = "transform: rotate(180deg);"
        
    }
    else{
        document.getElementById("tree").style.display = "none"
        document.getElementsByClassName("imgdesp")[0].style.cssText = "transform: rotate(0deg);"
    }
        
    dT = !dT
}
let dLR= true
function displayLR() {
    if (dLR==false){
        document.getElementById("lr").style.cssText = "display: inline-block;"
        document.getElementsByClassName("imgdesp")[1].style.cssText = "transform: rotate(180deg);"
        
    }
    else{
        document.getElementById("lr").style.display = "none"
        document.getElementsByClassName("imgdesp")[1].style.cssText = "transform: rotate(0deg);"
    }
        
    dLR = !dLR
}
displayLR()
let dInt= true
function displayInt() {
    if (dInt==false){
        document.getElementById("outputlr").style.cssText = "display: inline-block;"
        document.getElementsByClassName("imgdesp")[2].style.cssText = "transform: rotate(180deg);"
        
    }
    else{
        document.getElementById("outputlr").style.display = "none"
        document.getElementsByClassName("imgdesp")[2].style.cssText = "transform: rotate(0deg);"
    }
        
    dInt = !dInt
}
displayInt()

let dStr= true
function displayString() {
    //alert("Presionaste string")
    if (dStr==false){
        document.getElementById("outrf").style.cssText = "display: inline-block;"
        document.getElementsByClassName("imgdesp")[3].style.cssText = "transform: rotate(180deg);"
        
    }
    else{
        document.getElementById("outrf").style.display = "none"
        document.getElementsByClassName("imgdesp")[3].style.cssText = "transform: rotate(0deg);"
    }
        
    dStr = !dStr
}
displayString()



let dGraph= false
function displayGraph() {
    if (dGraph==false){
        document.getElementById("mynetwork").style.cssText = "display: inline-block;"
        document.getElementsByClassName("imgdesp")[4].style.cssText = "transform: rotate(180deg);"
        
    }
    else{
        document.getElementById("mynetwork").style.display = "none"
        document.getElementsByClassName("imgdesp")[4].style.cssText = "transform: rotate(0deg);"
    }
        
    dGraph = !dGraph
}

let dV= true
function displayVars() {
    if (dV==false){
        document.getElementById("vars").style.cssText = "display: inline-block;"
        document.getElementsByClassName("imgdesp")[5].style.cssText = "transform: rotate(180deg);"
        
    }
    else{
        document.getElementById("vars").style.display = "none"
        document.getElementsByClassName("imgdesp")[5].style.cssText = "transform: rotate(0deg);"
    }
        
    dV = !dV
}
displayVars()
let dF= true
function displayFunction() {
    if (dF==false){
        document.getElementById("functions").style.cssText = "display: inline-block;"
        document.getElementsByClassName("imgdesp")[6].style.cssText = "transform: rotate(180deg);"
        
    }
    else{
        document.getElementById("functions").style.display = "none"
        document.getElementsByClassName("imgdesp")[6].style.cssText = "transform: rotate(0deg);"
    }
        
    dF = !dF
}
displayFunction()
let dMC= true
function displayMedCode() {
    if (dMC==false){
        document.getElementById("InterCode").style.cssText = "display: inline-block;"
        document.getElementsByClassName("imgdesp")[7].style.cssText = "transform: rotate(180deg);"
        
    }
    else{
        document.getElementById("InterCode").style.display = "none"
        document.getElementsByClassName("imgdesp")[7].style.cssText = "transform: rotate(0deg);"
    }
        
    dMC = !dMC
}
displayMedCode()

let dSam= true
function displaySambler() {
    if (dSam==false){
        document.getElementById("Ensambler").style.cssText = "display: inline-block;"
        document.getElementsByClassName("imgdesp")[8].style.cssText = "transform: rotate(180deg);"
        
    }
    else{
        document.getElementById("Ensambler").style.display = "none"
        document.getElementsByClassName("imgdesp")[8].style.cssText = "transform: rotate(0deg);"
    }
        
    dSam = !dSam
}
displaySambler()
//#endregion

