import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './styles';

export default function Home() {
    return(
        <>
            <Image
            source={ require('./../../assets/images/logo.png') }
            style={styles.image}
            />
            <Text>Faça seu pedido</Text>
            
        </>
    )



}