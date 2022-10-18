;rm provated.asm && nasm -f elf64 -o code.o code.asm && ld -m elf_x86_64 -o code --entry=main code.o && ./code && mv code.asm $PWD/provated.asm
;nasm -f elf64 -o code.o code.asm && ld -m elf_x86_64 -o code --entry=main code.o && ./code
;Creado por: Izmael Guzman Murguia.
;Materia: Seminario de solucion de prioblemas de traductores de lenguajes II.
;Maestro: Michel Emanuel Lopez Franco.

%macro prints 2
mov eax, 4;escribit
mov ebx, 1;imprimir
mov ecx, %1;mensaje
mov edx, %2;Puntero
int 0x80
%endmacro

%macro printi 1
mov edx,%1
add edx, 48
mov [_tmp_],edx
mov ecx,_tmp_
mov edx,1
mov eax, 4;escribit
mov ebx, 1;imprimir
int 0x80
%endmacro

section .bss

main_s_ resb 35;variable no inicializada string s
main_i resb 1 ;variable no inicializada int i

;Variables auxiliares
_tmp_ resb 1; variable auxiliar para imprimri mensajes

;Variables remporales
_t3 resb 1

SECTION .data
_ln_ db 0xa,0xd ;variable para salto de linea 
__ln_ equ $-_ln_
_t1 db "hola mundo                         "

_t2 db "Izmael Guzman Murguia              "

_t4 db "ya sali del buble                  "


SECTION .text
global main ; make label available to linker as invoked by gcc
main:

cld
mov ecx, 35
mov esi, _t1
mov edi, main_s_
.ciclo0:
lodsb
stosb
loop .ciclo0


 prints main_s_,35
prints _ln_,__ln_


cld
mov ecx, 35
mov esi, _t2
mov edi, main_s_
.ciclo1:
lodsb
stosb
loop .ciclo1

mov [main_i],byte 0

 prints main_s_,35
prints _ln_,__ln_


L1:


cmp byte [main_i],9
jl L2
jmp L3

L2:


mov edx, [main_i]
printi edx
prints _ln_,__ln_


cmp byte [main_i],5
je L4
jmp L5

L4:

mov [main_i],byte 9
jmp L6

L5:

mov eax, [main_i]
mov ebx, 1
add eax, ebx
mov [_t3],eax

mov eax, [_t3]
mov [main_i],eax

L6:

jmp L1

L3:


cld
mov ecx, 35
mov esi, _t4
mov edi, main_s_
.ciclo2:
lodsb
stosb
loop .ciclo2


 prints main_s_,35
prints _ln_,__ln_


mov edx, [main_i]
printi edx
prints _ln_,__ln_

mov eax, 0
ret



mov ebx,0 ; exit code, 0=normal
mov eax,1 ; exit command to kernel
int 0x80  ; interrupt 80 hex, call kernel
ret  ; salida
