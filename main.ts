WSJoyStick.onKey(KEY.F, function () {
    radio.sendString("F")
    basic.showString("F")
    WSJoyStick.PlayMusic(262, music.beat(BeatFraction.Sixteenth))
})
WSJoyStick.onKey(KEY.A, function () {
    radio.sendString("A")
    basic.showString("A")
    WSJoyStick.PlayMusic(262, music.beat(BeatFraction.Sixteenth))
})
WSJoyStick.onKey(KEY.E, function () {
    radio.sendString("E")
    basic.showString("E")
    WSJoyStick.PlayMusic(262, music.beat(BeatFraction.Sixteenth))
})
WSJoyStick.onKey(KEY.D, function () {
    radio.sendString("D")
    basic.showString("D")
    WSJoyStick.PlayMusic(262, music.beat(BeatFraction.Sixteenth))
})
WSJoyStick.onKey(KEY.B, function () {
    radio.sendString("B")
    basic.showString("B")
    WSJoyStick.PlayMusic(262, music.beat(BeatFraction.Sixteenth))
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showIcon(IconNames.Heart)
    }
})
WSJoyStick.onKey(KEY.C, function () {
    radio.sendString("C")
    basic.showString("C")
    WSJoyStick.PlayMusic(262, music.beat(BeatFraction.Sixteenth))
})
WSJoyStick.JoyStickInit()
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) < 510 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) < 115 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) < 510)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) < 115)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 530 && pins.analogReadPin(AnalogPin.P2) < 760)) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) < 510)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) < 115)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) < 510 && (pins.analogReadPin(AnalogPin.P2) > 530 && pins.analogReadPin(AnalogPin.P2) < 760)) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) < 115 && (pins.analogReadPin(AnalogPin.P2) > 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) > 530 && pins.analogReadPin(AnalogPin.P2) < 760)) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) > 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) < 510 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) < 510)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            `)
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) < 115 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) < 115)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
