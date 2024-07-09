var canvas = document.getelemenetById("mycanvas")
var context = canvas.getContext("2d")

// criar b1 sprite

var b1 = new Bola(b1)
b1.x = 100
b1.y = 200
b1.velocidadeX = 20
b1.velocidadeY = -10
b1.cor = "aqua"
b1.raio = 20

// criar b2 sprite
var b2 = new Bola(b2)
b2.x = 200
b2.y = 100 
b2.velocidadeX = -10
b2.velocidadeY =20
b2.cor = "black"
b2.raio = 20

// criando loop 
var animacao = new animacao()
animacao.novoSprite(b1)
animacao.novoSprite(b2)