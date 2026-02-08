// Função que busca e desenha a tabela
async function carregarProdutos() {
    try {
        // Faz a requisição ao backend (GET)
        const response = await fetch('http://localhost:3000/products');
        
        // Converte a resposta para JSON
        const produtos = await response.json();
        
        const tabela = document.getElementById('tabela-corpo');
        tabela.innerHTML = ''; // Limpa antes de preencher

        // Para cada produto recebido, cria uma linha na tabela
        produtos.forEach(produto => {
            const linha = document.createElement('tr');
            
            linha.innerHTML = `
                <td>${produto.name}</td>
                <td>R$ ${produto.price}</td>
                <td>${produto.category}</td>
                <td>${produto.description}</td>
            `;
            
            tabela.appendChild(linha);
        });
    } catch (error) {
        console.error('Erro ao buscar:', error);
        alert('Não foi possível carregar os produtos.');
    }
}

// Chama a função assim que a página carrega
carregarProdutos();