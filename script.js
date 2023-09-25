
class Produto {
    constructor(){
    this.id = 1;
    this.arrayProdutos = [];
    }

    adicionar(){
        let produto = this.lerDados()
        if(this.validar(produto) == true) {
            this.Salvar(produto)
        }
        this.Listar()
        this.cancelar()
    }

    lerDados(){
        let produto={}
        
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('pdnome').value
        produto.precoProduto = document.getElementById('preco').value
    
        return produto
    }   

    validar(produto){
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += 'Por favor digite o nome do produto \n'
        }
        
        if(produto.precoProduto == ''){
            msg += 'Por favor digite o valor do produto \n'
        }
        
        if(msg != ''){
            alert(msg)
            return false
        }

        return true
    }

    Salvar(produto){
        this.arrayProdutos.push(produto)
        this.id++
    }

    Listar(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''
        for(let i = 0 ; i < this.arrayProdutos.length; i++){
            // Inserindo uma variável que é uma coluna //

            let tr = tbody.insertRow();

            // Inserindo váriáveis para cada uma das celular dessa coluna
            // com base na quantidade de informações que deve ser adicionadas 

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del= tr.insertCell();

            // Aqui, o laço adiciona cada uma das informações com base no
            // índice do produto dentro do array "Produtos" e sua identificação

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;
            let imagem = document.createElement('img')
            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProdutos[i].id+")")
            imagem.src = 'del.png'
            td_del.appendChild(imagem)
        }
    }

    cancelar(){
        document.getElementById('pdnome').value = ''
        document.getElementById('preco').value = ''
    }

    Deletar(id){
        let tbody = document.getElementById('tbody')
        for ( let i = 0; i < this.arrayProdutos.length; i++ ){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
            }       
        alert('O item foi apagado com sucesso')
        }
    }
}

var produto = new Produto();
