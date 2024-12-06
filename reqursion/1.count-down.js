function countdown(number) {
    if (number > 0) {
        console.log(number);
        countdown(number - 1);
    } else {
        console.log('all done')
        return
    }
}

countdown(25)