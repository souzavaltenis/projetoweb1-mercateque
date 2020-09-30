/*
==========================================================
Função responsável por adicionar produtos para comprar
na página
==========================================================
*/

function teste(qtd, categoria) {

    /*
    ==========================================================
    Dados dos produtos
    ==========================================================
    */
    
        ftCarrinho = "../assets/img/shopping-cart-y.png";
    
        notebook = {
            title: 'Notebook Samsung X40',
            img: '../assets/img/notebooks/1.png',
            price: 4499.99
        }
    
        smartphone = {
            title: 'Xiaomi Redmi Note 8',
            img: '../assets/img/celulares/1.png',
            price: 3204.91
        }
    
        teclado = {
            title: 'Teclado Gamer Razer Mini',
            img: '../assets/img/teclados/1.png',
            price: 1112.45
        }
    
        mouse = {
            title: 'Mouse Razer DeathAdder',
            img: '../assets/img/mouses/1.png',
            price: 7325.64
        }
    
        televisor = {
            title: 'Smart Tv Samsung 55',
            img: '../assets/img/televisores/1.png',
            price: 1274.79
        }
    
        //Retira o ../ dos paths caso esteja no index
        if(getPage() == '' || getPage() == 'index.html'){
            ftCarrinho = ftCarrinho.substring(3);
            notebook.img = notebook.img.substring(3);
            smartphone.img = smartphone.img.substring(3);
            teclado.img = teclado.img.substring(3);
            mouse.img = mouse.img.substring(3);
            televisor.img = televisor.img.substring(3);
        }
    
    /*
    ==========================================================
    Insere as divs dos produtos de acordo com a quantidade
    passada como parâmetro
    ==========================================================
    */
    
    
        for (i = 0; i < qtd; i++) {
    
            item = document.createElement('div');
    
            layout = document.getElementById('container-products');
            layout.appendChild(item);
            html = '';
    
            switch (categoria) {
                case 'Notebooks':
    
                    html =
                        `<div class="item">\n` +
                        `<img src=${notebook.img} style="width: 15vh;" alt="notebook">\n` +
                        `<p>${notebook.title}</p>\n` +
                        '<div id="bottom-details">\n' +
                        `<p>R$ ${notebook.price}</p>\n` +
                        `<img src=${ftCarrinho} onclick="comprar('Notebook');" alt="comprar">\n` +
                        '</div>\n' +
                        '</div>\n';
                    break;
    
                case 'Smartphones':
                    html =
                        `<div class="item">\n` +
                        `<img src=${smartphone.img} alt="celular">\n` +
                        `<p>${smartphone.title}</p>\n` +
                        '<div id="bottom-details">\n' +
                        `<p>R$ ${smartphone.price}</p>\n` +
                        `<img src=${ftCarrinho} onclick="comprar('Smartphone');" alt="comprar">\n` +
                        '</div>\n' +
                        '</div>\n';
                    break;
    
                case 'Teclados':
                    html =
                        `<div class="item">\n` +
                        `<img src=${teclado.img} style="width: 15vh; height: 9vh;" alt="celular">\n` +
                        `<p>${teclado.title}</p>\n` +
                        '<div id="bottom-details">\n' +
                        `<p>R$ ${teclado.price}</p>\n` +
                        `<img src=${ftCarrinho} onclick="comprar('Teclado');" alt="comprar">\n` +
                        '</div>\n' +
                        '</div>\n';
                    break;
    
                case 'Mouses':
                    html =
                        `<div class="item">\n` +
                        `<img src=${mouse.img} alt="celular">\n` +
                        `<p>${mouse.title}</p>\n` +
                        '<div id="bottom-details">\n' +
                        `<p>R$ ${mouse.price}</p>\n` +
                        `<img src=${ftCarrinho} onclick="comprar('Mouse');" alt="comprar">\n` +
                        '</div>\n' +
                        '</div>\n';
                    break;
    
                case 'Televisores':
                    html =
                        `<div class="item">\n` +
                        `<img src=${televisor.img} style="width: 15vh; height: 12vh;" alt="celular">\n` +
                        `<p>${televisor.title}</p>\n` +
                        '<div id="bottom-details">\n' +
                        `<p>R$ ${televisor.price}</p>\n` +
                        `<img src=${ftCarrinho} onclick="comprar('Televisor');" alt="comprar">\n` +
                        '</div>\n' +
                        '</div>\n';
                    break;
            }
    
    
            item.innerHTML = html;
        }
    
    }
    
    /*
    ==========================================================
    Lógica para iniciar os dados da página index.html
    ==========================================================
    */
    
    function productsTops() {
    
        automaticSlider();
    
        teste(1, 'Notebooks');
        teste(1, 'Smartphones');
        teste(1, 'Teclados');
        teste(1, 'Mouses');
        teste(1, 'Televisores');
    }
    
    
    /*
    ==========================================================
    Lógica para add item no carrinho
    ==========================================================
    */
    
    data_to_save = '_data_carrinho_mercateque_'; //chave para recuperar e salvar dados
    
    carrinho = []; //local onde será guardado os produtos do carrinho
    
    function comprar(item) {

        switch (item) {
            case 'Notebook': carrinho.push(notebook); break;
            case 'Smartphone': carrinho.push(smartphone); break;
            case 'Teclado': carrinho.push(teclado); break;
            case 'Mouse': carrinho.push(mouse); break;
            case 'Televisor': carrinho.push(televisor); break;
        }
    
        setQtdCarrinho();
    }
    
    function setQtdCarrinho() {
    
        qtdProdutosCarrinho = getNonNulls().length;
    
        h1Qtd = document.getElementById('qtdItens');
    
        if(qtdProdutosCarrinho != 0){
            h1Qtd.style.display = "block"
            h1Qtd.innerHTML = qtdProdutosCarrinho;
        }else{
            h1Qtd.style.display = "none"
        }
    
    }
    
    
    function initData() {
        preencherProdutos();
    }
    
    /*
    ==========================================================
    Retorna o arquivo html atual
    ==========================================================
    */
    
    function getPage(){
        return window.location.pathname.split("/").pop();
    }
    
    /*
    ==========================================================
    Inicia os dados de acordo com cada página
    ==========================================================
    */
    
    function preencherProdutos() {
    
        page = getPage();
    
        if (localStorage.hasOwnProperty(data_to_save)) {
            JSON.parse(localStorage.getItem(data_to_save)).forEach(item => {
                carrinho.push(item);
            })
        }
    
        switch (page) {
            case '':
            case 'index.html': productsTops(); break;
            case 'notebooks.html': teste(30, 'Notebooks'); changeFooterBackground('ft1.png'); break;
            case 'celulares.html': teste(30, 'Smartphones'); changeFooterBackground('ft2.png'); break;
            case 'teclados.html': teste(30, 'Teclados'); changeFooterBackground('ft3.png'); break;
            case 'mouses.html': teste(30, 'Mouses'); changeFooterBackground('ft4.png'); break;
            case 'televisores.html': teste(30, 'Televisores'); changeFooterBackground('ft5.png'); break;
            case 'carrinho.html': addItensCarrinho(); break;
        }
    
        setQtdCarrinho();
    }

    /*
    ==========================================================
    Altera a imagem de fundo do footer
    ==========================================================
    */

    function changeFooterBackground(img){
        document.getElementById('footer').style.backgroundImage = `url(../assets/backgrounds/${img})`;
    }
    
    /*
    ==========================================================
    Lógica de alterar as figuras do slider
    ==========================================================
    */
    
    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
    
        pageAtual = getPage();
    
        if (pageAtual == 'index.html' || pageAtual == '') {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }
    
    /*
    ==========================================================
    Lógica para não mudar automaticamente as imagens do slider
    ==========================================================
    */
    
    isPause = false;
    
    function setPause(value) {
        isPause = value;
    }
    
    /*
    ==========================================================
    Seleciona uma imagem do slider e depois entra em loop
    passando para frente a cada 5 segundos
    ==========================================================
    */
    
    function automaticSlider() {
    
        currentSlide(1);
    
        setInterval(() => {
            if (!isPause) {
                plusSlides(1);
            }
        }, 5000);
    }
    
    /*
    ==========================================================
    Pega todos itens que existem no carrinho e salva 
    no storage
    ==========================================================
    */
    
    function saveData() {
        carrinhofiltrado = getNonNulls();

        carrinhofiltrado.forEach(item => {
            if(item.img[0] != '.'){
                item.img = '../' + item.img; 
            }
        });

        localStorage.setItem(data_to_save, JSON.stringify(carrinhofiltrado));
    }
    
    /*
    ==========================================================
    Retorna um vetor onde não tem posição com valores nulos
    ==========================================================
    */
    
    function getNonNulls() {
        return carrinho.filter(function (el) {
            return el != null;
        });
    }
    
    /*
    ==========================================================
    Soma de todos preços de todos produtos do carrinho
    ==========================================================
    */
    
    function getPrecoTotal() {
    
        soma = 0;
    
        getNonNulls().map((product) => {
            soma += product.price;
        });
    
        return parseFloat(soma).toFixed(2)
    }
    
    /*
    ==========================================================
    Adiciona todos itens presente no carrinho
    util quando troca de página, recupera do storage
    ==========================================================
    */
    
    function addItensCarrinho() {
    
        if (carrinho.length != 0) {
    
            for (i = 0; i < carrinho.length; i++) {
    
                produto = carrinho[i];
                
                item = document.createElement('div');
                layout = document.getElementById('container-carrinho');
                layout.appendChild(item);
                item.innerHTML =
                    `<div id=${i} class="item-carrinho fade">\n` +
                    `<img src=${produto.img} alt="produto">\n` +
                    `<p>${produto.title}</p>\n` +
                    `<p id="preco-item">R$ ${produto.price}</p>\n` +
                    `<img id=${i} class="trash" src="../assets/img/trash.png" onclick="apagarProduto(this)"; alt="excluir item">\n` +
                    '</div>';
            }
    
            document.getElementById('price-carrinho-msg').innerHTML = `<h1>Preço Total do seu carrinho: R$ ${getPrecoTotal()}</h1>`;
    
        } else {
            document.getElementById('msg-initial').innerHTML = "Seu carrinho está vazio!";
        }
    
    }
    
    /*
    ==========================================================
    Apagar um item do carrinho
    ==========================================================
    */
    
    function apagarProduto(item) {
    
        posi = parseInt(item.id);
        testi = carrinho[posi].price;
        document.getElementById(posi + '').outerHTML = "";
    
        carrinho[posi] = null;
    
        setQtdCarrinho();
        document.getElementById('price-carrinho-msg').innerHTML = `<h1>Preço Total do seu carrinho: R$ ${getPrecoTotal()}</h1>`;
    
        if (getNonNulls().length == 0) {
            document.getElementById('msg-initial').innerHTML = "Seu carrinho está vazio!";
            document.getElementById('price-carrinho-msg').innerHTML = "";
        }
    
    }
    
    /*
    ==========================================================
    Botão Scroll to Top 
    ==========================================================
    */
    
    
    window.onscroll = function () { scrollFunction() };
    
    function scrollFunction() {
    
        page = getPage();
    
        if(page == '' || page == 'index.html' || page == 'cadastro.html'){
            return;
        }
    
        mybutton = document.getElementById("myBtn");
    
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    /*
    ==========================================================
    Retira o formulario e mostra uma msg, após 3s vai no index
    ==========================================================
    */
    
    function handleForm(event, form) {
        event.preventDefault();
    
        contadorToHome = 0
    
        form.style.display = 'none';
        h2msg = document.getElementById("msg-contato");
        h2msg.style.marginTop = '30vh';
    
        nome = document.getElementById("inome").value;
        sobrenome = document.getElementById("isobrenome").value;
    
        h2msg.innerHTML = `${nome} ${sobrenome}, seu cadastro foi realizado com sucesso &#9745;&#65039;`;
    
        loading = document.getElementById('loadanimado');
        loading.style.display = "flex";
    
        secondsToWait = 5
    
        setInterval(()=> {
            contadorToHome++
            if(contadorToHome == secondsToWait){
                window.location.href='../index.html';
                return;
            }
        }, 1000);
    
    }
    
    /*
    ==========================================================
    Inicia as configurações inicias
    ==========================================================
    */
    
    window.onload = initData;
    window.onbeforeunload = saveData;