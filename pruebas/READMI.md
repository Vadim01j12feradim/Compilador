nasm -f elf64 -o code.o code.asm
ld -m elf_x86_64 -o code --entry=main code.o
./code

//////////////
nasm -felf64 hola.asm && gcc hola.o && ./a.out
/////////////////
nasm -f elf printf-test.asm && gcc -m32 -o printf-test printf-test.o
//////////////////////////////////
nasm -f elf64 helloLM.asm
gcc -no-pie helloLM.o -o helloLM
./helloM


///////////////////////////////////
wine MASM.EXE file.asm && wine LINK.EXE FILE.OBJ && wine FILE.EXE
//////////////////////////////////
nasm -f elf64 -o code.o code.asm
ld -m elf_i386 -o code --entry=main code.o
./code
//////////////////////////////// probes code
nasm -f elf64 -o hello.o hello.asm && ld -m elf_64 -o hello hello.o && ./hello

;pop rax ;increnetyna 8 bits
mov byte[i],2
;mov rax, qword[i]
mov byte[i1],5
EAX VALOR DE REGRESOP ENB RET


////////////////////////////
        push ebp
        mov ebp, esp

        call prn
        add esp, 4

        xor eax,eax
        
        
        mov esp, ebp
        pop ebp
        ret
//////////////////////////////////
nasm -f elf hello.asm && gcc hello.o -o hello -m32  && ./hello