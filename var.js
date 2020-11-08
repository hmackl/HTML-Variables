let varsets = document.getElementsByTagName('varset')
let vargets = document.getElementsByTagName('varget')
let variables = {}
for (let i = 0; i < varsets.length; i++) {
    let variable = varsets[i].innerHTML.replace(' = ', '=')
    variable = variable.split('=')
    variables[variable[0]] = variable[1]
}
for (let i = 0; i < vargets.length; i++) {
    if (variables[vargets[i].innerHTML]) {
        vargets[i].innerHTML = variables[vargets[i].innerHTML]
    } else {
        vargets[i].innerHTML = 'Undefined'
    }
}
console.log(variables)
