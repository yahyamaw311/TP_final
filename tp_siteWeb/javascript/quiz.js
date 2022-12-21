// Mawhoub Yahya - Décembre 2022

const quizData = [
    {
        question: "1. Quelle est la syntaxe pour imprimer du texte en Python?",
        a: "print('texte')",
        b: "print texte",
        c: "printf('texte')",
        d: "cout << 'texte'",
        correct: "a",
    },
    {
        question: "2. Quelle est la syntaxe pour déclarer une variable en Python?",
        a: "var name = value",
        b: "value -> name",
        c: "name = value",
        d: "define name as value",
        correct: "c",
    },
    {
        question: "3. Quelle est la syntaxe pour effectuer une boucle 'tant que' en Python?",
        a: "while condition:",
        b: "for condition:",
        c: "do while condition:",
        d: "repeat while condition:",
        correct: "a",
    },

    {
        question: "4. Quelle est la syntaxe pour créer une fonction en Python?",
        a: "function nom_de_la_fonction():",
        b: "def nom_de_la_fonction():",
        c: "create function nom_de_la_fonction():",
        d: "new function nom_de_la_fonction():",
        correct: "b",
    },
    {
        question: "5. Quelle est la syntaxe pour accéder à un élément d'une liste en Python?",
        a: "list[index]",
        b: "list.get(index)",
        c: "list.element(index)",
        d: "list.item(index)",
        correct: "a",
    },
    {
        question: "6. Quel est le type de données utilisé pour représenter une suite de caractères en Python?",
        a: "chaine",
        b: "float",
        c: "string",
        d: "caractères",
        correct: "c",
    },

    {
        question: "7. Comment peut-on vérifier le type d'une variable en Python?",
        a: "En utilisant la fonction type()",
        b: "En utilisant la fonction class()",
        c: "En utilisant la fonction kind()",
        d: "En utilisant la fonction categorize()",
        correct: "a",
    },
    {
        question: "8. Comment peut-on ouvrir et lire le contenu d'un fichier en Python?",
        a: "En utilisant la fonction read()",
        b: "En utilisant la fonction open() et la méthode read()",
        c: "En utilisant la fonction file() et la méthode read()",
        d: "En utilisant la fonction import() et la méthode read()",
        correct: "b",
    },
    {
        question: "9. Quelle est la syntaxe pour ajouter un élément à une liste en Python?",
        a: "list.add(élément)",
        b: "list + élément",
        c: "list.insert(élément)",
        d: "list.append(élément)",
        correct: "d",
    },
    {
        question: "10. Quelle est la syntaxe pour importer un module en Python?",
        a: "import nom_du_module",
        b: "include nom_du_module",
        c: "require nom_du_module",
        d: "use nom_du_module",
        correct: "a",
    },
    
]

const resultElt = document.getElementById("result");

const reponseElts = document.querySelectorAll(".reponse")
const questionElt = document.getElementById("question")
const a_choixDeReponseElt = document.getElementById("a_choixDeReponse")
const b_choixDeReponseElt = document.getElementById("b_choixDeReponse")
const c_choixDeReponseElt = document.getElementById("c_choixDeReponse")
const d_choixDeReponseElt = document.getElementById("d_choixDeReponse")
const retryElt = document.getElementById("retry")

const submitElt = document.getElementById("submit")
const lastQuestionElt = document.getElementById("lastOne")

totalScore = 0
scoreParQuestion = 0

function createQuiz(){
    deleteSelectedAnswer();

    const uneQuestion = quizData[scoreParQuestion]

    questionElt.innerText = uneQuestion.question
    a_choixDeReponseElt.innerText = uneQuestion.a
    b_choixDeReponseElt.innerText = uneQuestion.b
    c_choixDeReponseElt.innerText = uneQuestion.c
    d_choixDeReponseElt.innerText = uneQuestion.d
}

function deleteSelectedAnswer(){
    reponseElts.forEach( elementDuTableau => elementDuTableau.checked = false)
}

function getChoixReponse(){
    let reponse
    reponseElts.forEach( elementDuTableau => {
        if( elementDuTableau.checked ){
            reponse = elementDuTableau.id
        }
    })
    return reponse
}

createQuiz()
submitElt.addEventListener('click', () => {
    const choixUser = getChoixReponse()

    if(choixUser) {
        if( choixUser === quizData[scoreParQuestion].correct){
            totalScore++
        }
        scoreParQuestion++

        if(scoreParQuestion < quizData.length)
        {
            createQuiz();
        }
        else{
            resultElt.innerText = "Ton score est : " + totalScore
        }
    }
})

retryElt.addEventListener('click', () => {
    totalScore = 0
    scoreParQuestion = 0
    createQuiz()
})

lastQuestionElt.addEventListener('click', () => {
    totalScore--
    scoreParQuestion--
    createQuiz()
})
