const commafy = value => {
    let result = "";
    let decimal = "";
    let negativeFlag = false
    if(value.includes('.')){
        result = value.substring(0, value.indexOf("."));
        decimal = value.substring(value.indexOf("."));
    }else{
        result = value;
    }
    if(parseFloat(value) < 0){
        negativeFlag = true;
        result = result.substring(1);
    }

    return negativeFlag
    ? "-" + parseFloat(result).toLocaleString() + decimal
    : parseFloat(result).toLocaleString() + decimal;
}
export default commafy;