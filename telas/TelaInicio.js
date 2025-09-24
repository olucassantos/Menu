import { Text, View, StyleSheet, Image } from 'react-native';

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
            
            {/* Foto
            Nome
            Biografia
            Hobbies
            Sonhos */}
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
    },
    nome: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    foto: {
        width: 60,
        height: 60,
    }
});

export default TelaInicio;