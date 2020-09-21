function defang(address) {
    return address.replace(/\./gi, "[.]");
}

console.log(defang("1.1.1.1"))