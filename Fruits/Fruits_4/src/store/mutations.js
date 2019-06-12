export default {
    chooseFruit (state, fruit) {
        console.log(fruit)
        state.fruitNow = fruit
        // localStorage.fruit = fruit
        try{
            localStorage.fruit = fruit
        } catch(e) {}
    },
    panic (state, fruit) {
        console.log(state,fruit)
        var panicBuy = state.panicBuy;
        panicBuy.img = fruit.img;
        panicBuy.desc = fruit.desc;
        panicBuy.title = fruit.title;
        panicBuy.price = fruit.oldPrice;
    }
}