---
slug: '/desafios/timer'
date: '2021-03-20'
title: 'Timer'
level: 0
levelTitle: Iniciante
tags: agnostico, matematica
author: Guilherme Galaverna
---

Todos nós temos eventos importantes que esperamos na vida, aniversários, aniversários e feriados, para citar alguns. Não seria bom ter um aplicativo que faz a contagem regressiva de meses, dias, horas, minutos e segundos para um evento? O cronômetro de contagem regressiva é exatamente esse app! 

O objetivo do cronômetro de contagem regressiva é fornecer uma diminuição contínua exibição dos meses, dias, horas, minutos e segundos para um usuário inserido evento.

## Histórias de usuários 

- O usuário pode ver uma caixa de entrada de evento contendo um campo de nome de evento, um campo de data, uma hora opcional e um botão 'Iniciar'. 

- O usuário pode definir o evento inserindo seu nome, a data em que é programada para ocorrer, e um horário opcional para o evento. Se a hora for omitido, presume-se que seja a meia-noite da data do evento no horário local zona. 

- O usuário pode ver uma mensagem de aviso se o nome do evento estiver em branco. 

- O usuário pode ver uma mensagem de aviso se a data ou hora do evento estiverem incorretas entrou. 

- O usuário pode ver uma mensagem de aviso se o tempo até a data e hora do evento que foi inserido iria estourar a precisão do cronômetro de contagem regressiva. 

- O usuário pode clicar no botão 'Iniciar' para ver o início do cronômetro de contagem regressiva exibindo os dias, horas, minutos e segundos até que o evento ocorra. 

- O usuário pode ver os elementos no cronômetro de contagem regressiva automaticamente decremento. Por exemplo, quando a contagem de segundos restantes chega a 0, o restante a contagem dos minutos diminuirá em 1 e os segundos começarão a contagem regressiva a partir de 59. Essa progressão deve ocorrer dos segundos até a posição dos dias restantes no display de contagem regressiva.