const questions = [
    {
      question: "Com que frequência sente-se incapaz de relaxar?",
      answers: [
        { id: "5", text: "Não sinto" },
        { id: "6", text: "Muito pouco"},
        { id: "7", text: "Regularmente"},
        { id: "8", text: "Com muita frequência"}
      ]
    },
    {
        question: "Com que frequência sente medo de que aconteça o pior?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente medo de perder o controle?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente medo de morrer?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente-se assustado?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência tem pensamento de perigo imediato?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente apreensão frente a aproximação de situação/local/objeto?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente sofrimento excessivo e recorrente ante algum acontecimento?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência tem preocupação persistente sobre o mesmo assunto?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência tem comportamento de esquiva frente a situação temida?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente dificuldade de concentração?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente inquietação?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente “branco” na mente?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente irritabilidade?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência tem perturbação do sono?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência tem medo de sair de casa?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente medo de lugares fechados?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente medo de aglomerações de pessoas?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente medo de olhar no olho das pessoas?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente medo de enlouquecer?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente medo do que os outros irão pensar?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente-se confuso?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente-se distraído?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente memória deficiente?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente dificuldade de raciocínio?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente perda de objetividade?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência busca por lugares/rotas seguros?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    },
    {
        question: "Com que frequência sente impaciência?",
        answers: [
          { id: "5", text: "Não sinto" },
          { id: "6", text: "Muito pouco"},
          { id: "7", text: "Regularmente"},
          { id: "8", text: "Com muita frequência"}
        ]
    }
  ];
  
  export default questions;
  