let Ready = 0
let Finished = 0
let Game_Started = 0
input.onButtonPressed(Button.A, function () {
    if (Ready == 1) {
        Ready = 0
        if (Ready == 0) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            Finished = 1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Game_Started == 0) {
        Game_Started = 1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(2000)
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Ready = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Ready == 1) {
        Ready = 0
        if (Ready == 0) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            Finished = 1
        }
    }
})
basic.forever(function () {
    if (Finished == 1) {
        basic.pause(2500)
        Ready = 0
        Game_Started = 0
        Finished = 0
    }
    while (Game_Started == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
    }
})
