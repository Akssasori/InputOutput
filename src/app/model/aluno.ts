export class Aluno{

    id: number;
    nome: string;
    disciplina: string;
    nota1: number;
    nota2: number;
    media : number;

    constructor(id ?: number, nome?: string, disciplina?: string, nota1?:number, nota2?: number){
        this.id = id;
        this.nome = nome;
        this.disciplina = disciplina;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.media = (+this.nota1 + +this.nota2)/2;

    }

    public calcularMedia(){
        this.media = (+this.nota1 + +this.nota2)/2;
        return this;
    }


}