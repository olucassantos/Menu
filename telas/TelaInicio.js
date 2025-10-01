import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native';

function TelaInicio() {
    return (
        <View style={{ flex: 1}}>
            <View style={estilos.cabecalho}>
                <Image
                    source={ require('../assets/fotos/eu.jpeg') }
                    style={ estilos.foto }
                />

                <Text style={estilos.nome}>Lucas Anjos</Text>
            </View>

            <ScrollView>
                <Text style={estilos.biografia}>
                    Olá, meu nome é Lucas Anjos, tenho 20 anos e sou estudante de Análise e Desenvolvimento de Sistemas. {"\n"}

                    Sou uma pessoa dedicada, comunicativa e sempre disposta a aprender coisas novas. Tenho interesse em tecnologia, programação e desenvolvimento de software. {"\n"}

                    Nos meus tempos livres, gosto de praticar esportes, assistir filmes e séries, além de explorar novas músicas e livros. {"\n"}

                    Amo viajar e conhecer novos lugares, culturas e pessoas. {"\n"}

                    Sonhar é uma das minhas maiores motivações, e estou sempre em busca de alcançar meus objetivos pessoais e profissionais. {"\n"}

                    Estou animado para compartilhar mais sobre mim e minhas experiências com vocês!
                </Text>
                
                <Text style={estilos.biografia}>
                    Hobbies: Jogar futebol, ler livros de ficção científica, assistir filmes e séries, explorar novas músicas e cozinhar. {"\n"}

                    Sonhos: Me tornar um desenvolvedor de software de sucesso, contribuir para projetos inovadores na área de tecnologia e viajar pelo mundo conhecendo diferentes culturas.
                </Text>
            </ScrollView>

            <Button title="Sair" onPress={() => {}} />
        </View>
    );
}

const estilos = StyleSheet.create({
    cabecalho: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#ADD8E6',
        padding: 10,
        marginBottom: 10,
    },
    nome: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    foto: {
        width: 60,
        height: 60,
    },
    biografia: {    
        fontSize: 24,
        padding: 10,
    }
});

export default TelaInicio;