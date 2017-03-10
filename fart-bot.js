;((state, timeLeftFn) => {

  const none = 0
  const fart = 1
  const walk = 2
  const turn = 3

  const previousState = state['saved-state'] || {}
  const previousMove = previousState['previous-move'] || none
  const lastTurnWasTurn = previousMove === turn
  const shouldTurn = (Math.floor((Math.random() * 20) + 1) == 1) && !lastTurnWasTurn

  var move
  if (shouldTurn) {
    move = turn
  } else {
    move = previousMove === fart ? walk : fart
  }

  var command
  if (move === fart) {
    command = { action: 'smoke', metadata: { direction: 'backward' } }
  } else if (move === turn) {
    const turnDirections = ['right', 'left', 'about-face']
    const turnDirection = turnDirections[Math.floor(Math.random() * 3)]
    command = { action: 'turn', metadata: { direction: turnDirection } }
  } else if (move === walk) {
    command = { action: 'move' }
  } else {
    command = { action: 'move' }
  }

  return {
    command,
    state: {
      'previous-move': move
    }
  }
})
