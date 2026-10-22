import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.tituloPrincipal}>Principais tecnologias mobile</Text>
        <Text style={styles.titulo}>
          Flutter
        </Text>
        <Text style={styles.paragrafo}>
          Flutter é um software de desenvolvimento aberto criado pela Google. 
          É usada para desenvolver aplicações na web.
        </Text>
        <Text style={styles.paragrafo}>
          Ela é a principal concorrente do React Native, destaca-se pela alta performace e widgets
        </Text>
        <Image source={require('./assets/images/flutter.png')} style={styles.img} resizeMode='contain'/>

        <Text style={styles.titulo}>Ionic</Text>
        <Text style={styles.paragrafo}>
          Ionic é um outro software de desenvolvimento aberto. Possui várias interfaces prontas para o usuário.
        </Text>
        <Text style={styles.paragrafo}>
          Ideal para rapidez e menor custo, utiliza tecnologias web (HTML, CSS, JS) e é simples.  
        </Text>
        <Image source={require('./assets/images/ionic.png')} style={styles.img} resizeMode='contain'/>
        <Text style={styles.titulo}>
          Kotlin Multiplatform (KPM)
        </Text>

        <Text style={styles.paragrafo}>
          Kotlin é uma linguagem de programação de alto nível. Ela possui uma versatilidade impressionante.
        </Text>
        <Text style={styles.paragrafo}>
          Ela pode ser usada no back-end, front-end, aplicações mobile e aplicações nativas.  
        </Text>
        <Image source={require('./assets/images/kotlin.png')} style={styles.imgKotlin} resizeMode='contain'/>

        <Text style={styles.titulo}>React Native</Text>
        <Text style={styles.paragrafo}>
          React Native é um framework de código aberto criado pela Meta (Facebook) em 2015, permitindo o 
          desenvolvimento de aplicativos móveis nativos para iOS e Android usando JavaScript ou TypeScript e React. 
        </Text>
        <Text style={styles.paragrafo}>
          Ele utiliza componentes nativos reais em vez de WebViews, 
          oferecendo alta performance e interface de usuário consistente.
        </Text>
        <Image source={require('./assets/images/react.png')} style={styles.img} resizeMode='contain'/>

        <Text style={styles.titulo}>Swift</Text>
        <Text style={styles.paragrafo}>
          Swift é uma linguagem de programação moderna, intuitiva e poderosa desenvolvida pela Apple para criar aplicativos para iOS, Mac, Apple TV e Apple Watch.
        </Text>
        <Text style={styles.paragrafo}>
          É a tecnologia padrão para o desenvolvimento nativo no ecossistema Apple, conhecida pelo seu alto desempenho e sintaxe concisa.
        </Text>
        <Image source={require('./assets/images/swift.png')} style={styles.imgSwift} resizeMode='contain'/>

        <Text style={styles.titulo}>Java</Text>
        <Text style={styles.paragrafo}>
          O Java é uma das linguagens pilares do desenvolvimento mobile nativo para Android, reconhecida pela sua robustez, orientação a objetos e vasta biblioteca.
        </Text>
        <Text style={styles.paragrafo}>
          Embora o Kotlin seja atualmente preferido pelo Google, o Java continua extremamente relevante, estável e amplamente utilizado, com suporte completo através da IDE Android Studio e JDK. 
        </Text>
        <Image source={require('./assets/images/java.jpeg')} style={styles.img} resizeMode='contain'/>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(43, 206, 224)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 25,
    fontWeight: 500
  },

  paragrafo: {
    fontSize: 15,
    flex: 1,
    fontWeight: 400,
    textAlign: 'center',
    alignSelf: 'center',
    justify: 'center',
    marginTop: 5
  },

  img: {
    width: 350,
    height: 200,
    marginBottom: 15,
    marginTop: 15,
  },

  imgKotlin: {
    width: 350,
    height: 200,
  },

  imgSwift: {
    width: 350,
    height: 200,
    marginBottom: 15,
    marginTop: 15
  },

  tituloPrincipal: {
    fontSize: 25,
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15
  }
});
