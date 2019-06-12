export default {
    chooseFruit (ctx, fruit) {
        // console.log(ctx, fruit);
        ctx.commit('chooseFruit',fruit)
    }
}