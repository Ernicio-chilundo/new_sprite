var canvas = document.getElementById("mycanvas")
var context = canvas.getContext("2d")
var animacao = new Animacao(context)

// criar b1 sprite

var b1 = new Bola(context)
b1.x = 100
b1.y = 200
b1.velocidadeX = 20
b1.velocidadeY = -10
b1.cor = "#f00"
b1.raio = 20

// criar b2 sprite
var b2 = new Bola(context)
b2.x = 200
b2.y = 100
b2.velocidadeX = -10
b2.velocidadeY = 20
b2.cor = "#00f"
b2.raio = 20

// criando loop 
var animacao = new Animacao()
animacao.novoSprite(b1)
animacao.novoSprite(b2)

animacao.ligar()