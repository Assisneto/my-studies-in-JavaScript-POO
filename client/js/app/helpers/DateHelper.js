class DateHelper {
    constructor() {
        throw new Error('Você não pode criar uma instância dessa classe');
    }
    static dataforstring(data){
        return (`${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`);
    }
    static stringfordata(texto){
        /\d{4}-\d{2}-\d{2}/.test(texto)
        return new Date(texto.split("-").map((item, indice) => item - indice % 2));
    }
}
