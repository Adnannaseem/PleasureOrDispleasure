import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, TouchableOpacity, Image, View, Text, Alert, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ReasonButton } from './sharedComponents';

class ThankYou extends Component {
    quotes(){
        const quotesArray = [
            '',
            'Thank you for being our valued customers. We are grateful for the pleasure of serving you and meeting your printing needs.',
            'In this time of gratitude, we give thanks for you. We value your patronage and appreciate your confidence in us. ',
            'It was really a pleasure doing business with you! Thank you for choosing us!',
            'Thank very much for your loyalty. We are very honor to have customer like you. As a matter of fact, we are looking forward to serve you in the following years',
            'Thanks a lot for choosing our service. Our staff will provide you the best customer service you only deserve.',
            'Our team management would like to thank our customers for giving us a wonderful opportunity to service you.',
            'Thank you to our valued customers! Every day we are looking forward of serving you. ',
            'Thank you for your making our store number one in the city! We could not make it without your support and loyalty.'
        ]
        quoteNum= Math.floor((Math.random() * 9) + 1);
        quote=quotesArray[quoteNum]
        return quote;
    }
    render(){
        return (
            <View style={{ alignItems:'center', justifyContent:'center', flex:1}}>
                <Text style={{fontSize:30, fontWeight:'bold'}}>Thankyou For Your Review!</Text>
                <Text style={{fontSize:20, alignSelf:'center', textAlign:'center'}}>{this.quotes()}</Text>
            </View>
        );
    }
}

export default ThankYou;