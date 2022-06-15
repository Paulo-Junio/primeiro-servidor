function diaDeHoje (){
    const hoje = new Date();
    return(hoje.toLocaleDateString());

};

export default diaDeHoje;