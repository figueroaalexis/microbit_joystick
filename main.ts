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
radio.setGroup(1)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        radio.sendString("CC")
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) <= 510 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("LL")
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) <= 115 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("LH")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            `)
        radio.sendString("RL")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
        radio.sendString("RH")
    } else if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) <= 510)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            `)
        radio.sendString("DL")
    } else if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) <= 115)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        radio.sendString("DH")
    } else if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 530 && pins.analogReadPin(AnalogPin.P2) <= 760)) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("UL")
    } else if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) >= 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("UH")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) <= 510)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            `)
        radio.sendString("RDL")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) <= 115)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        radio.sendString("RDH")
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) <= 510 && (pins.analogReadPin(AnalogPin.P2) >= 530 && pins.analogReadPin(AnalogPin.P2) < 760)) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("LUL")
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) <= 115 && (pins.analogReadPin(AnalogPin.P2) >= 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("LUH")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) >= 530 && pins.analogReadPin(AnalogPin.P2) < 760)) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("RUL")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) >= 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("RUH")
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) <= 510 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) <= 510)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            `)
        radio.sendString("LDL")
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) <= 115 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) <= 115)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        radio.sendString("LDH")
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) <= 115 && (pins.analogReadPin(AnalogPin.P2) >= 530 && pins.analogReadPin(AnalogPin.P2) < 760)) {
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("LHUL")
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) <= 510 && (pins.analogReadPin(AnalogPin.P2) >= 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("LLUH")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) >= 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        basic.showLeds(`
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("RLUH")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) >= 530 && pins.analogReadPin(AnalogPin.P2) < 760)) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("RHUL")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) <= 510)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            `)
        radio.sendString("RHDL")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) <= 115)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            `)
        radio.sendString("RLDH")
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) <= 510 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) <= 115)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            `)
        radio.sendString("LLDH")
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) <= 115 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) <= 510)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            `)
        radio.sendString("LHDL")
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
