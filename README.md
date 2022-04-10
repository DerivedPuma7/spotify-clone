# Spotify Radio - Semana JS Expert 6.0

## Preview

<img src="./prints/demo.png" />

## Description

O objetivo do projeto é explorar as Node.js Streams, com o client consumindo um áudio
fornecido pelo backend. Além disso, temos os efeitos sonoros que podem ser adicionados à 
transmissão principal sem pausas, tudo simultâneo. Para isso, foi utilizado o Sox, uma ferramenta para tratar e mergear os áudios sob demanda. Esse foi o projeto desenvolvido na sexta Semana JSExpert, com o mago do Javascript, Erick Wendel.

## Checklist Features

- Web API
    - [ ] Deve atingir 100% de cobertura de código em testes
    - [ ] Deve ter testes de integração validando todas as rotas da API
    - [x] Deve entregar arquivos estáticos como Node.js Stream
    - [x] Deve entregar arquivos de música como Node.js Stream
    - [x] Dado um usuário desconectado, não deve quebrar a API
    - [x] Mesmo que vários comandos sejam desparados ao mesmo tempo, não deve quebrar a API
    - [x] Caso aconteça um erro inesperado, a API deve continuar funcionando
    - [x] O projeto precisa ser executado em ambientes Linux, Mac e Windows

- Web App 
    - Client
        - [x] Deve reproduzir a transmissão
        - [x] Não deve pausar se algum efeito for adicionado
    - Controller
        - [ ] Deve atingir 100% de cobertura de código em testes
        - [x] Deve poder iniciar ou parar uma transmissão 
        - [x] Deve enviar comandos para adicionar audio efeitos à uma transmissão

### Créditos aos áudios usados

#### Transmissão 
- [English Conversation](https://youtu.be/ytmMipczEI8)

#### Efeitos
- [Applause](https://youtu.be/mMn_aYpzpG0)
- [Applause Audience](https://youtu.be/3IC76o_lhFw)
- [Boo](https://youtu.be/rYAQN11a2Dc)
- [Fart](https://youtu.be/4PnUfYhbDDM)
- [Laugh](https://youtu.be/TZ90IUrMNCo)
