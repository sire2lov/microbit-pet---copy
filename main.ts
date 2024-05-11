input.onButtonPressed(Button.A, function () {
    basic.showString("Hello! What's your name ")
    basic.showIcon(IconNames.Happy)
    basic.showString(" Cool my name is Michro bit")
})
input.onButtonPressed(Button.AB, function () {
    input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    timer = 0
    basic.showIcon(IconNames.Surprised)
    basic.showString("wow")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    timer = 0
    basic.showIcon(IconNames.Happy)
    music.play(music.stringPlayable("C D E C5 B A C C5 ", 120), music.PlaybackMode.UntilDone)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
let timer = 0
let tool = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
music.play(music.stringPlayable("C5 E B G G A A B ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 20) {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    }
    if (timer == 30) {
        basic.showIcon(IconNames.Asleep)
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    }
    if (timer == 40) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Angry)
        music.setBuiltInSpeakerEnabled(false)
    }
})
input.onButtonPressed(Button.A, function () {
    record.setSampleRate(10000, record.AudioSampleRateScope.Recording)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    record.startRecording(record.BlockingState.Blocking)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    record.setSampleRate(20000, record.AudioSampleRateScope.Playback)
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    record.playAudio(record.BlockingState.Blocking)
    basic.clearScreen()
})
