

class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime()); // Programação defensiva;
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }
  get data(){
    return new Date(this._data.getTime()); // Programação defensiva
  }
  get quantidade(){
    return this._quantidade;
  }
  get valor(){
    return this._valor;
  }
  get volume(){
    return this._quantidade * this. _valor;
  }
}
// Teste Programação defensiva
/*var hoje = new Date();

var n1 = new Negociacao(hoje, 5, 700);

console.log(n1.data);

hoje.setDate(11);*/
