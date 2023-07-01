let names = ["Pedro", "Jessica", "Carol", "Pedro", "Pedro"];

// .filter()

// it is used to filter anything suppose in our example there are multiple pedro so if we want to print the string without pedro in it then we do it by below code

const filter = names.filter((name) => {
    return name !== "Pedro"
})

console.log(filter)