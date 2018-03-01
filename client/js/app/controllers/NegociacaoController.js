class NegociacaoController {
    constructor() {

          let $ = document.querySelector.bind(document);

          this._inputData = $('#data');
          this._inputQuantidade =  $('#quantidade');
          this._inputValor = $('#valor');
          this._negociacoes = new ListaNegociacoes();
}

    adiciona(event){
        event.preventDefault();
        this._criaNegociacao();
        this.limpaCampo();
    }
    limpaCampo(){
        this._inputData.value  ='';
        this._inputValor.value = 0;
        this._inputQuantidade.value = 1;
        this._inputData.focus();
    }
    _criaNegociacao(){
        let data = new Date(DateHelper.stringfordata(this._inputData.value));
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
          );
          this._negociacoes.adiciona(negociacao);
          console.log(this._negociacoes);
          console.log(negociacao);

    }

}
