export const credits = {
    title: 'Jovem Guerreiro - Aventura Solo',
    author: 'José Luís Haas',
    description: 'Jogo de RPG solo escrito em 1999.',
    links: {
      GitHub: 'https://github.com/zecazeco/aventura-solo-jovem-guerreiro',
      Site: 'https://vangrog.com'
    } 
  };

export const textNodes = [  
  {
    id: 0,
    img: 'scene-00.gif',
    paragraphs: [
      {
        text: 'Aventura solo, em texto, sobre um jovem guerreiro que tenta salvar seu pai em uma caverna cheia de perigos.'
      },
      {
        text: 'Este é um projeto criado para estudos das tecnologias HTML5, CSS3 e JavaScript. Esta aventura foi escrita por mim em 1999 aos 14 anos de idade e resolvi publicá-la agora sem edições, tenha isso em mente ao jogá-la.'
      },
      {
        text: 'Sinta-se livre para copiar o projeto no GitHub (link abaixo) e criar sua própria aventura!'
      }             
    ],
    options: [
      {
        text: 'Iniciar',
        nextText: 1,
      }                           
    ]
  },  
  {
    id: 1,
    paragraphs: [
      {
        text: 'Você é um jovem guerreiro, ainda inexperiente, que mora com seu pai e sua mãe, tudo que você aprendeu sobre uma espada foi seu pai quem lhe ensinou. Vocês moram numa cidade muito pacata. Seu pai era o vendedor de armas da cidade, ele carregava sempre uma espada mágica que brilhava em suas mãos.'
      },
      {
        text: 'Uma noite você acorda com um barulho muito estranho vindo do quarto do seu pai. Depois de se levantar, uma madeira vem ao seu encontro. Você acorda no chão do quarto com um corte na testa.'
      }        
    ],
    options: [
      {
        text: 'Continuar',
        nextText: 76,
      }                   
    ]
  },
  {
    id: 2,
    paragraphs: [
      {
        text: 'Você grita mais ainda mas ninguém aparece, vendo que gritar é inútil você decide nadar pelos túneis.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 30
      }
    ]
  },
  {
    id: 3,
    paragraphs: [
      {
        text: 'Este corredor termina numa sala. Na sala há um armário diferente, todo esculpido em madeira, ele está trancado. Você precisa de algo para abri-lo.'
      },    
    ],    
    options: [
      {
        text: 'Usar pedaço de madeira esculpida',
        requiredState: (currentState) => currentState.madeiraEsculpida,
        nextText: 5
      },
      {
        text: 'Voltar para a primeira sala e entrar na porta um.',
        nextText: 25
      },
      {
        text: 'Ir pelo caminho das paredes esverdeadas.',
        nextText: 20
      }
    ]
  },
  {
    id: 4,
    paragraphs: [
      {
        text: 'Você abre a porta, a sala parece estar vazia, você examina melhor ela e vê que está realmente vazia, você decide voltar e ir pelo outro caminho.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 73
      }
    ]
  },
  {
    id: 5,
    paragraphs: [
      {
        text: 'Você se lembra do pedaço de madeira que parecia uma chave e o põe na fechadura do armário, a porta do armário se abre, lá dentro há um lindo manto vermelho com alguns detalhes dourados.'
      },    
    ],    
    options: [
      {
        text: 'Pegar o manto vermelho',
        setState: { mantoVermelho: true },
        nextText: 62
      },          
      {
        text: 'Voltar para a primeira sala e entrar na porta um',
        nextText: 25
      }
    ]
  },
  {
    id: 6,
    paragraphs: [
      {
        text: 'Você tenta desesperadamente abrir a porta, mas isso é inútil, a mulher se aproxima de você e põe a mão sobre seu ombro.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 64
      }
    ]
  },
  {
    id: 7,
    paragraphs: [
      {
        text: 'Com um rápido movimento e uma grande sorte você da um pulo para o lado e a tora passa raspando pela sua orelha.'
      }
    ],     
    options: [
      {
        text: 'Continuar',
        nextText: 40
      }
    ]
  },
  {
    id: 8,
    paragraphs: [
      {
        text: 'Continuando o caminho você encontra uma porta a esquerda, da para escutar vozes que vem de dentro da sala.'
      }
    ],
    options: [
      {
        text: 'Abrir a porta',
        nextText: 18
      },
      {
        text: 'Continuar o caminho',
        nextText: 22
      }      
    ]
  },
  {
    id: 9,
    paragraphs: [
      {
        text: 'Os Goblins, ao olharem para ti, saem correndo na sua direção com suas adagas em mãos, você puxa sua espada e com um só golpe arranca as cabeças das duas criaturas, você sai da sala, espantado com a velocidade e precisão do seu golpe, a espada mágica do seu pai é boa mesmo!'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 22
      }
    ]
  },
  {
    id: 10,
    paragraphs: [
      {
        text: 'O corpo é de um elfo, uma raça muito estranha que você não conhecia muito bem, revirando a mochila dele você encontra uma adaga enferrujada e um saco com mais ou menos 20 peças de ouro. Você sai da sala e continua pelo caminho.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        setState: { adagaEnferrujada: true, ouro: true },
        nextText: 15
      }
    ]
  },
  {
    id: 11,
    paragraphs: [
      {
        text: 'O caminho continua por alguns metros e termina em outra sala. No centro dela há uma mesa e em cima dela há uma maçã.'
      },    
    ],    
    options: [
      {
        text: 'Comer a maça',
        setState: { maça: true },
        nextText: 56
      },
      {
        text: 'Ir pelo caminho no final da sala',
        nextText: 17
      }      
    ]
  },
  {
    id: 12,
    paragraphs: [
      {
        text: 'Ao entrar na porta você vê ao fundo duas alavancas e uma porta. A porta está trancada.'
      },    
    ],    
    options: [
      {
        text: 'Sair da sala e seguir o caminho',
        nextText: 13
      },
      {
        text: 'Puxar a alavanca azul',
        nextText: 16
      },
      {
        text: 'Puxar a alavanca vermelha',
        nextText: 21
      }      
    ]
  },
  {
    id: 13,
    paragraphs: [
      {
        text: 'O caminho faz uma curva a direita e termina numa enorme sala, no centro da sala está um velho sentado em uma cadeira. Você se aproxima dele e antes que você faça alguma pergunta ele fala:'
      },
      {
        text: '- Estou aqui para te salvar, vá embora daqui, não cometa suicídio, não continue o caminho.'
      }, 
      {
        text: '- Por  que? Você pergunta. - Tenho que salvar meu pai!'
      },        
      {
        text: '- Diz a lenda que se um jovem guerreiro usando a espada sagrada, entrar nestes labirintos, poderá, sem querer, com sua força, libertar a pior e a mais temida besta já vista por toda a humanidade. Seu pai já deve estar morto, vá embora daqui!'
      },
      {
        text: 'E logo depois desaparece.'
      },                       
    ],    
    options: [
      {
        text: 'Acreditar na história do velho e ir embora',
        nextText: 27
      },
      {
        text: 'Não dar bola para a história do velho e ir salvar seu pai',
        nextText: 28
      }    
    ]
  }, 
  {
    id: 14,
    paragraphs: [
      {
        text: 'Você abre a porta dois, o corredor continua por alguns metros e faz duas curvas a direita e depois chega a uma entrada a esquerda que tem paredes avermelhadas.'
      },    
    ],  
    options: [
      {
        text: 'Pegar o caminho da esquerda com paredes avermelhadas',
        nextText: 3
      },
      {
        text: 'Continuar pelo caminho, que agora tem paredes esverdeadas',
        nextText: 20
      }     
    ]
  }, 
  {
    id: 15,
    paragraphs: [
      {
        text: 'Continuando o caminho você chega a uma bifurcação.'
      },    
    ],    
    options: [
      {
        text: 'Ir para a esquerda',
        nextText: 11
      },
      {
        text: 'Ir para a direita',
        nextText: 8
      }     
    ]
  }, 
  {
    id: 16,
    paragraphs: [
      {
        text: 'Você puxa a alavanca azul e a porta se abre, você entra na sala e pega um colar com uma pedra verde que estava numa mesa, depois sai da sala e continua o caminho.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        setState: { colarVerde: true },
        nextText: 13
      }     
    ]
  }, 
  {
    id: 17,
    paragraphs: [
      {
        text: 'Este caminho também termina em uma sala, uma das paredes desta sala é vermelha, ao se aproximar desta parede você vê uma boca se formando nela, a boca começa a dar risadas para você, você grita:'
      },
      {
        text: '- Onde está meu pai!?'
      }, 
      {
        text: 'A boca continua rindo, então você, desesperadamente, levanta sua espada e, antes que você pudesse atacá-la ela desaparece. Você volta pelas duas salas que venho e continua o caminho.'
      },                 
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 8
      }     
    ]
  }, 
  {
    id: 18,
    paragraphs: [
      {
        text: 'Abrindo a porta você vê duas pequenas criaturas verdes e feias, mais conhecidas como Goblins.'
      },    
    ],    
    options: [
      {
        text: 'Tenho um manto vermelho',
        requiredState: (currentState) => currentState.mantoVermelho,
        nextText: 35
      },
      {
        text: 'Continuar',
        nextText: 9
      }     
    ]
  }, 
  {
    id: 19,
    paragraphs: [
      {
        text: 'Um dos Goblins fala que mais à frente você vai encontrar duas alavancas e é para puxar a azul. Você agradece e sai da sala.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 22
      }      
    ]
  }, 
  {
    id: 20,
    paragraphs: [
      {
        text: 'Continuando o caminho você chega a uma sala com paredes esverdeadas, numa das paredes da sala há um pedaço de madeira esculpido.'
      },    
    ],    
    options: [
      {
        text: 'Pegar o pedaço de madeira esculpido',
        setState: { madeiraEsculpida: true },
        nextText: 59
      },
      {
        text: 'Continuar pelo caminho no final da sala',
        nextText: 23
      }     
    ]
  },
  {
    id: 21,
    paragraphs: [
      {
        text: 'Você puxa a alavanca vermelha, um buraco se abre no chão, você não tem o que fazer, cai num fosso e vira comida de piranha!'
      },    
    ],    
    options: [
      {
        text: 'Reiniciar',
        nextText: -1
      }    
    ]
  },  
  {
    id: 22,
    paragraphs: [
      {
        text: 'Depois de algum tempo caminhando você encontra uma porta à sua direita, ela está aberta.'
      },    
    ],    
    options: [
      {
        text: 'Entrar na porta',
        nextText: 12
      },
      {
        text: 'Continuar pelo caminho',
        nextText: 13
      }     
    ]
  },  
  {
    id: 23,
    paragraphs: [
      {
        text: 'O corredor faz uma curva à esquerda e termina numa sala enorme mas vazia, no canto da sala há uma porta, nesta porta há um bilhete que diz:'
      },
      {
        text: '"Só entre com chave e com muito cuidado." Você não tem a chave.'
      },          
    ],    
    options: [
      {
        text: 'Arrombar a porta',
        nextText: 24
      },
      {
        text: 'Voltar pelas duas salas e entrar no caminho avermelhado',
        nextText: 3
      },
      {
        text: 'Voltar até a sala das duas portas e entrar na porta um',
        nextText: 25
      }     
    ]
  },  
  {
    id: 24,
    paragraphs: [
      {
        text: 'Você toma distância e vem correndo ao encontro da porta, do outro lado só há um buraco com muitas estacas. Sua aventura acaba aqui!'
      },    
    ],    
    options: [
      {
        text: 'Reiniciar',
        nextText: -1
      }     
    ]
  },  
  {
    id: 25,
    paragraphs: [
      {
        text: 'Você abre a porta um, o caminho continua por um corredor que depois de alguns metros vira a esquerda, mais alguns metros e você chega numa porta.'
      },    
    ],    
    options: [
      {
        text: 'Continuar pelo caminho',
        nextText: 15
      },
      {
        text: 'Entrar na porta',
        nextText: 33
      }     
    ]
  },
  {
    id: 26,
    paragraphs: [
      {
        text: 'Após ter matado a criatura, você examina a sala, não há nada de importante nela, você sai e continua o caminho.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 63
      }    
    ]
  },
  {
    id: 27,
    paragraphs: [
      {
        text: 'Você decide ir embora da caverna e deixar seu pai morrer, que belo filho que você é, um verdadeiro covarde!'
      },    
    ],    
    options: [
      {
        text: '(Nem merece) Reiniciar',
        nextText: -1
      }   
    ]
  },
  {
    id: 28,
    paragraphs: [
      {
        text: 'Você decide continuar o caminho, o corredor termina em uma pequena sala, no final dela há outro caminho, ao atravessar a sala você pisa numa pedra que aciona uma armadilha, ao olhar para cima você vê uma tora vindo em sua direção.'
      },    
    ],    
    options: [
      {
        text: 'Eu comi a maça antes',
        requiredState: (currentState) => currentState.maça,
        nextText: 7
      },
      {
        text: 'Eu não comi nenhuma maça',
        nextText: 45
      }     
    ]
  },
  {
    id: 29,
    paragraphs: [
      {
        text: 'Dentro da sala há uma mesa com dois frascos em cima dela.'
      },    
    ],    
    options: [
      {
        text: 'Se aproximar da mesa',
        nextText: 34
      },
      {
        text: 'Sair da sala e continuar o caminho',
        nextText: 36
      }     
    ]
  },
  {
    id: 30,
    paragraphs: [
      {
        text: 'Você pega muito ar e desce pelo túnel, depois de nadar muito e estar quase sem ar você chega a uma bifurcação.'
      },    
    ],    
    options: [
      {
        text: 'Ir para a esquerda',
        nextText: 38
      },
      {
        text: 'Ir para direita',
        nextText: 48
      }     
    ]
  },
  {
    id: 31,
    paragraphs: [
      {
        text: 'Você para e escuta melhor o barulho, parece que alguma pessoa está gritando por ajuda, o barulho vem da sua frente. Você resolve continuar o caminho na esperança de que esse grito seja de seu pai.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 47
      }    
    ]
  },
  {
    id: 32,
    paragraphs: [
      {
        text: 'Você chega perto do anão e pede se ele escutou o grito e ele responde que não, você desconfia dele. Ele fala que é um vendedor, lhe oferece um cajado que achou num dos túneis da caverna. O cajado custa 20 peças de ouro'
      },    
    ],    
    options: [
      {
        text: 'Comprar cajado',
        requiredState: (currentState) => currentState.ouro,
        setState: { cajado: true, ouro: false },
        nextText: 39
      },
      {
        text: 'Não tenho ouro',
        nextText: 41
      }     
    ]
  },
  {
    id: 33,
    paragraphs: [
      {
        text: 'A porta está aberta, a sala está, como todo caminho, iluminada por tochas, não há nada nela além de um corpo no chão.'
      },    
    ],    
    options: [
      {
        text: 'Revistar o corpo',
        nextText: 10
      },
      {
        text: 'Sair da sala e continuar o caminho',
        nextText: 15
      }     
    ]
  },
  {
    id: 34,
    paragraphs: [
      {
        text: 'Ao se aproximar da mesa você vê melhor os frascos, um é vermelho e o outro verde.'
      },    
    ],    
    options: [
      {
        text: 'Beber o líquido vermelho',
        setState: { liquidoVermelho: true },
        nextText: 42
      },
      {
        text: 'Beber o líquido verde',
        setState: { liquidoVerde: true },
        nextText: 43
      },
      {
        text: 'Sair da sala sem beber',
        nextText: 36
      }     
    ]
  },
  {
    id: 35,
    paragraphs: [
      {
        text: 'Ao olharem para o manto vermelho eles se ajoelham e suplicam por piedade. Você pede onde está seu pai e eles respondem que não sabem, eles simplesmente moram ali.'
      },    
    ],    
    options: [
      {
        text: 'Perguntar sobre os perigos à frente',
        nextText: 19
      },
      {
        text: 'Deixar eles em paz e sair da sala',
        nextText: 22
      }     
    ]
  }, 
  {
    id: 36,
    paragraphs: [
      {
        text: 'Continuando o caminho, depois de alguns metros, outro barulho ecoa pelos túneis.'
      },    
    ],    
    options: [
      {
        text: 'Continuar o caminho',
        nextText: 47
      },
      {
        text: 'Parar para ouvir melhor o barulho',
        nextText: 31
      }     
    ]
  },
  {
    id: 37,
    paragraphs: [
      {
        text: 'Você continua o caminho do final da sala, ao caminhar um pouco, de repente, uma parede tampa a passagem que você venho, ao se virar para ver o que tinha acontecido, outra parede tampa a continuação do caminho.'
      },    
    ], 
    options: [
      {
        text: 'Continuar',
        nextText: 44
      }   
    ]
  },  
  {
    id: 38,
    paragraphs: [
      {
        text: 'Depois de nadar muito, você esta quase sem ar e não chega a lugar nenhum, começa a se debater na esperança que um milagre aconteça e, é isso que acontece, você vê uma claridade no final do túnel e começa a nadar, nada, nada e, com muita sorte, chega em uma escada que te leva a uma pequena sala.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 49
      }    
    ]
  },  
  {
    id: 39,
    paragraphs: [
      {
        text: 'Você se lembra das moedas que achou antes, paga o anão e pega o cajado.'
      },    
    ],    
    options: [
      {
        text: 'Continuar o caminho',
        nextText: 55
      },
      {
        text: 'Continuar falando com o anão',
        nextText: 46
      }     
    ]
  },  
  {
    id: 40,
    paragraphs: [
      {
        text: 'Depois do susto você continua pelo caminho que faz uma curva à esquerda, de repente um barulho ecoa pelos túneis e, outro buraco abre em seus pés, você não tem o que fazer e acaba caindo num fosso com água, as paredes são muito lisas para escalá-las.'
      },    
    ],    
    options: [
      {
        text: 'Gritar por ajuda',
        nextText: 50
      },
      {
        text: 'Tentar achar uma saída nadando pelos túneis de baixo da água',
        nextText: 30
      }     
    ]
  },  
  {
    id: 41,
    paragraphs: [
      {
        text: 'Você não tem ouro então não pode comprar nada. O anão, vendo que você não tem ouro, se levanta e sai da sala pelo caminho que você venho. Você decide deixar ele e continuar o caminho.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 37
      }    
    ]
  },  
  {
    id: 42,
    paragraphs: [
      {
        text: 'Você pega o frasco com líquido vermelho, não sente nada depois de bebe-lo.'
      },    
    ],    
    options: [
      {
        text: 'Beber liquido verde',
        requiredState: (currentState) => !currentState.liquidoVerde,
        setState: { liquidoVerde: true },
        nextText: 43
      },
      {
        text: 'Sair da sala',
        nextText: 36
      }     
    ]
  },  
  {
    id: 43,
    paragraphs: [
      {
        text: 'Você acaba bebendo o líquido verde do frasco, não acontece nada.'
      },    
    ],    
    options: [
      {
        text: 'Beber liquido vermelho',
        requiredState: (currentState) => !currentState.liquidoVermelho,
        setState: { liquidoVermelho: true },
        nextText: 42
      },
      {
        text: 'Sair da sala',
        nextText: 36
      }     
    ]
  },  
  {
    id: 44,
    paragraphs: [
      {
        text: 'Agora você está preso, de repente uma fumaça sai pelas paredes e um jato com um líquido estranho o atinge.'
      },    
    ],    
    options: [
      {
        text: 'Tomei algum dos frascos com líquido verde ou vermelho',
        nextText: 60
      },
      {
        text: 'Não tomei nada',
        nextText: 54
      }     
    ]
  },  
  {
    id: 45,
    paragraphs: [
      {
        text: 'Você tenta desesperadamente escapar da tora mas não adianta, ela separa sua cabeça do corpo. Sua aventura acaba aqui.'
      },    
    ],    
    options: [
      {
        text: 'Reiniciar',
        nextText: -1
      }     
    ]
  },
  {
    id: 46,
    paragraphs: [
      {
        text: 'Você pede o que ele está fazendo nesta caverna, ele explica que anda pelos túneis da caverna para achar itens e depois vendê-los lá fora por um preço elevado. Ele se levanta e sai pelo caminho que você venho.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 37
      }    
    ]
  },  
  {
    id: 47,
    paragraphs: [
      {
        text: 'Você caminha mais um pouco e chega a uma pequena sala. Um anão está sentado numa cadeira no canto da sala, há um caminho no final da sala.'
      },    
    ],    
    options: [
      {
        text: 'Falar com o anão',
        nextText: 32
      },
      {
        text: 'Continuar pelo caminho',
        nextText: 37
      }     
    ]
  },  
  {
    id: 48,
    paragraphs: [
      {
        text: 'Quase sem ar você nada, nada e nada mas não chega a lugar nenhum, desesperado, começa a se debater na esperança de que aconteça um milagre, mas isso não acontece, acaba seu ar e sua aventura.'
      },    
    ],    
    options: [
      {
        text: 'Reiniciar',
        nextText: -1
      }   
    ]
  },  
  {
    id: 49,
    paragraphs: [
      {
        text: 'Já recuperado, você abre a porta no final da sala, o corredor o leva à uma porta a sua direita.'
      },    
    ],    
    options: [
      {
        text: 'Abrir a porta',
        nextText: 29
      },
      {
        text: 'Continuar o caminho',
        nextText: 36
      }     
    ]
  },  
  {
    id: 50,
    paragraphs: [
      {
        text: 'Você grita, grita e grita por ajuda mas ninguém aparece.'
      },    
    ],    
    options: [
      {
        text: 'Continuar gritando',
        nextText: 2
      },
      {
        text: 'Nadar pelos túneis',
        nextText: 30
      }     
    ]
  },
  {
    id: 51,
    paragraphs: [
      {
        text: 'Você continua o caminho até chegar em uma porta que está a sua direita.'
      },    
    ],    
    options: [
      {
        text: 'Abrir a porta',
        nextText: 58
      },
      {
        text: 'Continuar o caminho',
        nextText: 63
      }     
    ]
  }, 
  {
    id: 52,
    paragraphs: [
      {
        text: 'Você se aproxima da criatura e, com dois golpes certeiros parte o bicho ao meio.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 26
      }    
    ]
  }, 
  {
    id: 53,
    paragraphs: [
      {
        text: 'Você abre a porta e olha para dentro da sala, a sala está escura como breu, você joga uma tocha lá dentro mas mesmo assim continua escuro.'
      },    
    ],    
    options: [
      {
        text: 'Entrar na sala mesmo assim',
        nextText: 65
      },
      {
        text: 'Continuar o caminho',
        nextText: 57
      }     
    ]
  }, 
  {
    id: 54,
    paragraphs: [
      {
        text: 'O líquido que o atingiu era um veneno que, infelizmente, corroeu suas roupas e sua pele, só sobrou a espada de seu pai. Sua aventura termina aqui.'
      },    
    ],    
    options: [
      {
        text: 'Reiniciar',
        nextText: -1
      }    
    ]
  }, 
  {
    id: 55,
    paragraphs: [
      {
        text: 'Você decide parar de falar com o anão e sai da sala para continuar o caminho.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 37
      }  
    ]
  }, 
  {
    id: 56,
    paragraphs: [
      {
        text: 'A maçã está com ótimo gosto, depois de comê-la você continua o caminho no final da sala.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 17
      }   
    ]
  }, 
  {
    id: 57,
    paragraphs: [
      {
        text: 'Continuando o caminho você chega a uma bifurcação.'
      },    
    ],    
    options: [
      {
        text: 'Pegar o caminho da direita',
        nextText: 67
      },
      {
        text: 'Ir pela esquerda',
        nextText: 73
      }     
    ]
  }, 
  {
    id: 58,
    paragraphs: [
      {
        text: 'Ao abrir a porta, você vê um bicho gosmento vindo em sua direção, a espada mágica brilha em suas mãos, sem pensar muito você parte para cima do monstro.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 52
      }    
    ]
  }, 
  {
    id: 59,
    paragraphs: [
      {
        text: 'Você pega o pedaço de madeira esculpido e vê que ele se parece com uma chave, o pendura no pescoço e continua o caminho.'
      },    
    ], 
    options: [
      {
        text: 'Continuar',
        nextText: 23
      }    
    ]
  }, 
  {
    id: 60,
    paragraphs: [
      {
        text: 'O líquido que o atingiu era um veneno que, por sorte, não causou nenhum dano em você. Depois de algum tempo as duas paredes se erguem e você decide continuar o caminho em busca de seu pai.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 51
      }    
    ]
  },
  {
    id: 61,
    paragraphs: [
      {
        text: 'A mulher se aproxima de você e, ao encostar no seu ombro, o cajado que você comprou do anão começa a brilhar, ao olhar para o cajado a mulher da um grito e logo depois explode fazendo um barulho enorme, arrebentando a porta e o jogando para fora da sala.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 69
      }    
    ]
  },
  {
    id: 62,
    paragraphs: [
      {
        text: 'Você pega o manto e, ao vesti-lo, se sente mais alegre, renovado. Você volta para a primeira sala e entra na porta um.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 25
      }     
    ]
  },
  {
    id: 63,
    paragraphs: [
      {
        text: 'Depois de caminhar um pouco você encontra outra porta à sua esquerda.'
      },    
    ],    
    options: [
      {
        text: 'Abrir a porta',
        nextText: 53
      },
      {
        text: 'Continuar o caminho',
        nextText: 57
      }     
    ]
  },
  {
    id: 64,
    paragraphs: [
      {
        text: 'Após botar a mão em seu ombro a mulher desaparece, você começa a se sentir estranho, sua mão começa a enrugar, sua barba e seu cabelo estão crescendo e ficando brancos, você começa a ficar mais fraco, cai no chão e começa a gritar e logo depois a agonizar, de repente um silêncio toma conta da sala. Você acaba de ir para o mundo dos mortos.'
      },    
    ],    
    options: [
      {
        text: 'Reiniciar',
        nextText: -1
      }    
    ]
  },
  {
    id: 65,
    paragraphs: [
      {
        text: 'Ao entrar na sala a porta se fecha, você tenta desesperadamente abri-la, de repente as tochas da sala acendem.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 70
      }   
    ]
  },
  {
    id: 66,
    paragraphs: [
      {
        text: 'Você abre a porta, a espada começa a esquentar e a brilhar mais forte na sua mão, você entra num salão enorme, todo iluminado por tochas, no canto do salão você vê uma pessoa com um manto com capuz preto, não da para ver seu rosto mas seus olhos vermelhos estão brilhando, você olha para outro canto e vê seu pai deitado num altar agonizando, você corre desesperadamente até ele, mas antes que pudesse salvá-lo, o homem de capuz ergue a mão e cria uma parede de pedra na sua frente, você se vira e sai correndo para atacá-lo, mas antes de você chegar nele, ele estende a mão de novo e você fica imóvel.'
      },  
      {
        text: '\n - Obrigado. \n - Obrigado pelo que!? - Você grita. \n - Por trazer a espada até aqui. \n - O que você quer com meu pai? \n - Se eu não tivesse feito isto você não estaria aqui. \n - Por que você quer esta espada? \n - Para poder libertar o espírito da grande besta e ganhar seus poderes, mas para isso eu preciso te matar. Adeus amigo!'
      },  
      {
        text: 'E ele estende a mão de novo.'
      }                 
    ],    
    options: [
      {
        text: 'Eu tenho um colar com uma pedra verde',
        requiredState: (currentState) => currentState.colarVerde,
        nextText: 72
      },
      {
        text: 'Eu não tenho um colar',
        requiredState: (currentState) => !currentState.colarVerde,
        nextText: 71
      }     
    ]
  },
  {
    id: 67,
    paragraphs: [
      {
        text: 'Você continua pelo caminho da direita que faz outra curva a direita e acaba numa porta.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 4
      }    
    ]
  },
  {
    id: 68,
    paragraphs: [
      {
        text: 'O barulho começa a ficar mais alto e, de repente, surge uma criatura gigante do buraco, um monstro enorme e horrível, ele vem na direção de vocês e diz: \n - Eu sou a lenda e vocês serão minhas primeiras vítimas neste mundo!'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 75
      } 
    ]
  },
  {
    id: 69,
    paragraphs: [
      {
        text: 'Ao ser jogado para fora da sala você bate a cabeça na parede, depois de se recuperar você levanta.'
      },    
    ],    
    options: [
      {
        text: 'Entrar na sala para investigar',
        nextText: 74
      },
      {
        text: 'Continuar o caminho',
        nextText: 57
      }     
    ]
  },
  {
    id: 70,
    paragraphs: [
      {
        text: 'Você se vira e vê, no canto da sala, um mulher, com um vestido branco e longo, mas o que mais chama atenção é que ela é transparente e está levitando, o medo toma conta do seu corpo, ela estende o braço e vem em sua direção.'
      },    
    ],    
    options: [
      {
        text: 'Usar o cajado do anão',
        requiredState: (currentState) => currentState.cajado,
        nextText: 61
      },
      {
        text: 'Não tenho cajado nenhum',
        requiredState: (currentState) => !currentState.cajado,
        nextText: 6
      }     
    ]
  },
  {
    id: 71,
    paragraphs: [
      {
        text: 'Ao estender a mão, o homem fala algumas palavras estranhas e sua mão começa a tremer e, de repente dispara um raio que pega bem no meio do seu peito, te derrubando e logo depois te matando!'
      },    
    ],  
    options: [
      {
        text: 'Reiniciar',
        nextText: -1
      }    
    ]
  },
  {
    id: 72,
    paragraphs: [
      {
        text: 'Ao estender a mão, o homem fala algumas palavras estranhas e sua mão começa a tremer e, de repente dispara um raio, mas por sorte o raio pega na pedra verde do colar que você pegou numa das salas da caverna e volta acertando o homem que cai no chão agonizando, ele ainda tem tempo de falar algumas palavras:'
      },
      {
        text: '- Você não tem como escapar da lenda!'
      },
      {
        text: 'Você não deixa ele sofrer e crava a espada bem no meio do peito dele e depois sai na direção de seu pai, você o solta e lhe entrega a espada, ele te agradece e, antes que vocês pudessem sair da sala, um buraco enorme se forma na parede e um barulho assustador vem de lá de dentro, todas mesas e cadeiras da sala estão sendo sugadas por ele.'
      },                
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 68
      }    
    ]
  },
  {
    id: 73,
    paragraphs: [
      {
        text: 'O caminho continua e faz uma curva a direita, você chega numa porta, muito bem trabalhada, com vários desenhos, a espada mágica começa a brilhar muito forte.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 66
      }   
    ]
  },
  {
    id: 74,
    paragraphs: [
      {
        text: 'Ao entrar na sala você vê umas cadeiras e mesas arrebentadas num canto e nada mais. Você decide sair da sala e continuar o caminho.'
      },    
    ],    
    options: [
      {
        text: 'Continuar',
        nextText: 57
      }    
    ]
  },
  {
    id: 75,
    paragraphs: [
      {
        text: 'A criatura gigante de repente abre a boca e cospe fogo em sua direção. Você sente uma dor imensa e logo depois não vê e não sente mais nada, você abre os olhos e vê sua mãe e seu pai lhe dando os parabéns pelo seu aniversário, você está deitado na sua cama, era tudo um sonho! Você fica perplexo com este sonho que lhe pareceu tão real, seu pai e sua mãe dão risadas ao saberem do seu sonho, afinal, nós estamos no ano de 2020 e não na época medieval dos dragões e dos grandes tesouros. Parabéns!'
      },    
    ],    
    options: [
      {
        text: 'Jogar novamente?',
        nextText: -1
      }  
    ]
  },                                                                                                                              
  {
    id: 76,
    paragraphs: [
      {
        text: 'Entrando no quarto dos seus pais você tem uma surpresa, quase desmaia ao ver aquela cena espantosa: sua mãe deitada na cama com uma adaga no peito, ao se aproximar você percebe que a adaga está prendendo um papel que diz: "Se quiser ver seu pai novamente vá até a caverna negra, para conhecer a lenda, o mais rápido possível".'
      },
      {
        text: 'Você, indignado com a morte de sua mãe e desesperado com o desaparecimento de seu pai, pega alguns equipamentos e sua espada e corre para a caverna, seu pai lhe contou uma história muito estranha sobre ela, dizia que lá estavam os maiores monstros e a maior besta que já existiu, mas você entra correndo na caverna sem pensar muito.'
      },          
    ],     
    options: [
      {
        text: 'Continuar',
        nextText: 77
      }
    ]
  },    
  {
    id: 77,
    paragraphs: [
      {
        text: 'Dentro da caverna, que está toda iluminada por tochas, você avista a espada de seu pai posta sobre um altar, sem pensar muito você troca sua espada pela espada mágica de seu pai e sai correndo pelo túnel que leva a uma sala com duas portas.'
      },    
    ],    
    options: [
      {
        text: 'Ir pela porta um',
        nextText: 25
      },
      {
        text: 'Ir pela porta dois',
        nextText: 14
      }
    ]
  }   
];