![](https://lh3.googleusercontent.com/zvq280HtrqTO5DmYPlyyyFE7g2pWZwDEiT3beTg3oQ2-jFW07-ErwlXdeyaWFFJmAzFZIvIUyKi8 "Title")

# Sobre

Rendez-Vous é um aplicativo de uma simples lista de tarefa, desenvolvido exclusivamente como minha participação (Gabriel Biesek Regis) no processo seletivo da [PixelWolf
](https://pixelwolf.com.br/).

## Observações Técnicas

 - Desenvolvido em React Native, com auxílio do [TypeScript
](https://github.com/Microsoft/TypeScript)
- Tempo total de desenvolvimento: 22 Horas, aproximadamente.
- Utilizado um padrão de projeto previamente desenvolvido em experiências passadas.
- Software utilizado para a criação do Layout/Protótipo do aplicativo: [Sketch
](https://www.sketchapp.com/)
- Software utilizado para a criação das animações: [Adobe After Effects](https://www.adobe.com/br/products/aftereffects.html?gclid=Cj0KCQiAvqDiBRDAARIsADWh5Tfn209rKEWnNzJ54JhKyLN5-GtqaTrEjitppO3ZjEHb-mw7yW78YnUaAu2PEALw_wcB&sdid=KQPPP&mv=search&ef_id=Cj0KCQiAvqDiBRDAARIsADWh5Tfn209rKEWnNzJ54JhKyLN5-GtqaTrEjitppO3ZjEHb-mw7yW78YnUaAu2PEALw_wcB:G:s&s_kwcid=AL!3085!3!301784448717!e!!g!!after%20effects)

## Principais Bibliotecas Utilizadas

-   [**react-native-animatable**](https://github.com/oblador/react-native-animatable) **- Implementação de animações de uma maneira bem mais simples. Utilizado em todo o App**
-   [**react-native-interactable**](https://github.com/wix/react-native-interactable) **- Transforma os componentes básicos do react native em componentes interativos. Utilizado para deslizar as tarefas.**
-   [**react-native-snap-carousel**](https://github.com/archriss/react-native-snap-carousel) **- Utilizado na tela de tutorial para a visualização dos cards de animação.**
-   [**react-native-i18n**](https://github.com/AlexanderZaytsev/react-native-i18nl) **- Utilizado em todo o App para a possibilidade de internacionalização de todos os textos.**
-   [**react-redux**](https://github.com/reduxjs/react-redux) **- Controle do estado global. Utilizado para persistir tarefas no dispositivo, além de comunicação entre componentes.**
-   [**lottie-react-native**](https://github.com/react-native-community/lottie-react-native) **- Utilizado para reproduzir as animações da tela de Tutorial.**

# O Design e a arquitetura do Projeto

## Design

De modo à esboçar a aparência e os principais elementos do aplicativo, todas as telas foram projetadas utilizando o [Sketch
](https://www.sketchapp.com/). O projeto executável pode ser encontrado no diretório ./Design

![
](https://lh3.googleusercontent.com/LzVJEag7Q4X3bzTAb33R7ewgHy376JnHQPNNl6sy4jSQSFsCGP2maQrJx8oMhyxVp4S_vsbsB6Zi "Design")

## Arquitetura do Projeto - Principais Conceitos

 - **Components**: Todos os componentes criados e utilizados pelas telas.
 - **Containers**: Todas as telas do aplicativo. Cada tela possui um arquivo .tsx, referente ao componente principal da tela, e outro arquivo .ts, referente aos estilos da tela.
 - **Model**: Todas as Interfaces/Modelos são declaradas aqui. Cada interface caracteriza os atributos de  um objeto de seu tipo.
 - **Store**: Controle do estado global.
	 - Cada diretório do store representa um caso de uso.
	 - Cada caso de uso contém:
		 - **Types**: Declaração dos identificadores das ações (Assim, é possível escutar e sinalizar quando uma ação for disparada).
		 - **State**: Definição da interface do estado do caso de uso. É aqui que todos os atributos referentes ao caso de uso serão especificados.
		 - **Actions**: Ações à serem disparadas pelos componentes à fim de alterar o estado do caso de uso.
		 - **Reducers**: Conexão entre a ação e a modificação do estado respectivo.
 - **Themes**: Todos os arquivos referentes à estilização global do App.
	 - **ApplicationStyles**: Alguns estilos predefinidos que poderão ser acessados em qualquer tela. 
	 - **Colors**: Todas as cores do aplicativo são definidas aqui, e são visíveis à todos.
	 - **Fonts**: Todas as fotos do aplicativo são definidas aqui, e são visíveis à todos.

	 

# Como rodar

## Opção 1 - Android - Instalação do APK

Utilize um instalador de APK's para instalar o APK localizado no diretório ./Apk/RendezVous.apk 

## Opção 2 - Android - Através do Terminal/IDE

Abra o terminal no diretório raiz do projeto e instale suas dependências através do comando:

    yarn
ou 

    npm install

Certifique-se de que tenha o SDK do Android instalado em seu ambiente de compilação, e então modifique o arquivo localizado em ./android/local.properties de forma à especificar o caminho de instalação do SDK.

    Exemplo MacOS
    /Users/seu-usuario/Library/Android/sdk

Por último, execute o seguinte comando no diretório raiz do projeto

    react-native run-android --variant=release








