class NegociacaoController {
    constructor() {

          let $ = document.querySelector.bind(document);

          this._inputData = $('#data');
          this._inputQuantidade =  $('#quantidade');
          this._inputValor = $('#valor');
}

    adiciona(event){
        event.preventDefault();

        let data = new Date(
               ...this._inputData.value
                      .split('-')
                      .map((item, indice) => item - indice % 2)
           );

       let negociacao = new Negociacao(
           data,
           this._inputQuantidade.value,
           this._inputValor.value
         );
         this.limpaCampo();
         console.log(negociacao);
    }
    limpaCampo(){
        this._inputData.value  ='';
        this._inputValor.value = 0;
        this._inputQuantidade.value = 1;
        this._inputData.focus();
    }

}
