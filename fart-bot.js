((state, timeLeftFn) => {

    var fart = 1;
    var walk = 2;
    
    var prev = state["saved-state"].prev || fart;
    var move = prev === fart ? walk : fart;
    
    var command;
    if (move === fart) {
        command = { action: 'smoke', metadata: { direction: 'backward' } };
    } else {
        command = { action: 'move' };
    }


    return {
        command,
        state: {
            prev: move
        }
    };
});

