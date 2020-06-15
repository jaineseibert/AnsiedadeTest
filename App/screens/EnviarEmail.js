import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import email from 'react-native-email'
 
export default class EnviarEmail extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Send Mail" onPress={this.handleEmail} />
            </View>
        )
    }
 
    handleEmail = () => {
        const to = ['jaineseibert1996@gmail.com', 'jaineseibert1996@gmail.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['jaineseibert1996@gmail.com', 'jaineseibert1996@gmail.com'], // string or array of email addresses
            bcc: 'jaineseibert1996@gmail.com', // string or array of email addresses
            subject: 'Show how to use',
            body: 'Some body right here'
        }).catch(console.error)
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})