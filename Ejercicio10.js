const func1=texto=>texto.toUpperCase();
const func2=texto=>`${texto}!`;
const componerTransformaciones = function(func1, func2){
    let texto=``;
    const func3 = texto => func2(func1(texto));
    return func3(texto);
}