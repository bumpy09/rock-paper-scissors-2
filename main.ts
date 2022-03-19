input.onButtonPressed(Button.A, function () {
    baby = randint(0, 3)
    if (baby == 0) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (baby == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (baby == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . .
            # # # . .
            . . # . .
            # . # . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(boden)
})
input.onButtonPressed(Button.B, function () {
    boden += -1
    basic.showNumber(boden)
})
let baby = 0
let boden = 0
boden = 3
basic.forever(function () {
    if (0 < 0) {
        while (true) {
            basic.showIcon(IconNames.Sad)
        }
    }
})
