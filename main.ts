input.onButtonPressed(Button.B, function () {
    nyan.change(LedSpriteProperty.Y, -1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.setVolume(50)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.LoopingInBackground)
})
let nyan: game.LedSprite = null
let object_speed = 400
nyan = game.createSprite(1, 2)
let object = game.createSprite(randint(4, 5), randint(1, 4))
game.setScore(0)
basic.forever(function () {
    object.move(-1)
    basic.pause(object_speed)
    if (game.score() == 5) {
        object_speed = 350
    }
    if (game.score() == 10) {
        object_speed = 300
    }
})
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.B))) {
        basic.pause(750)
        nyan.change(LedSpriteProperty.Y, 1)
    }
    if (object.get(LedSpriteProperty.X) == 0 && game.isGameOver() == false) {
        game.addScore(1)
        object.delete()
        object = game.createSprite(randint(4, 5), randint(1, 4))
    }
})
basic.forever(function () {
    if (nyan.get(LedSpriteProperty.Y) == 4 || nyan.get(LedSpriteProperty.X) == object.get(LedSpriteProperty.X) && nyan.get(LedSpriteProperty.Y) == object.get(LedSpriteProperty.Y)) {
        game.gameOver()
    }
})
