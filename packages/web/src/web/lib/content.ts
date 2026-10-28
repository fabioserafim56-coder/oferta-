/** Todo o conteúdo textual da página em um só lugar, para editar sem mexer em layout. */

export const SEQUENCE: Array<{
  time: string;
  title: string;
  body: string;
}> = [
  {
    time: "06h00",
    title: "O gatilho do despertar",
    body: "Água e uma abertura de manhã organizada para aproveitar a janela natural de atividade do intestino, antes de qualquer decisão do dia.",
  },
  {
    time: "06h15",
    title: "Mobilização de 5 minutos",
    body: "Movimentos simples de tronco, na sequência indicada, para colocar o corpo em movimento sem depender de academia ou equipamento.",
  },
  {
    time: "07h00",
    title: "Café da manhã com fibra",
    body: "Uma combinação prática de aveia, chia, fruta e líquido — com a proporção escrita, para você não ficar calculando nada.",
  },
  {
    time: "10h00",
    title: "Automassagem do cólon",
    body: "Um passo guiado para acompanhar o trajeto abdominal com suavidade, com a direção e o tempo definidos.",
  },
  {
    time: "12h30",
    title: "Janela pós-refeição",
    body: "Caminhada leve para não passar o resto do dia sentado depois do almoço — os horários apresentados são referências de organização, não uma condição de eficácia.",
  },
  {
    time: "Ao evacuar",
    title: "Postura mais confortável",
    body: "O ajuste do apoio dos pés e do ângulo do tronco para reduzir esforço desnecessário no momento em que ele acontece.",
  },
  {
    time: "16h00",
    title: "Reforço opcional",
    body: "Ameixa, linhaça e outras opções apresentadas com limite de uso — o que usar, quanto e quando parar.",
  },
  {
    time: "21h00",
    title: "Fechamento do ciclo",
    body: "Uma rotina noturna curta para cuidar também do sono e da conexão intestino–cérebro, preparando a manhã seguinte.",
  },
];

export const DELIVERABLES = [
  { tag: "01 · Guia", title: "O guia educativo em 8 ações", body: "28 páginas e 25 capítulos curtos. Hábitos organizados por horário, escala de observação e sinais de alerta para saber quando procurar atendimento." },
  { tag: "02 · Continuidade", title: "Plano de 7 dias", body: "Uma referência para dar continuidade à rotina e observar sua resposta ao longo dos dias, sem esperar um resultado garantido." },
  { tag: "03 · Acompanhamento", title: "Checklist e registro diário", body: "Espaço para acompanhar o que você fez, horários e sinais. Para consultar seus registros em vez de depender só da memória." },
];

export const FAQ: Array<{ q: string; a: string }> = [
  { q: "O nome promete alívio em 24 horas?", a: "Não. As 24 horas descrevem a organização do primeiro dia do roteiro. Não existe prazo garantido de alívio, e o material não é um programa de emagrecimento." },
  { q: "Por que comprar se existem dicas gratuitas?", a: "Você paga pela organização do conteúdo em um guia, pelo plano de continuidade e pelo registro da rotina. Não por um segredo ou um resultado garantido. A amostra nesta página ajuda você a decidir se esse formato é útil para você." },
  {
    q: "Em quanto tempo eu vejo alguma mudança?",
    a: "Não existe prazo garantido e esta página não promete nenhum. O material é educativo: ele organiza água, fibra, movimento, postura e horário em uma sequência para você aplicar e observar a sua própria resposta ao longo de 7 dias. Cada organismo reage de forma diferente.",
  },
  {
    q: "Funciona para mim?",
    a: "O conteúdo foi escrito para orientar adultos com constipação funcional comum. Ele não substitui avaliação individual, não serve para todos os casos e não promete o mesmo resultado para todas as pessoas. Se você tem sinais de alerta (listados na própria página e no material), a orientação é procurar atendimento antes.",
  },
  {
    q: "Preciso fazer dieta ou comprar suplemento?",
    a: "Não. A sequência usa comida comum, água, movimento leve e ajustes de rotina. Os reforços opcionais são alimentos que você encontra em mercado, apresentados com limite de uso — nada é vendido junto e não há indicação de medicamento.",
  },
  {
    q: "Como eu recebo o material?",
    a: "É 100% digital. Depois da confirmação do pagamento, o acesso é enviado pelo fluxo da Kiwify para o e-mail informado na compra. Sem espera de entrega e sem frete.",
  },
  {
    q: "Tem garantia?",
    a: "Não anunciamos uma garantia própria aqui para não prometer uma condição diferente da que está configurada oficialmente. O que existe por lei é o direito de arrependimento: compras feitas fora de loja física podem ser desistidas em até 7 dias corridos, conforme o art. 49 do Código de Defesa do Consumidor. Confira as condições vigentes no checkout antes de concluir.",
  },
  {
    q: "O pagamento é seguro?",
    a: "Sim. Você é direcionado ao checkout da Kiwify e o pagamento é processado dentro do ambiente da própria plataforma, com as formas de pagamento disponíveis naquele momento. Esta página não coleta nem armazena dados do seu cartão.",
  },
  {
    q: "Quando eu devo procurar um médico em vez de tentar em casa?",
    a: "Sangramento nas fezes, fezes muito escuras, perda de peso sem intenção, dor intensa ou persistente, distensão importante com ausência de fezes e gases por mais de 3 dias, início súbito depois dos 50 anos ou constipação alternada com diarreia exigem avaliação presencial. Nesses casos, não use este material como alternativa a atendimento.",
  },
];

export const RED_FLAGS: string[] = [
  "Sangramento nas fezes ou fezes muito escuras",
  "Perda de peso sem intenção",
  "Dor abdominal intensa ou persistente",
  "Sem fezes e sem gases por mais de 3 dias com distensão importante",
  "Constipação que começou de repente depois dos 50 anos",
  "Constipação alternando com diarreia",
];

export const FOR_YOU: string[] = [
  "Você já tentou várias dicas soltas e não sabe qual manter",
  "Você quer uma rotina mais previsível, com horário definido",
  "Você prefere um roteiro simples a uma dieta impossível",
  "Você quer saber o que observar ao longo de 7 dias",
  "Você não tem sinais de alerta e busca orientação educativa inicial",
];

export const NOT_FOR_YOU: string[] = [
  "Você quer um remédio ou uma promessa de cura",
  "Você procura diagnóstico ou substituto de consulta médica",
  "Você tem algum dos sinais de alerta listados abaixo",
  "Você busca emagrecimento ou transformação corporal",
];
