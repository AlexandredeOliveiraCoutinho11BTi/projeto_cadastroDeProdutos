const formulario = document.getElementById('formProduto');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede a página de recarregar

    // Pega os dados dos inputs
    const dadosProduto = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        category: document.getElementById('category').value,
        description: document.getElementById('description').value
    };

    // Envia para o Backend
    try {
        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosProduto)
        });

        if (response.ok) {
            alert('Produto cadastrado com sucesso!');
            formulario.reset(); // Limpa os campos
        } else {
            alert('Erro ao cadastrar produto.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro de conexão com o servidor.');
    }
});