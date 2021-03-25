export const updateTradeResult = (state, payload) => {
    state.puschase += parseFloat(payload.purchase) * parseInt(payload.count);
    state.sale += parseFloat(payload.sale) * parseInt(payload.count);
    state.balance = parseFloat(state.sale) - parseFloat(state.purchase); 
}