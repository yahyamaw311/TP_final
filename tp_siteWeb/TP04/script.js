
const longueurElt= document.getElementById("longueur");
const upperCaseElt= document.getElementById("upperCase");
const lowerCaseElt= document.getElementById("lowerCase");
const numbersElt= document.getElementById("numbers");
const symbolsElt= document.getElementById("symbols");

const generateElt= document.getElementById("generate");
const resultElt= document.getElementById("mot_de_passe")



function insert_checked(checker_list, choice)
{
    if (checker_list[0].checked)
    {
        choice.push("ABCDEFGHIJKLMNOPQRSTUVWXYX")
    }
    if (checker_list[1].checked)
    {
        choice.push("abcdefghijklmnopqrstuvwxyz")
    }
    if (checker_list[2].checked)
    {
        choice.push("0123456789")
    }
    if (checker_list[3].checked)
    {
        choice.push("!@#$%^&*(){}[]=<>/,.")
    }
    return choice
}
function choose_random(longueur, choice)
{
    result = ""
    do{
        for( var i = 0; i < choice.length; i++)
        {
            result += [choice[i].charAt(Math.floor(Math.random() * choice[i].length))]
            if (result.length >= Number(longueur))
            {
                break
            }
        }
    }while(result.length < Number(longueur))
    return result
}

function randomise_password(result)
{
    longueur_du_pwd = result.length
    password = ""
    
    for( i = 0; i < longueur_du_pwd; i++)
    {
        char = result.charAt(Math.floor(Math.random() * result.length))
        password += char
        result = result.replace(char, "")
    }
    return password
}

different_checked = [upperCaseElt, lowerCaseElt, numbersElt, symbolsElt]
generateElt.addEventListener('click', () => {
    if(longueurElt.value < 5 || longueurElt.value > 20)
    {
        resultElt.innerText = "veuillez entrer une longueur entre 5 et 20."
    }
    else
    {
        choice = []
        insert_checked(different_checked, choice)
        if(choice.length == 0)
        {
            resultElt.innerText = "veuillez cocher une case."
        }
        else
        {
            choose_random(longueurElt.value, choice)
            randomise_password(result)
            resultElt.innerText = password
        }       
    }
})

