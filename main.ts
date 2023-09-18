input.onButtonPressed(Button.B, function () {
    nyan.change(LedSpriteProperty.Y, -1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.setVolume(0)
})
let nyan: game.LedSprite = null
nyan = game.createSprite(1, 2)
let object = game.createSprite(randint(4, 5), randint(1, 4))
game.setScore(0)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.LoopingInBackground)
music.setVolume(50)
basic.forever(function () {
    object.move(-1)
    basic.pause(400)
})
basic.forever(function () {
    if (nyan.isTouchingEdge() || nyan.get(LedSpriteProperty.X) == object.get(LedSpriteProperty.X) && nyan.get(LedSpriteProperty.Y) == object.get(LedSpriteProperty.Y)) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.B))) {
        basic.pause(750)
        nyan.change(LedSpriteProperty.Y, 1)
    }
    if (object.get(LedSpriteProperty.X) == 0) {
        object.delete()
        object = game.createSprite(randint(4, 5), randint(1, 4))
    }
})
