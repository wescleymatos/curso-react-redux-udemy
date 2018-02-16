const INITIAL_STATE = {
  description: 'Ler livros',
  list: [{
    _id: 1,
    description: 'Pagar fatura do cartão',
    done: true
  }, {
    _id: 2,
    description: 'Reunião equipe',
    done: false
  }, {
    _id: 3,
    description: 'Consulta médica',
    done: false
  }]
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGE':
      return { ...state, description: action.payload };
    default:
     return state;
  }
}
